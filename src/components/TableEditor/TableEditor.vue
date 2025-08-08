<template>
  <div class="table-editor">
    <!-- 工具栏 -->
    <div class="toolbar">
      <el-button-group>
        <el-button @click="addTable" type="primary" :icon="Plus">
          添加表
        </el-button>
        <el-button @click="analyzeSchema" type="success" :icon="Search">
          AI分析
        </el-button>
        <el-button @click="resetEditor" :icon="Refresh">
          重置
        </el-button>
      </el-button-group>
      
      <div class="analysis-status">
        <el-tag v-if="analysisResult" :type="getAnalysisTagType()">
          当前范式: {{ analysisResult.currentNormalForm }}
        </el-tag>
      </div>
    </div>

    <!-- 主编辑区域 -->
    <div class="editor-container">
      <!-- 表格设计区域 -->
      <div class="design-area" ref="designArea">
        <draggable-table
          v-for="table in tableSchemas"
          :key="table.id"
          :table="table"
          :violations="getTableViolations(table.id)"
          @update="updateTable"
          @delete="deleteTable"
          @field-change="onFieldChange"
        />
        
        <!-- 添加表的占位符 -->
        <div 
          v-if="tableSchemas.length === 0"
          class="empty-placeholder"
          @click="addTable"
        >
          <el-icon class="placeholder-icon"><Plus /></el-icon>
          <p>点击添加第一个表</p>
        </div>
      </div>

      <!-- 分析结果面板 -->
      <div class="analysis-panel" v-if="analysisResult">
        <el-card header="范式分析结果">
          <violation-detector
            :violations="analysisResult.violations"
            @fix-suggestion="showFixModal"
          />
          
          <el-divider />
          
          <normalization-steps
            :steps="normalizationSteps"
            @apply-step="applyNormalization"
          />
        </el-card>
      </div>
    </div>

    <!-- AI解释面板 -->
    <div class="explanation-panel" v-if="showExplanation">
      <ai-explanation
        :concept="currentConcept"
        :context="tableSchemas"
        @close="showExplanation = false"
      />
    </div>

    <!-- 修复建议模态框 -->
    <fix-suggestion-modal
      v-model="showFixModal"
      :violation="selectedViolation"
      @apply-fix="applyFix"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted } from 'vue'
import { Plus, Search, Refresh } from '@element-plus/icons-vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { aiService } from '@/services/aiService'
import type { TableSchema, AnalysisResult, NormalizationViolation } from '@/types'
import DraggableTable from './DraggableTable.vue'
import ViolationDetector from './ViolationDetector.vue'
import NormalizationSteps from './NormalizationSteps.vue'
import AiExplanation from './AiExplanation.vue'
import FixSuggestionModal from './FixSuggestionModal.vue'

// 响应式数据
const tableSchemas = ref<TableSchema[]>([])
const analysisResult = ref<AnalysisResult | null>(null)
const normalizationSteps = ref<any[]>([])
const showExplanation = ref(false)
const currentConcept = ref('')
const showFixModal = ref(false)
const selectedViolation = ref<NormalizationViolation | null>(null)
const isAnalyzing = ref(false)

// 添加新表
const addTable = () => {
  const newTable: TableSchema = {
    id: `table_${Date.now()}`,
    name: `表${tableSchemas.value.length + 1}`,
    fields: [
      {
        id: `field_${Date.now()}`,
        name: 'id',
        type: 'INT',
        isPrimaryKey: true,
        isForeignKey: false,
        isNullable: false
      }
    ],
    x: 100 + tableSchemas.value.length * 50,
    y: 100 + tableSchemas.value.length * 50,
    width: 300,
    height: 200
  }
  
  tableSchemas.value.push(newTable)
  ElMessage.success('已添加新表')
}

// AI分析表结构
const analyzeSchema = async () => {
  if (tableSchemas.value.length === 0) {
    ElMessage.warning('请先添加至少一个表')
    return
  }

  isAnalyzing.value = true
  try {
    analysisResult.value = await aiService.analyzeTableSchema(tableSchemas.value)
    
    if (analysisResult.value.violations.length > 0) {
      ElMessage.warning(`发现 ${analysisResult.value.violations.length} 个范式问题`)
    } else {
      ElMessage.success('表结构符合范式要求！')
    }
  } catch (error) {
    ElMessage.error('分析失败，请稍后重试')
    console.error(error)
  } finally {
    isAnalyzing.value = false
  }
}

// 获取分析结果标签类型
const getAnalysisTagType = () => {
  if (!analysisResult.value) return 'info'
  
  const violations = analysisResult.value.violations
  if (violations.some(v => v.severity === 'error')) return 'danger'
  if (violations.some(v => v.severity === 'warning')) return 'warning'
  return 'success'
}

// 获取表的违规信息
const getTableViolations = (tableId: string) => {
  if (!analysisResult.value) return []
  return analysisResult.value.violations.filter(v => 
    v.affectedFields.some(field => field.startsWith(tableId))
  )
}

// 更新表信息
const updateTable = (updatedTable: TableSchema) => {
  const index = tableSchemas.value.findIndex(t => t.id === updatedTable.id)
  if (index !== -1) {
    tableSchemas.value[index] = updatedTable
  }
}

// 删除表
const deleteTable = async (tableId: string) => {
  try {
    await ElMessageBox.confirm('确定要删除这个表吗？', '确认删除', {
      type: 'warning'
    })
    
    tableSchemas.value = tableSchemas.value.filter(t => t.id !== tableId)
    ElMessage.success('表已删除')
    
    // 重新分析
    if (tableSchemas.value.length > 0) {
      analyzeSchema()
    } else {
      analysisResult.value = null
    }
  } catch {
    // 用户取消删除
  }
}

// 字段变化处理
const onFieldChange = () => {
  // 延迟分析，避免频繁调用
  setTimeout(() => {
    if (tableSchemas.value.length > 0) {
      analyzeSchema()
    }
  }, 1000)
}

// 显示修复建议
const showFixSuggestion = (violation: NormalizationViolation) => {
  selectedViolation.value = violation
  showFixModal.value = true
}

// 应用修复
const applyFix = (fixData: any) => {
  // 实现修复逻辑
  ElMessage.success('修复已应用')
  analyzeSchema()
}

// 应用范式化步骤
const applyNormalization = (step: any) => {
  // 实现范式化步骤
  ElMessage.success(`已应用步骤: ${step.title}`)
  analyzeSchema()
}

// 重置编辑器
const resetEditor = async () => {
  try {
    await ElMessageBox.confirm('确定要重置所有内容吗？', '确认重置', {
      type: 'warning'
    })
    
    tableSchemas.value = []
    analysisResult.value = null
    normalizationSteps.value = []
    showExplanation.value = false
    
    ElMessage.success('编辑器已重置')
  } catch {
    // 用户取消重置
  }
}

// 组件挂载时的初始化
onMounted(() => {
  // 可以加载示例数据或用户保存的数据
})
</script>

<style scoped lang="scss">
.table-editor {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f5f7fa;

  .toolbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    background: white;
    border-bottom: 1px solid #e4e7ed;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    .analysis-status {
      display: flex;
      align-items: center;
      gap: 12px;
    }
  }

  .editor-container {
    flex: 1;
    display: flex;
    overflow: hidden;

    .design-area {
      flex: 1;
      position: relative;
      overflow: auto;
      padding: 20px;
      background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 0.05) 1px,
        transparent 1px
      ),
      linear-gradient(
        rgba(0, 0, 0, 0.05) 1px,
        transparent 1px
      );
      background-size: 20px 20px;

      .empty-placeholder {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        color: #909399;
        cursor: pointer;
        transition: all 0.3s;

        &:hover {
          color: #409eff;
          transform: translate(-50%, -50%) scale(1.05);
        }

        .placeholder-icon {
          font-size: 48px;
          margin-bottom: 16px;
        }

        p {
          font-size: 16px;
          margin: 0;
        }
      }
    }

    .analysis-panel {
      width: 400px;
      background: white;
      border-left: 1px solid #e4e7ed;
      overflow-y: auto;
    }
  }

  .explanation-panel {
    position: fixed;
    top: 0;
    right: 0;
    width: 500px;
    height: 100vh;
    background: white;
    box-shadow: -2px 0 8px rgba(0, 0, 0, 0.1);
    z-index: 1000;
  }
}
</style>
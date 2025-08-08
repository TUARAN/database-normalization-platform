<template>
  <div class="introduction-container">
    <!-- 页面标题 -->
    <div class="page-header">
      <h1 class="page-title">数据库范式引言</h1>
      <p class="page-subtitle">理解数据库范式的重要性，为构建优雅的数据结构奠定基础</p>
    </div>

    <!-- 主要内容 -->
    <div class="content-sections">
      <!-- 什么是数据库范式 -->
      <section class="content-section">
        <div class="section-header">
          <h2 class="section-title">
            <span class="section-icon">🏗️</span>
            什么是数据库范式？
          </h2>
        </div>
        
        <div class="section-content">
          <p class="content-text">
            在数据库设计的世界里，<strong>范式（Normal Form）</strong>就像建筑设计中的结构原理一样重要。
            一个设计良好的数据库不仅能够高效存储数据，还能避免数据冗余、更新异常等问题。
          </p>
          
          <div class="highlight-box">
            <div class="highlight-icon">💡</div>
            <div class="highlight-content">
              <h4>核心理念</h4>
              <p>数据库范式是一套规范化的规则，用于消除数据冗余、保证数据一致性、提高数据完整性。</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 范式的重要性 -->
      <section class="content-section">
        <div class="section-header">
          <h2 class="section-title">
            <span class="section-icon">⭐</span>
            为什么范式如此重要？
          </h2>
        </div>
        
        <div class="section-content">
          <div class="benefits-grid">
            <div class="benefit-card">
              <div class="benefit-icon">🗂️</div>
              <h4>消除数据冗余</h4>
              <p>减少重复数据，节省存储空间，避免数据不一致</p>
            </div>
            
            <div class="benefit-card">
              <div class="benefit-icon">🔒</div>
              <h4>保证数据一致性</h4>
              <p>确保相同的数据在数据库中只有一个副本</p>
            </div>
            
            <div class="benefit-card">
              <div class="benefit-icon">✅</div>
              <h4>提高数据完整性</h4>
              <p>减少数据异常情况，提高数据质量</p>
            </div>
            
            <div class="benefit-card">
              <div class="benefit-icon">🛠️</div>
              <h4>简化维护工作</h4>
              <p>降低数据维护的复杂度，提高开发效率</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 范式概览 -->
      <section class="content-section">
        <div class="section-header">
          <h2 class="section-title">
            <span class="section-icon">📊</span>
            范式体系概览
          </h2>
        </div>
        
        <div class="section-content">
          <div class="normalization-flow">
            <div class="flow-step" v-for="(step, index) in normalizationSteps" :key="index">
              <div class="step-card" @click="navigateToForm(step.route)">
                <div class="step-header">
                  <span class="step-badge">{{ step.level }}</span>
                  <h4 class="step-title">{{ step.name }}</h4>
                </div>
                <p class="step-description">{{ step.description }}</p>
                <div class="step-key-point">
                  <strong>核心要求：</strong>{{ step.keyPoint }}
                </div>
              </div>
              
              <div class="flow-arrow" v-if="index < normalizationSteps.length - 1">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 学习方法建议 -->
      <section class="content-section">
        <div class="section-header">
          <h2 class="section-title">
            <span class="section-icon">🎯</span>
            学习方法建议
          </h2>
        </div>
        
        <div class="section-content">
          <div class="learning-tips">
            <div class="tip-item">
              <div class="tip-number">1</div>
              <div class="tip-content">
                <h4>循序渐进</h4>
                <p>从第一范式开始，逐步理解每个范式的规则和应用场景</p>
              </div>
            </div>
            
            <div class="tip-item">
              <div class="tip-number">2</div>
              <div class="tip-content">
                <h4>理论结合实践</h4>
                <p>通过具体的数据库设计案例，加深对范式概念的理解</p>
              </div>
            </div>
            
            <div class="tip-item">
              <div class="tip-number">3</div>
              <div class="tip-content">
                <h4>多做练习</h4>
                <p>使用我们提供的交互式演示，动手实践范式化过程</p>
              </div>
            </div>
            
            <div class="tip-item">
              <div class="tip-number">4</div>
              <div class="tip-content">
                <h4>对比分析</h4>
                <p>比较范式化前后的差异，理解每个范式解决的具体问题</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 开始学习按钮 -->
      <section class="cta-section">
        <div class="cta-content">
          <h3>准备好开始学习了吗？</h3>
          <p>让我们从最基础的数据异常问题开始，了解为什么需要数据库范式</p>
          <div class="cta-buttons">
            <RouterLink to="/why-normalization" class="btn btn-primary">
              开始学习
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </RouterLink>
            <RouterLink to="/interactive-demo" class="btn btn-secondary">
              直接体验演示
            </RouterLink>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const normalizationSteps = ref([
  {
    level: '1NF',
    name: '第一范式',
    description: '确保表中的每个字段都是不可分割的原子值',
    keyPoint: '原子性要求',
    route: '/first-normal-form'
  },
  {
    level: '2NF',
    name: '第二范式',
    description: '消除非主键字段对主键的部分依赖',
    keyPoint: '完全函数依赖',
    route: '/second-normal-form'
  },
  {
    level: '3NF',
    name: '第三范式',
    description: '消除非主键字段之间的传递依赖',
    keyPoint: '消除传递依赖',
    route: '/third-normal-form'
  },
  {
    level: 'BCNF',
    name: 'BC范式',
    description: '更严格的第三范式，每个决定因子都是候选键',
    keyPoint: '决定因子为候选键',
    route: '/bcnf'
  },
  {
    level: '4NF',
    name: '第四范式',
    description: '消除多值依赖，处理独立的一对多关系',
    keyPoint: '消除多值依赖',
    route: '/fourth-normal-form'
  }
])

const navigateToForm = (route: string) => {
  router.push(route)
}
</script>

<style scoped>
.introduction-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.page-header {
  text-align: center;
  margin-bottom: 3rem;
}

.page-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.page-subtitle {
  font-size: 1.2rem;
  color: #64748b;
  line-height: 1.6;
}

.content-sections {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.content-section {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.section-header {
  margin-bottom: 1.5rem;
}

.section-title {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.5rem;
  font-weight: 600;
  color: #1e293b;
  margin: 0;
}

.section-icon {
  font-size: 1.75rem;
}

.section-content {
  color: #475569;
  line-height: 1.7;
}

.content-text {
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
}

.highlight-box {
  display: flex;
  gap: 1rem;
  background: linear-gradient(135deg, #667eea10, #764ba210);
  padding: 1.5rem;
  border-radius: 12px;
  border-left: 4px solid #667eea;
}

.highlight-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.highlight-content h4 {
  color: #1e293b;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.benefit-card {
  background: #f8fafc;
  padding: 1.5rem;
  border-radius: 12px;
  text-align: center;
  transition: transform 0.2s ease;
}

.benefit-card:hover {
  transform: translateY(-2px);
}

.benefit-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.benefit-card h4 {
  color: #1e293b;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.benefit-card p {
  color: #64748b;
  font-size: 0.9rem;
}

.normalization-flow {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.flow-step {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.step-card {
  flex: 1;
  background: #f8fafc;
  padding: 1.5rem;
  border-radius: 12px;
  border: 2px solid transparent;
  cursor: pointer;
  transition: all 0.3s ease;
}

.step-card:hover {
  border-color: #667eea;
  background: white;
  transform: translateX(4px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.15);
}

.step-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.75rem;
}

.step-badge {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
}

.step-title {
  color: #1e293b;
  margin: 0;
  font-weight: 600;
}

.step-description {
  color: #64748b;
  margin-bottom: 0.75rem;
  font-size: 0.95rem;
}

.step-key-point {
  color: #667eea;
  font-size: 0.9rem;
}

.flow-arrow {
  color: #667eea;
  margin: 0 1rem;
}

.learning-tips {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.tip-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.tip-number {
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  flex-shrink: 0;
}

.tip-content h4 {
  color: #1e293b;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.tip-content p {
  color: #64748b;
  line-height: 1.6;
}

.cta-section {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border-radius: 16px;
  padding: 3rem 2rem;
  text-align: center;
}

.cta-content h3 {
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.cta-content p {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
}

.btn-primary {
  background: white;
  color: #667eea;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(255, 255, 255, 0.3);
}

.btn-secondary {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.btn-secondary:hover {
  background: white;
  color: #667eea;
  transform: translateY(-2px);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }
  
  .benefits-grid {
    grid-template-columns: 1fr;
  }
  
  .flow-step {
    flex-direction: column;
  }
  
  .flow-arrow {
    transform: rotate(90deg);
    margin: 0.5rem 0;
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .btn {
    width: 100%;
    max-width: 280px;
  }
}
</style>
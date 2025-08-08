<template>
  <div class="why-normalization-container">
    <!-- 页面标题 -->
    <div class="page-header">
      <h1 class="page-title">为什么需要数据库范式？</h1>
      <p class="page-subtitle">通过实例了解数据异常问题，理解范式化的必要性</p>
    </div>

    <!-- 问题演示 -->
    <div class="content-sections">
      <!-- 数据异常问题 -->
      <section class="content-section">
        <div class="section-header">
          <h2 class="section-title">
            <span class="section-icon">⚠️</span>
            数据异常问题
          </h2>
        </div>
        
        <div class="section-content">
          <p class="intro-text">
            在没有规范化的数据库中，常常会遇到以下问题。让我们通过一个学生选课表的例子来看看：
          </p>
          
          <!-- 问题示例表格 -->
          <div class="example-container">
            <div class="table-title">❌ 未规范化的学生选课表</div>
            <div class="table-wrapper">
              <table class="demo-table bad-table">
                <thead>
                  <tr>
                    <th>学生ID</th>
                    <th>学生姓名</th>
                    <th>学生邮箱</th>
                    <th>课程ID</th>
                    <th>课程名称</th>
                    <th>教师姓名</th>
                    <th>教师办公室</th>
                    <th>成绩</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1001</td>
                    <td>张三</td>
                    <td>zhangsan@email.com</td>
                    <td>CS101</td>
                    <td>计算机基础</td>
                    <td>李教授</td>
                    <td>A301</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>1001</td>
                    <td>张三</td>
                    <td>zhangsan@email.com</td>
                    <td>MATH201</td>
                    <td>高等数学</td>
                    <td>王教授</td>
                    <td>B205</td>
                    <td>B</td>
                  </tr>
                  <tr>
                    <td>1002</td>
                    <td>李四</td>
                    <td>lisi@email.com</td>
                    <td>CS101</td>
                    <td>计算机基础</td>
                    <td>李教授</td>
                    <td>A301</td>
                    <td>A</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <!-- SQL代码显示 -->
            <div class="code-block">
              <div class="code-header">
                <span class="code-title">SQL 创建语句</span>
                <button class="copy-btn" @click="copyCode('sql1')">📋 复制</button>
              </div>
              <pre><code id="sql1">-- 问题示例：学生选课表（未规范化）
CREATE TABLE student_course_bad (
    student_id INT,
    student_name VARCHAR(50),
    student_email VARCHAR(100),
    course_id INT,
    course_name VARCHAR(100),
    instructor_name VARCHAR(50),
    instructor_office VARCHAR(20),
    grade CHAR(2)
);</code></pre>
            </div>
          </div>
        </div>
      </section>

      <!-- 具体问题分析 -->
      <section class="content-section">
        <div class="section-header">
          <h2 class="section-title">
            <span class="section-icon">🔍</span>
            问题分析
          </h2>
        </div>
        
        <div class="section-content">
          <div class="problems-grid">
            <div class="problem-card insertion">
              <div class="problem-header">
                <div class="problem-icon">➕</div>
                <h4>插入异常</h4>
              </div>
              <div class="problem-content">
                <p><strong>问题：</strong>无法单独插入教师信息</p>
                <div class="example-box">
                  <p class="example-title">场景示例：</p>
                  <p>新来了一位教师，但还没有开课。我们无法在这个表中记录这位教师的信息，因为缺少学生和课程的关键信息。</p>
                </div>
              </div>
            </div>

            <div class="problem-card deletion">
              <div class="problem-header">
                <div class="problem-icon">🗑️</div>
                <h4>删除异常</h4>
              </div>
              <div class="problem-content">
                <p><strong>问题：</strong>删除学生记录可能丢失课程信息</p>
                <div class="example-box">
                  <p class="example-title">场景示例：</p>
                  <p>如果所有选修CS101课程的学生都退选了，删除这些记录会导致CS101课程和李教授的信息完全丢失。</p>
                </div>
              </div>
            </div>

            <div class="problem-card update">
              <div class="problem-header">
                <div class="problem-icon">✏️</div>
                <h4>更新异常</h4>
              </div>
              <div class="problem-content">
                <p><strong>问题：</strong>修改教师办公室需要更新多条记录</p>
                <div class="example-box">
                  <p class="example-title">场景示例：</p>
                  <p>李教授换了办公室，需要更新所有包含李教授信息的记录。如果遗漏某条记录，就会造成数据不一致。</p>
                </div>
              </div>
            </div>

            <div class="problem-card redundancy">
              <div class="problem-header">
                <div class="problem-icon">📚</div>
                <h4>数据冗余</h4>
              </div>
              <div class="problem-content">
                <p><strong>问题：</strong>学生和教师信息重复存储</p>
                <div class="example-box">
                  <p class="example-title">场景示例：</p>
                  <p>张三的姓名和邮箱在每门选修课记录中都重复出现，浪费存储空间且容易导致数据不一致。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 范式化的好处 -->
      <section class="content-section">
        <div class="section-header">
          <h2 class="section-title">
            <span class="section-icon">✨</span>
            范式化的好处
          </h2>
        </div>
        
        <div class="section-content">
          <div class="benefits-comparison">
            <div class="comparison-side before">
              <h4>范式化前</h4>
              <ul class="comparison-list">
                <li class="negative">❌ 数据大量冗余</li>
                <li class="negative">❌ 更新维护困难</li>
                <li class="negative">❌ 容易数据不一致</li>
                <li class="negative">❌ 插入删除异常</li>
                <li class="negative">❌ 存储空间浪费</li>
              </ul>
            </div>
            
            <div class="comparison-arrow">
              <div class="arrow-container">
                <span class="arrow-text">范式化</span>
                <svg width="48" height="24" viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 12H46M46 12L36 2M46 12L36 22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
            
            <div class="comparison-side after">
              <h4>范式化后</h4>
              <ul class="comparison-list">
                <li class="positive">✅ 消除数据冗余</li>
                <li class="positive">✅ 保证数据一致性</li>
                <li class="positive">✅ 提高数据完整性</li>
                <li class="positive">✅ 简化维护工作</li>
                <li class="positive">✅ 优化存储效率</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- 解决方案预览 -->
      <section class="content-section">
        <div class="section-header">
          <h2 class="section-title">
            <span class="section-icon">💡</span>
            解决方案预览
          </h2>
        </div>
        
        <div class="section-content">
          <p class="intro-text">
            通过范式化，我们可以将原来的一个表分解为多个相关的表：
          </p>
          
          <div class="solution-preview">
            <div class="table-group">
              <div class="mini-table">
                <div class="table-title good">✅ 学生表</div>
                <div class="table-content">
                  <div class="table-field">学生ID (主键)</div>
                  <div class="table-field">学生姓名</div>
                  <div class="table-field">学生邮箱</div>
                </div>
              </div>
              
              <div class="mini-table">
                <div class="table-title good">✅ 课程表</div>
                <div class="table-content">
                  <div class="table-field">课程ID (主键)</div>
                  <div class="table-field">课程名称</div>
                  <div class="table-field">教师姓名</div>
                  <div class="table-field">教师办公室</div>
                </div>
              </div>
              
              <div class="mini-table">
                <div class="table-title good">✅ 选课表</div>
                <div class="table-content">
                  <div class="table-field">学生ID (外键)</div>
                  <div class="table-field">课程ID (外键)</div>
                  <div class="table-field">成绩</div>
                </div>
              </div>
            </div>
            
            <div class="solution-benefits">
              <h4>这样设计的优势：</h4>
              <ul>
                <li>✅ 每个实体信息只存储一次</li>
                <li>✅ 可以独立管理学生、课程信息</li>
                <li>✅ 数据更新只需修改一处</li>
                <li>✅ 避免了各种数据异常</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- 实战案例导航 -->
      <section class="cta-section">
        <div class="cta-content">
          <h3>准备深入学习范式化？</h3>
          <p>现在你已经了解了为什么需要数据库范式，让我们从第一范式开始，逐步学习如何消除这些问题。</p>
          <div class="cta-buttons">
            <RouterLink to="/first-normal-form" class="btn btn-primary">
              学习第一范式
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </RouterLink>
            <RouterLink to="/interactive-demo" class="btn btn-secondary">
              交互式演示
            </RouterLink>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
const copyCode = (elementId: string) => {
  const element = document.getElementById(elementId)
  if (element) {
    navigator.clipboard.writeText(element.textContent || '')
      .then(() => {
        // 可以添加复制成功的提示
        console.log('代码已复制到剪贴板')
      })
      .catch(err => {
        console.error('复制失败:', err)
      })
  }
}
</script>

<style scoped>
.why-normalization-container {
  max-width: 1200px;
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
  background: linear-gradient(135deg, #ef4444, #dc2626);
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

.intro-text {
  font-size: 1.1rem;
  margin-bottom: 2rem;
}

/* 表格样式 */
.example-container {
  margin: 2rem 0;
}

.table-title {
  font-weight: 600;
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  display: inline-block;
}

.table-title.good {
  background: #dcfce7;
  color: #166534;
}

.table-wrapper {
  overflow-x: auto;
  margin-bottom: 1.5rem;
}

.demo-table {
  width: 100%;
  border-collapse: collapse;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.demo-table.bad-table {
  border: 2px solid #ef4444;
}

.demo-table th {
  background: #fef2f2;
  color: #991b1b;
  padding: 1rem 0.75rem;
  font-weight: 600;
  text-align: left;
  border-bottom: 2px solid #ef4444;
}

.demo-table td {
  padding: 0.75rem;
  border-bottom: 1px solid #fee2e2;
  background: white;
}

.demo-table tr:hover td {
  background: #fef2f2;
}

/* 代码块样式 */
.code-block {
  background: #1e293b;
  border-radius: 8px;
  overflow: hidden;
  margin: 1rem 0;
}

.code-header {
  display: flex;
  justify-content: between;
  align-items: center;
  padding: 1rem;
  background: #334155;
  border-bottom: 1px solid #475569;
}

.code-title {
  color: #e2e8f0;
  font-weight: 500;
}

.copy-btn {
  background: #667eea;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.875rem;
  transition: background-color 0.2s;
}

.copy-btn:hover {
  background: #5a67d8;
}

.code-block pre {
  margin: 0;
  padding: 1.5rem;
  color: #e2e8f0;
  font-family: 'Monaco', 'Consolas', monospace;
  font-size: 0.9rem;
  line-height: 1.5;
  overflow-x: auto;
}

/* 问题分析网格 */
.problems-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.problem-card {
  border-radius: 12px;
  padding: 1.5rem;
  border-left: 4px solid;
}

.problem-card.insertion {
  background: #fef3c7;
  border-left-color: #f59e0b;
}

.problem-card.deletion {
  background: #fee2e2;
  border-left-color: #ef4444;
}

.problem-card.update {
  background: #dbeafe;
  border-left-color: #3b82f6;
}

.problem-card.redundancy {
  background: #f3e8ff;
  border-left-color: #8b5cf6;
}

.problem-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.problem-icon {
  font-size: 1.5rem;
}

.problem-header h4 {
  color: #1e293b;
  margin: 0;
  font-weight: 600;
}

.problem-content p {
  margin-bottom: 1rem;
  color: #374151;
}

.example-box {
  background: rgba(255, 255, 255, 0.7);
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.example-title {
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #1e293b;
}

/* 对比样式 */
.benefits-comparison {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 2rem;
  align-items: center;
  margin: 2rem 0;
}

.comparison-side {
  background: #f8fafc;
  padding: 2rem;
  border-radius: 12px;
}

.comparison-side h4 {
  text-align: center;
  margin-bottom: 1.5rem;
  font-weight: 600;
  color: #1e293b;
}

.comparison-side.before {
  border: 2px solid #ef4444;
}

.comparison-side.after {
  border: 2px solid #10b981;
}

.comparison-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.comparison-list li {
  padding: 0.5rem 0;
  font-weight: 500;
}

.comparison-list .negative {
  color: #dc2626;
}

.comparison-list .positive {
  color: #059669;
}

.comparison-arrow {
  display: flex;
  justify-content: center;
  align-items: center;
}

.arrow-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: #667eea;
}

.arrow-text {
  font-weight: 600;
  font-size: 0.9rem;
}

/* 解决方案预览 */
.solution-preview {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.table-group {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.mini-table {
  background: #f8fafc;
  border-radius: 8px;
  overflow: hidden;
  border: 2px solid #10b981;
}

.table-content {
  padding: 1rem;
}

.table-field {
  padding: 0.5rem;
  background: white;
  margin-bottom: 0.5rem;
  border-radius: 4px;
  font-size: 0.9rem;
  color: #374151;
}

.table-field:last-child {
  margin-bottom: 0;
}

.solution-benefits {
  background: #dcfce7;
  padding: 1.5rem;
  border-radius: 12px;
  border-left: 4px solid #10b981;
}

.solution-benefits h4 {
  color: #166534;
  margin-bottom: 1rem;
  font-weight: 600;
}

.solution-benefits ul {
  margin: 0;
  padding-left: 1rem;
}

.solution-benefits li {
  color: #15803d;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

/* CTA区域 */
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
  
  .problems-grid {
    grid-template-columns: 1fr;
  }
  
  .benefits-comparison {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .comparison-arrow {
    order: 2;
  }
  
  .comparison-side.before {
    order: 1;
  }
  
  .comparison-side.after {
    order: 3;
  }
  
  .arrow-container svg {
    transform: rotate(90deg);
  }
  
  .table-group {
    grid-template-columns: 1fr;
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
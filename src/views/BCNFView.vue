<template>
  <div class="bcnf-container">
    <div class="page-header">
      <h1 class="page-title">BCNF范式</h1>
      <p class="page-subtitle">Boyce-Codd范式：更严格的第三范式，每个决定因子都必须是候选键</p>
    </div>

    <div class="content-sections">
      <section class="content-section">
        <div class="section-header">
          <h2 class="section-title">
            <span class="section-icon">📝</span>
            定义与要求
          </h2>
        </div>
        
        <div class="section-content">
          <div class="definition-box">
            <div class="definition-icon">🔧</div>
            <div class="definition-content">
              <h4>BCNF（Boyce-Codd范式）要求：</h4>
              <p>1. 满足第三范式（3NF）</p>
              <p>2. <strong>每个决定因子都必须是候选键</strong></p>
              <p>3. 消除所有的非平凡函数依赖中的非候选键决定因子</p>
            </div>
          </div>
          
          <div class="key-points">
            <h4>BCNF与3NF的区别：</h4>
            <div class="comparison-table">
              <div class="comparison-row">
                <div class="comparison-label">3NF</div>
                <div class="comparison-content">非主键字段不能传递依赖于主键</div>
              </div>
              <div class="comparison-row bcnf">
                <div class="comparison-label">BCNF</div>
                <div class="comparison-content">每个决定因子都必须是候选键（更严格）</div>
              </div>
            </div>
            <div class="key-concepts">
              <h5>重要概念：</h5>
              <ul>
                <li>🔑 <strong>候选键</strong>：能够唯一标识表中每一行的最小字段集合</li>
                <li>➡️ <strong>决定因子</strong>：在函数依赖X→Y中，X是决定因子</li>
                <li>⚡ <strong>非平凡依赖</strong>：Y不是X的子集的函数依赖</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <div class="section-header">
          <h2 class="section-title">
            <span class="section-icon">❌</span>
            识别BCNF违反
          </h2>
        </div>
        
        <div class="section-content">
          <p class="intro-text">
            让我们通过一个课程安排表的例子来理解BCNF与3NF的区别：
          </p>
          
          <div class="example-container">
            <div class="table-title bad">❌ 满足3NF但违反BCNF的课程安排表</div>
            <div class="table-wrapper">
              <table class="demo-table bad-table">
                <thead>
                  <tr>
                    <th class="primary-key">课程ID</th>
                    <th class="primary-key">教师ID</th>
                    <th class="primary-key">时间段</th>
                    <th>教室</th>
                    <th>学分</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>CS101</td>
                    <td>T001</td>
                    <td>周一上午</td>
                    <td>A101</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>CS101</td>
                    <td>T002</td>
                    <td>周三下午</td>
                    <td>B205</td>
                    <td>3</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div class="bcnf-analysis">
              <h4>BCNF问题分析：</h4>
              
              <div class="analysis-section">
                <h5>候选键识别：</h5>
                <div class="candidate-keys">
                  <div class="key-item">
                    <span class="key-badge">候选键1</span>
                    <span>(课程ID, 教师ID)</span>
                  </div>
                  <div class="key-item">
                    <span class="key-badge">候选键2</span>
                    <span>(课程ID, 时间段)</span>
                  </div>
                </div>
              </div>

              <div class="analysis-section">
                <h5>问题依赖：</h5>
                <div class="dependency-list">
                  <div class="dependency-item invalid">
                    <span class="dep-source">时间段</span>
                    <span class="arrow">→</span>
                    <span class="dep-target">教师ID</span>
                    <span class="dep-status invalid">❌ 决定因子不是候选键</span>
                  </div>
                </div>
              </div>

              <div class="problem-explanation">
                <h5>为什么违反BCNF？</h5>
                <p>假设每个时间段只能有一个教师上课（业务规则），那么存在依赖：<strong>时间段 → 教师ID</strong></p>
                <p>但是"时间段"不是候选键，这违反了BCNF的要求。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <div class="section-header">
          <h2 class="section-title">
            <span class="section-icon">✅</span>
            转换为BCNF
          </h2>
        </div>
        
        <div class="section-content">
          <p class="intro-text">
            为了满足BCNF，我们需要分解表，确保每个决定因子都是候选键：
          </p>
          
          <div class="bcnf-decomposition">
            <div class="decomposition-step">
              <div class="step-header">
                <div class="step-number">1</div>
                <h4>识别问题依赖</h4>
              </div>
              <div class="problem-dependency">
                <span class="problematic">时间段 → 教师ID</span>
                <span class="explanation">（时间段不是候选键）</span>
              </div>
            </div>

            <div class="decomposition-arrow">↓</div>

            <div class="decomposition-step">
              <div class="step-header">
                <div class="step-number">2</div>
                <h4>分解表结构</h4>
              </div>
              
              <div class="decomposed-tables">
                <div class="mini-table-container">
                  <div class="table-title good">✅ 时间教师表</div>
                  <table class="mini-table">
                    <thead>
                      <tr>
                        <th class="primary-key">时间段</th>
                        <th>教师ID</th>
                        <th>教室</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>周一上午</td>
                        <td>T001</td>
                        <td>A101</td>
                      </tr>
                      <tr>
                        <td>周三下午</td>
                        <td>T002</td>
                        <td>B205</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div class="mini-table-container">
                  <div class="table-title good">✅ 课程安排表</div>
                  <table class="mini-table">
                    <thead>
                      <tr>
                        <th class="primary-key">课程ID</th>
                        <th class="primary-key">时间段</th>
                        <th>学分</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>CS101</td>
                        <td>周一上午</td>
                        <td>3</td>
                      </tr>
                      <tr>
                        <td>CS101</td>
                        <td>周三下午</td>
                        <td>3</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div class="code-block">
            <div class="code-header">
              <span class="code-title">符合BCNF的SQL创建语句</span>
              <button class="copy-btn" @click="copyCode('bcnf-sql')">📋 复制</button>
            </div>
            <pre><code id="bcnf-sql">-- BCNF分解：确保每个决定因子都是候选键
CREATE TABLE time_instructor_bcnf (
    time_slot VARCHAR(20) PRIMARY KEY,
    instructor_id VARCHAR(10),
    classroom VARCHAR(20)
);

CREATE TABLE course_schedule_bcnf (
    course_id VARCHAR(10),
    time_slot VARCHAR(20),
    credits INT,
    PRIMARY KEY (course_id, time_slot),
    FOREIGN KEY (time_slot) REFERENCES time_instructor_bcnf(time_slot)
);</code></pre>
          </div>
        </div>
      </section>

      <section class="content-section">
        <div class="section-header">
          <h2 class="section-title">
            <span class="section-icon">⚖️</span>
            BCNF的优势与权衡
          </h2>
        </div>
        
        <div class="section-content">
          <div class="pros-cons">
            <div class="pros-section">
              <h4>✅ BCNF的优势</h4>
              <ul class="advantage-list">
                <li>更彻底地消除数据冗余</li>
                <li>避免更多的更新异常</li>
                <li>更严格的数据完整性约束</li>
                <li>更清晰的表间关系</li>
              </ul>
            </div>
            
            <div class="cons-section">
              <h4>⚠️ 需要注意的问题</h4>
              <ul class="consideration-list">
                <li>可能需要更多的表连接操作</li>
                <li>查询复杂度可能增加</li>
                <li>在某些情况下可能影响性能</li>
                <li>不是所有情况都需要达到BCNF</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="cta-section">
        <div class="cta-content">
          <h3>掌握了BCNF范式！</h3>
          <p>恭喜！你已经掌握了更严格的BCNF范式。现在让我们学习处理多值依赖的第四范式。</p>
          <div class="cta-buttons">
            <RouterLink to="/fourth-normal-form" class="btn btn-primary">
              学习第四范式
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </RouterLink>
            <RouterLink to="/third-normal-form" class="btn btn-secondary">
              回顾第三范式
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
  }
}
</script>

<style scoped>
.bcnf-container {
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
  background: linear-gradient(135deg, #8b5cf6, #7c3aed);
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

.definition-box {
  display: flex;
  gap: 1rem;
  background: linear-gradient(135deg, #8b5cf610, #7c3aed10);
  padding: 1.5rem;
  border-radius: 12px;
  border-left: 4px solid #8b5cf6;
  margin-bottom: 1.5rem;
}

.definition-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.definition-content h4 {
  color: #1e293b;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.definition-content p {
  margin-bottom: 0.5rem;
}

.key-points {
  background: #f8fafc;
  padding: 1.5rem;
  border-radius: 12px;
}

.key-points h4 {
  color: #1e293b;
  margin-bottom: 1rem;
  font-weight: 600;
}

.comparison-table {
  margin-bottom: 1.5rem;
}

.comparison-row {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem;
  margin-bottom: 0.5rem;
  border-radius: 8px;
  background: white;
  border: 2px solid #e5e7eb;
}

.comparison-row.bcnf {
  border-color: #8b5cf6;
  background: #f3f4f6;
}

.comparison-label {
  font-weight: 600;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  min-width: 60px;
  text-align: center;
}

.comparison-row .comparison-label {
  background: #e5e7eb;
  color: #374151;
}

.comparison-row.bcnf .comparison-label {
  background: #8b5cf6;
  color: white;
}

.comparison-content {
  flex: 1;
}

.key-concepts ul {
  margin: 0;
  padding-left: 1rem;
}

.key-concepts li {
  margin-bottom: 0.5rem;
  color: #374151;
  font-weight: 500;
}

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

.table-title.bad {
  background: #fee2e2;
  color: #991b1b;
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
  border: 2px solid #8b5cf6;
}

.demo-table th {
  padding: 1rem 0.75rem;
  font-weight: 600;
  text-align: left;
  border-bottom: 2px solid #8b5cf6;
  background: #f3f4f6;
  color: #6b21a8;
  font-size: 0.9rem;
}

.demo-table td {
  padding: 0.75rem;
  border-bottom: 1px solid #e5e7eb;
  background: white;
  font-size: 0.9rem;
}

.primary-key {
  background-color: #dbeafe !important;
  color: #1d4ed8 !important;
  font-weight: 700 !important;
}

.bcnf-analysis {
  background: #f3f4f6;
  padding: 1.5rem;
  border-radius: 12px;
  border-left: 4px solid #8b5cf6;
  margin-bottom: 1.5rem;
}

.bcnf-analysis h4 {
  color: #6b21a8;
  margin-bottom: 1rem;
  font-weight: 600;
}

.analysis-section {
  margin-bottom: 1.5rem;
}

.analysis-section h5 {
  color: #374151;
  margin-bottom: 0.75rem;
  font-weight: 600;
}

.candidate-keys {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.key-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: white;
  border-radius: 8px;
  border: 1px solid #d1d5db;
}

.key-badge {
  background: #8b5cf6;
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
}

.dependency-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.dependency-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem;
  border-radius: 8px;
  background: white;
  border: 1px solid;
}

.dependency-item.invalid {
  border-color: #f87171;
  background: #fef2f2;
}

.dep-source, .dep-target {
  font-weight: 500;
}

.arrow {
  font-size: 1.2rem;
  color: #6b7280;
}

.dep-status {
  font-size: 0.875rem;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-weight: 600;
}

.dep-status.invalid {
  background: #dc2626;
  color: white;
}

.problem-explanation {
  background: #fef2f2;
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid #ef4444;
}

.problem-explanation h5 {
  color: #991b1b;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.problem-explanation p {
  color: #7f1d1d;
  margin-bottom: 0.5rem;
}

.bcnf-decomposition {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 2rem 0;
}

.decomposition-step {
  background: #f8fafc;
  padding: 1.5rem;
  border-radius: 12px;
  border: 2px solid #8b5cf6;
}

.step-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.step-number {
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, #8b5cf6, #7c3aed);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
}

.step-header h4 {
  color: #1e293b;
  margin: 0;
  font-weight: 600;
}

.problem-dependency {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem;
  background: #fef2f2;
  border-radius: 8px;
  border-left: 4px solid #ef4444;
}

.problematic {
  font-weight: 600;
  color: #dc2626;
}

.explanation {
  color: #7f1d1d;
  font-size: 0.9rem;
}

.decomposition-arrow {
  text-align: center;
  font-size: 2rem;
  color: #8b5cf6;
  font-weight: bold;
}

.decomposed-tables {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.mini-table-container {
  margin-bottom: 1rem;
}

.mini-table {
  width: 100%;
  border-collapse: collapse;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 0.85rem;
}

.mini-table th {
  background: #dcfce7;
  color: #166534;
  padding: 0.75rem 0.5rem;
  font-weight: 600;
  text-align: left;
  font-size: 0.8rem;
}

.mini-table th.primary-key {
  background: #dbeafe;
  color: #1d4ed8;
}

.mini-table td {
  padding: 0.5rem;
  border-bottom: 1px solid #e5e7eb;
  background: white;
}

.code-block {
  background: #1e293b;
  border-radius: 8px;
  overflow: hidden;
  margin: 1rem 0;
}

.code-header {
  display: flex;
  justify-content: space-between;
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
  background: #8b5cf6;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.875rem;
  transition: background-color 0.2s;
}

.copy-btn:hover {
  background: #7c3aed;
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

.pros-cons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.pros-section, .cons-section {
  padding: 1.5rem;
  border-radius: 12px;
}

.pros-section {
  background: #f0fdf4;
  border-left: 4px solid #10b981;
}

.cons-section {
  background: #fef3c7;
  border-left: 4px solid #f59e0b;
}

.pros-section h4 {
  color: #065f46;
  margin-bottom: 1rem;
  font-weight: 600;
}

.cons-section h4 {
  color: #92400e;
  margin-bottom: 1rem;
  font-weight: 600;
}

.advantage-list, .consideration-list {
  margin: 0;
  padding-left: 1rem;
}

.advantage-list li {
  color: #047857;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.consideration-list li {
  color: #b45309;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.cta-section {
  background: linear-gradient(135deg, #8b5cf6, #7c3aed);
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
}

.btn-primary {
  background: white;
  color: #8b5cf6;
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
  color: #8b5cf6;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }
  
  .decomposed-tables {
    grid-template-columns: 1fr;
  }
  
  .pros-cons {
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
  
  .candidate-keys {
    flex-direction: column;
  }
  
  .dependency-item {
    flex-wrap: wrap;
    gap: 0.5rem;
  }
}
</style>
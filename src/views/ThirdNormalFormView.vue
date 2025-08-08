<template>
  <div class="third-nf-container">
    <div class="page-header">
      <h1 class="page-title">第三范式 (3NF)</h1>
      <p class="page-subtitle">消除传递依赖：非主键字段不能传递依赖于主键</p>
    </div>

    <div class="content-sections">
      <!-- 定义与要求 -->
      <section class="content-section">
        <div class="section-header">
          <h2 class="section-title">
            <span class="section-icon">📝</span>
            定义与要求
          </h2>
        </div>
        
        <div class="section-content">
          <div class="definition-box">
            <div class="definition-icon">3️⃣</div>
            <div class="definition-content">
              <h4>第三范式（3NF）要求：</h4>
              <p>1. 满足第二范式（2NF）</p>
              <p>2. <strong>非主键字段不能传递依赖于主键</strong></p>
              <p>3. 非主键字段之间不存在函数依赖关系</p>
            </div>
          </div>
          
          <div class="key-points">
            <h4>什么是传递依赖？</h4>
            <div class="transitive-example">
              <div class="dependency-chain">
                <span class="dep-item">主键A</span>
                <span class="arrow">→</span>
                <span class="dep-item">非主键B</span>
                <span class="arrow">→</span>
                <span class="dep-item">非主键C</span>
              </div>
              <p>如果存在 A → B → C 的依赖链，那么C传递依赖于A</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 传递依赖问题演示 -->
      <section class="content-section">
        <div class="section-header">
          <h2 class="section-title">
            <span class="section-icon">❌</span>
            识别传递依赖
          </h2>
        </div>
        
        <div class="section-content">
          <p class="intro-text">
            让我们通过员工部门表的例子来理解传递依赖问题：
          </p>
          
          <div class="example-container">
            <div class="table-title bad">❌ 违反3NF的员工表</div>
            <div class="table-wrapper">
              <table class="demo-table bad-table">
                <thead>
                  <tr>
                    <th class="primary-key">员工ID</th>
                    <th>员工姓名</th>
                    <th class="transitive-cause">部门ID</th>
                    <th class="transitive-dep">部门名称</th>
                    <th class="transitive-dep">部门经理</th>
                    <th>薪水</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>E001</td>
                    <td>张三</td>
                    <td>D01</td>
                    <td class="violation">技术部</td>
                    <td class="violation">李经理</td>
                    <td>8000</td>
                  </tr>
                  <tr>
                    <td>E002</td>
                    <td>李四</td>
                    <td>D01</td>
                    <td class="violation">技术部</td>
                    <td class="violation">李经理</td>
                    <td>7500</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <!-- 传递依赖分析 -->
            <div class="transitive-analysis">
              <h4>传递依赖分析：</h4>
              <div class="dependency-flow">
                <div class="dependency-step">
                  <span class="step-label">直接依赖</span>
                  <div class="dependency-item">
                    <span class="dep-source">员工ID</span>
                    <span class="arrow">→</span>
                    <span class="dep-target">部门ID</span>
                  </div>
                </div>
                <div class="dependency-step">
                  <span class="step-label">间接依赖</span>
                  <div class="dependency-item">
                    <span class="dep-source">部门ID</span>
                    <span class="arrow">→</span>
                    <span class="dep-target">部门名称, 部门经理</span>
                  </div>
                </div>
                <div class="dependency-step danger">
                  <span class="step-label">传递依赖</span>
                  <div class="dependency-item">
                    <span class="dep-source">员工ID</span>
                    <span class="arrow">→</span>
                    <span class="dep-intermediate">部门ID</span>
                    <span class="arrow">→</span>
                    <span class="dep-target">部门名称, 部门经理</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 转换为3NF -->
      <section class="content-section">
        <div class="section-header">
          <h2 class="section-title">
            <span class="section-icon">✅</span>
            转换为3NF
          </h2>
        </div>
        
        <div class="section-content">
          <p class="intro-text">
            通过分离传递依赖的字段，我们可以将表转换为符合3NF的设计：
          </p>
          
          <!-- 转换后的表格 -->
          <div class="nf-tables">
            <div class="table-group">
              <div class="mini-table-container">
                <div class="table-title good">✅ 部门表 (departments_3nf)</div>
                <table class="mini-table">
                  <thead>
                    <tr>
                      <th class="primary-key">department_id</th>
                      <th>department_name</th>
                      <th>manager_name</th>
                      <th>location</th>
                      <th>budget</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>D01</td>
                      <td>技术部</td>
                      <td>李经理</td>
                      <td>A座10楼</td>
                      <td>500000</td>
                    </tr>
                    <tr>
                      <td>D02</td>
                      <td>销售部</td>
                      <td>赵经理</td>
                      <td>B座5楼</td>
                      <td>300000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="mini-table-container">
                <div class="table-title good">✅ 员工表 (employees_3nf)</div>
                <table class="mini-table">
                  <thead>
                    <tr>
                      <th class="primary-key">employee_id</th>
                      <th>employee_name</th>
                      <th class="foreign-key">department_id</th>
                      <th>position</th>
                      <th>hire_date</th>
                      <th>salary</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>E001</td>
                      <td>张三</td>
                      <td>D01</td>
                      <td>高级工程师</td>
                      <td>2023-01-15</td>
                      <td>8000</td>
                    </tr>
                    <tr>
                      <td>E002</td>
                      <td>李四</td>
                      <td>D01</td>
                      <td>工程师</td>
                      <td>2023-03-01</td>
                      <td>7500</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <!-- 3NF SQL代码 -->
          <div class="code-block">
            <div class="code-header">
              <span class="code-title">符合3NF的SQL创建语句</span>
              <button class="copy-btn" @click="copyCode('good-3nf-sql')">📋 复制</button>
            </div>
            <pre><code id="good-3nf-sql">-- 拆分表，消除传递依赖
CREATE TABLE departments_3nf (
    department_id INT PRIMARY KEY,
    department_name VARCHAR(50),
    manager_name VARCHAR(50),
    location VARCHAR(100),
    budget DECIMAL(12,2)
);

CREATE TABLE employees_3nf (
    employee_id INT PRIMARY KEY,
    employee_name VARCHAR(50),
    department_id INT,
    position VARCHAR(50),
    hire_date DATE,
    salary DECIMAL(10,2),
    FOREIGN KEY (department_id) REFERENCES departments_3nf(department_id)
);</code></pre>
          </div>
        </div>
      </section>

      <!-- 3NF的优势 -->
      <section class="content-section">
        <div class="section-header">
          <h2 class="section-title">
            <span class="section-icon">🎯</span>
            3NF的优势
          </h2>
        </div>
        
        <div class="section-content">
          <div class="advantages-grid">
            <div class="advantage-card">
              <div class="advantage-icon">🔄</div>
              <h4>独立维护</h4>
              <p>可以独立管理部门信息，不依赖员工数据</p>
            </div>
            
            <div class="advantage-card">
              <div class="advantage-icon">✏️</div>
              <h4>简化更新</h4>
              <p>修改部门信息只需要更新一条记录</p>
            </div>
            
            <div class="advantage-card">
              <div class="advantage-icon">📊</div>
              <h4>数据一致</h4>
              <p>消除传递依赖，确保数据的一致性</p>
            </div>
            
            <div class="advantage-card">
              <div class="advantage-icon">💾</div>
              <h4>减少冗余</h4>
              <p>进一步减少数据冗余，优化存储效率</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 下一步学习 -->
      <section class="cta-section">
        <div class="cta-content">
          <h3>恭喜掌握第三范式！</h3>
          <p>你已经掌握了基础的三个范式！现在可以学习更高级的BCNF范式。</p>
          <div class="cta-buttons">
            <RouterLink to="/bcnf" class="btn btn-primary">
              学习BCNF范式
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </RouterLink>
            <RouterLink to="/second-normal-form" class="btn btn-secondary">
              回顾第二范式
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
.third-nf-container {
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
  background: linear-gradient(135deg, #10b981, #059669);
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
  background: linear-gradient(135deg, #10b98110, #05966910);
  padding: 1.5rem;
  border-radius: 12px;
  border-left: 4px solid #10b981;
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

.transitive-example {
  text-align: center;
}

.dependency-chain {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  border: 2px solid #10b981;
}

.dep-item {
  padding: 0.5rem 1rem;
  background: #10b981;
  color: white;
  border-radius: 8px;
  font-weight: 600;
}

.arrow {
  font-size: 1.5rem;
  color: #10b981;
  font-weight: bold;
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
  border: 2px solid #10b981;
}

.demo-table th {
  padding: 1rem 0.75rem;
  font-weight: 600;
  text-align: left;
  border-bottom: 2px solid #10b981;
  background: #ecfdf5;
  color: #065f46;
  font-size: 0.9rem;
}

.demo-table td {
  padding: 0.75rem;
  border-bottom: 1px solid #d1fae5;
  background: white;
  font-size: 0.9rem;
}

.primary-key {
  background-color: #dbeafe !important;
  color: #1d4ed8 !important;
  font-weight: 700 !important;
}

.transitive-cause {
  background-color: #fef3c7 !important;
  color: #92400e !important;
}

.transitive-dep {
  background-color: #fed7d7 !important;
  color: #c53030 !important;
}

.foreign-key {
  background-color: #e0e7ff !important;
  color: #3730a3 !important;
}

.violation {
  background-color: #fecaca !important;
  font-weight: 600;
  color: #dc2626;
}

.transitive-analysis {
  background: #ecfdf5;
  padding: 1.5rem;
  border-radius: 12px;
  border-left: 4px solid #10b981;
  margin-bottom: 1.5rem;
}

.transitive-analysis h4 {
  color: #065f46;
  margin-bottom: 1rem;
  font-weight: 600;
}

.dependency-flow {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.dependency-step {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.step-label {
  font-size: 0.875rem;
  font-weight: 600;
  color: #374151;
}

.dependency-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem;
  background: white;
  border-radius: 8px;
  border: 1px solid #d1fae5;
}

.dependency-step.danger .dependency-item {
  border-color: #fca5a5;
  background: #fef2f2;
}

.dep-source, .dep-target, .dep-intermediate {
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-weight: 500;
}

.dep-source {
  background: #dbeafe;
  color: #1d4ed8;
}

.dep-target {
  background: #fed7d7;
  color: #c53030;
  flex: 1;
}

.dep-intermediate {
  background: #fef3c7;
  color: #92400e;
}

.nf-tables {
  margin: 2rem 0;
}

.table-group {
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

.mini-table th.foreign-key {
  background: #e0e7ff;
  color: #3730a3;
}

.mini-table td {
  padding: 0.5rem;
  border-bottom: 1px solid #e5e7eb;
  background: white;
}

.mini-table tr:hover td {
  background: #f9fafb;
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
  background: #10b981;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.875rem;
  transition: background-color 0.2s;
}

.copy-btn:hover {
  background: #059669;
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

.advantages-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.advantage-card {
  background: #f8fafc;
  padding: 1.5rem;
  border-radius: 12px;
  text-align: center;
  transition: transform 0.2s ease;
}

.advantage-card:hover {
  transform: translateY(-2px);
}

.advantage-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.advantage-card h4 {
  color: #1e293b;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.advantage-card p {
  color: #64748b;
  font-size: 0.9rem;
}

.cta-section {
  background: linear-gradient(135deg, #10b981, #059669);
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
  color: #10b981;
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
  color: #10b981;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }
  
  .dependency-chain {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .dependency-item {
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  
  .table-group {
    grid-template-columns: 1fr;
  }
  
  .advantages-grid {
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
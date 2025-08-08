<template>
  <div class="first-nf-container">
    <!-- 页面标题 -->
    <div class="page-header">
      <h1 class="page-title">第一范式 (1NF)</h1>
      <p class="page-subtitle">原子性要求：确保表中的每个字段都是不可分割的原子值</p>
    </div>

    <!-- 主要内容 -->
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
            <div class="definition-icon">1️⃣</div>
            <div class="definition-content">
              <h4>第一范式（1NF）要求：</h4>
              <p>表中的每个字段都是<strong>不可分割的原子值</strong>，不能包含重复组或数组。</p>
            </div>
          </div>
          
          <div class="key-points">
            <h4>关键要点：</h4>
            <ul>
              <li>✅ 每个字段只能存储单一值</li>
              <li>✅ 不能在单个字段中存储多个值</li>
              <li>✅ 不能有重复的列组</li>
              <li>✅ 每行数据必须唯一</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 违反1NF的例子 -->
      <section class="content-section">
        <div class="section-header">
          <h2 class="section-title">
            <span class="section-icon">❌</span>
            违反1NF的例子
          </h2>
        </div>
        
        <div class="section-content">
          <p class="intro-text">
            以下是一个违反第一范式的学生信息表，注意其中的问题：
          </p>
          
          <div class="example-container">
            <div class="table-title bad">❌ 违反1NF的学生表</div>
            <div class="table-wrapper">
              <table class="demo-table bad-table">
                <thead>
                  <tr>
                    <th>学生ID</th>
                    <th>学生姓名</th>
                    <th>电话号码</th>
                    <th>选修课程</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1001</td>
                    <td>张三</td>
                    <td class="violation">13800138000,13900139000</td>
                    <td class="violation">CS101,MATH201,ENG301</td>
                  </tr>
                  <tr>
                    <td>1002</td>
                    <td>李四</td>
                    <td class="violation">13700137000</td>
                    <td class="violation">CS101,PHYS101</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div class="problems-highlight">
              <h4>存在的问题：</h4>
              <div class="problem-items">
                <div class="problem-item">
                  <span class="problem-icon">📞</span>
                  <span>电话号码字段包含多个值</span>
                </div>
                <div class="problem-item">
                  <span class="problem-icon">📚</span>
                  <span>选修课程字段包含多个课程ID</span>
                </div>
                <div class="problem-item">
                  <span class="problem-icon">🔍</span>
                  <span>难以查询特定电话号码或课程</span>
                </div>
                <div class="problem-item">
                  <span class="problem-icon">✏️</span>
                  <span>更新某个电话号码需要字符串操作</span>
                </div>
              </div>
            </div>

            <!-- SQL代码 -->
            <div class="code-block">
              <div class="code-header">
                <span class="code-title">违反1NF的SQL创建语句</span>
                <button class="copy-btn" @click="copyCode('bad-sql')">📋 复制</button>
              </div>
              <pre><code id="bad-sql">-- 违反1NF：包含多值字段
CREATE TABLE student_bad_1nf (
    student_id INT PRIMARY KEY,
    student_name VARCHAR(50),
    phone_numbers VARCHAR(200), -- 违反：包含多个电话号码
    courses VARCHAR(500)         -- 违反：包含多门课程
);

INSERT INTO student_bad_1nf VALUES
(1001, '张三', '13800138000,13900139000', 'CS101,MATH201,ENG301'),
(1002, '李四', '13700137000', 'CS101,PHYS101');</code></pre>
            </div>
          </div>
        </div>
      </section>

      <!-- 转换为1NF -->
      <section class="content-section">
        <div class="section-header">
          <h2 class="section-title">
            <span class="section-icon">✅</span>
            转换为1NF
          </h2>
        </div>
        
        <div class="section-content">
          <p class="intro-text">
            通过拆分多值字段，我们可以将表转换为符合1NF的设计：
          </p>
          
          <!-- 转换过程可视化 -->
          <div class="transformation-flow">
            <div class="transformation-step">
              <h4>步骤1：拆分学生基本信息</h4>
              <div class="mini-table-container">
                <div class="table-title good">✅ 学生表 (students_1nf)</div>
                <table class="mini-table">
                  <thead>
                    <tr>
                      <th>student_id</th>
                      <th>student_name</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1001</td>
                      <td>张三</td>
                    </tr>
                    <tr>
                      <td>1002</td>
                      <td>李四</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div class="transformation-step">
              <h4>步骤2：创建独立的电话号码表</h4>
              <div class="mini-table-container">
                <div class="table-title good">✅ 学生电话表 (student_phones_1nf)</div>
                <table class="mini-table">
                  <thead>
                    <tr>
                      <th>student_id</th>
                      <th>phone_number</th>
                      <th>phone_type</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1001</td>
                      <td>13800138000</td>
                      <td>手机</td>
                    </tr>
                    <tr>
                      <td>1001</td>
                      <td>13900139000</td>
                      <td>手机</td>
                    </tr>
                    <tr>
                      <td>1002</td>
                      <td>13700137000</td>
                      <td>手机</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div class="transformation-step">
              <h4>步骤3：创建独立的选课表</h4>
              <div class="mini-table-container">
                <div class="table-title good">✅ 学生选课表 (student_courses_1nf)</div>
                <table class="mini-table">
                  <thead>
                    <tr>
                      <th>student_id</th>
                      <th>course_id</th>
                      <th>enrollment_date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1001</td>
                      <td>CS101</td>
                      <td>2024-09-01</td>
                    </tr>
                    <tr>
                      <td>1001</td>
                      <td>MATH201</td>
                      <td>2024-09-01</td>
                    </tr>
                    <tr>
                      <td>1001</td>
                      <td>ENG301</td>
                      <td>2024-09-01</td>
                    </tr>
                    <tr>
                      <td>1002</td>
                      <td>CS101</td>
                      <td>2024-09-01</td>
                    </tr>
                    <tr>
                      <td>1002</td>
                      <td>PHYS101</td>
                      <td>2024-09-01</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <!-- 1NF SQL代码 -->
          <div class="code-block">
            <div class="code-header">
              <span class="code-title">符合1NF的SQL创建语句</span>
              <button class="copy-btn" @click="copyCode('good-sql')">📋 复制</button>
            </div>
            <pre><code id="good-sql">-- 符合1NF：拆分多值字段
CREATE TABLE students_1nf (
    student_id INT PRIMARY KEY,
    student_name VARCHAR(50)
);

CREATE TABLE student_phones_1nf (
    student_id INT,
    phone_number VARCHAR(20),
    phone_type VARCHAR(10), -- 手机、座机等
    PRIMARY KEY (student_id, phone_number),
    FOREIGN KEY (student_id) REFERENCES students_1nf(student_id)
);

CREATE TABLE student_courses_1nf (
    student_id INT,
    course_id VARCHAR(10),
    enrollment_date DATE,
    PRIMARY KEY (student_id, course_id),
    FOREIGN KEY (student_id) REFERENCES students_1nf(student_id)
);</code></pre>
          </div>
        </div>
      </section>

      <!-- 实战练习：电商订单系统 -->
      <section class="content-section">
        <div class="section-header">
          <h2 class="section-title">
            <span class="section-icon">🛒</span>
            实战练习：电商订单系统
          </h2>
        </div>
        
        <div class="section-content">
          <p class="intro-text">
            让我们通过一个电商订单系统的例子来练习1NF的应用：
          </p>
          
          <div class="practice-container">
            <!-- 原始设计 -->
            <div class="practice-section">
              <h4>❌ 原始设计（违反1NF）</h4>
              <div class="table-wrapper">
                <table class="demo-table bad-table">
                  <thead>
                    <tr>
                      <th>订单ID</th>
                      <th>客户姓名</th>
                      <th>商品信息</th>
                      <th>数量</th>
                      <th>总金额</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>ORD001</td>
                      <td>王五</td>
                      <td class="violation">iPhone15:5999,AirPods:1299</td>
                      <td class="violation">1,2</td>
                      <td>8597.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div class="code-block small">
                <pre><code>-- 原始设计（违反1NF）
CREATE TABLE orders_bad (
    order_id INT PRIMARY KEY,
    customer_name VARCHAR(50),
    products VARCHAR(500), -- 违反：多个产品信息
    quantities VARCHAR(100), -- 违反：对应的数量
    total_amount DECIMAL(10,2)
);</code></pre>
              </div>
            </div>

            <!-- 改进设计 -->
            <div class="practice-section">
              <h4>✅ 1NF改进设计</h4>
              
              <div class="improved-tables">
                <div class="table-pair">
                  <div class="mini-table-container">
                    <div class="table-title good">订单表 (orders_1nf)</div>
                    <table class="mini-table">
                      <thead>
                        <tr>
                          <th>order_id</th>
                          <th>customer_name</th>
                          <th>order_date</th>
                          <th>total_amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>ORD001</td>
                          <td>王五</td>
                          <td>2024-12-01</td>
                          <td>8597.00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div class="mini-table-container">
                    <div class="table-title good">订单商品表 (order_items_1nf)</div>
                    <table class="mini-table">
                      <thead>
                        <tr>
                          <th>order_id</th>
                          <th>product_id</th>
                          <th>product_name</th>
                          <th>quantity</th>
                          <th>unit_price</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>ORD001</td>
                          <td>1</td>
                          <td>iPhone15</td>
                          <td>1</td>
                          <td>5999.00</td>
                        </tr>
                        <tr>
                          <td>ORD001</td>
                          <td>2</td>
                          <td>AirPods</td>
                          <td>2</td>
                          <td>1299.00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div class="code-block small">
                <pre><code>-- 1NF改进
CREATE TABLE orders_1nf (
    order_id INT PRIMARY KEY,
    customer_name VARCHAR(50),
    order_date DATE,
    total_amount DECIMAL(10,2)
);

CREATE TABLE order_items_1nf (
    order_id INT,
    product_id INT,
    product_name VARCHAR(100),
    quantity INT,
    unit_price DECIMAL(8,2),
    PRIMARY KEY (order_id, product_id),
    FOREIGN KEY (order_id) REFERENCES orders_1nf(order_id)
);</code></pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 优势总结 -->
      <section class="content-section">
        <div class="section-header">
          <h2 class="section-title">
            <span class="section-icon">🎯</span>
            1NF的优势
          </h2>
        </div>
        
        <div class="section-content">
          <div class="advantages-grid">
            <div class="advantage-card">
              <div class="advantage-icon">🔍</div>
              <h4>查询便利</h4>
              <p>可以直接查询特定的电话号码或课程，无需字符串操作</p>
            </div>
            
            <div class="advantage-card">
              <div class="advantage-icon">✏️</div>
              <h4>更新简单</h4>
              <p>修改、添加、删除单个值变得简单直接</p>
            </div>
            
            <div class="advantage-card">
              <div class="advantage-icon">📊</div>
              <h4>数据分析</h4>
              <p>便于进行统计分析，如计算选课人数、电话号码分布等</p>
            </div>
            
            <div class="advantage-card">
              <div class="advantage-icon">🔗</div>
              <h4>关系完整</h4>
              <p>建立了清晰的表间关系，为进一步规范化奠定基础</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 下一步学习 -->
      <section class="cta-section">
        <div class="cta-content">
          <h3>掌握了第一范式？</h3>
          <p>太棒了！现在让我们继续学习第二范式，了解如何消除部分依赖。</p>
          <div class="cta-buttons">
            <RouterLink to="/second-normal-form" class="btn btn-primary">
              学习第二范式
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </RouterLink>
            <RouterLink to="/interactive-demo" class="btn btn-secondary">
              交互式练习
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
        console.log('代码已复制到剪贴板')
      })
      .catch(err => {
        console.error('复制失败:', err)
      })
  }
}
</script>

<style scoped>
.first-nf-container {
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
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
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

/* 定义框样式 */
.definition-box {
  display: flex;
  gap: 1rem;
  background: linear-gradient(135deg, #3b82f610, #1d4ed810);
  padding: 1.5rem;
  border-radius: 12px;
  border-left: 4px solid #3b82f6;
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

.key-points ul {
  margin: 0;
  padding-left: 1rem;
}

.key-points li {
  margin-bottom: 0.5rem;
  color: #059669;
  font-weight: 500;
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
  border: 2px solid #ef4444;
}

.demo-table th {
  padding: 1rem 0.75rem;
  font-weight: 600;
  text-align: left;
  border-bottom: 2px solid;
}

.demo-table.bad-table th {
  background: #fef2f2;
  color: #991b1b;
  border-bottom-color: #ef4444;
}

.demo-table td {
  padding: 0.75rem;
  border-bottom: 1px solid;
  background: white;
}

.demo-table.bad-table td {
  border-bottom-color: #fee2e2;
}

.demo-table.bad-table tr:hover td {
  background: #fef2f2;
}

.violation {
  background-color: #fecaca !important;
  font-weight: 600;
  color: #dc2626;
}

/* 问题高亮 */
.problems-highlight {
  background: #fef2f2;
  padding: 1.5rem;
  border-radius: 12px;
  border-left: 4px solid #ef4444;
  margin-bottom: 1.5rem;
}

.problems-highlight h4 {
  color: #991b1b;
  margin-bottom: 1rem;
  font-weight: 600;
}

.problem-items {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
}

.problem-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #dc2626;
  font-weight: 500;
}

.problem-icon {
  font-size: 1.1rem;
}

/* 代码块样式 */
.code-block {
  background: #1e293b;
  border-radius: 8px;
  overflow: hidden;
  margin: 1rem 0;
}

.code-block.small {
  font-size: 0.85rem;
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
  background: #3b82f6;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.875rem;
  transition: background-color 0.2s;
}

.copy-btn:hover {
  background: #2563eb;
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

/* 转换流程 */
.transformation-flow {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.transformation-step {
  background: #f8fafc;
  padding: 1.5rem;
  border-radius: 12px;
  border-left: 4px solid #10b981;
}

.transformation-step h4 {
  color: #166534;
  margin-bottom: 1rem;
  font-weight: 600;
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
  font-size: 0.9rem;
}

.mini-table th {
  background: #dcfce7;
  color: #166534;
  padding: 0.75rem 0.5rem;
  font-weight: 600;
  text-align: left;
}

.mini-table td {
  padding: 0.5rem;
  border-bottom: 1px solid #e5e7eb;
  background: white;
}

.mini-table tr:hover td {
  background: #f9fafb;
}

/* 实战练习 */
.practice-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.practice-section {
  padding: 1.5rem;
  border-radius: 12px;
  border: 2px solid;
}

.practice-section:nth-child(1) {
  border-color: #ef4444;
  background: #fef2f2;
}

.practice-section:nth-child(2) {
  border-color: #10b981;
  background: #f0fdf4;
}

.practice-section h4 {
  margin-bottom: 1rem;
  font-weight: 600;
}

.improved-tables {
  margin-bottom: 1rem;
}

.table-pair {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

/* 优势网格 */
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

/* CTA区域 */
.cta-section {
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
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
  color: #3b82f6;
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
  color: #3b82f6;
  transform: translateY(-2px);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }
  
  .problem-items {
    grid-template-columns: 1fr;
  }
  
  .table-pair {
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
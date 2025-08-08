<template>
  <div class="second-nf-container">
    <div class="page-header">
      <h1 class="page-title">第二范式 (2NF)</h1>
      <p class="page-subtitle">消除部分依赖：非主键字段完全依赖于主键</p>
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
            <div class="definition-icon">2️⃣</div>
            <div class="definition-content">
              <h4>第二范式（2NF）要求：</h4>
              <p>1. 满足第一范式（1NF）</p>
              <p>2. <strong>非主键字段完全依赖于主键</strong>，不能只依赖于主键的一部分</p>
            </div>
          </div>
          
          <div class="key-points">
            <h4>关键概念：</h4>
            <ul>
              <li>✅ <strong>完全函数依赖</strong>：非主键字段依赖于整个主键</li>
              <li>❌ <strong>部分函数依赖</strong>：非主键字段只依赖于主键的一部分</li>
              <li>🔑 <strong>复合主键</strong>：由多个字段组成的主键</li>
              <li>⚠️ 只有在存在复合主键时才可能出现部分依赖</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="content-section">
        <div class="section-header">
          <h2 class="section-title">
            <span class="section-icon">❌</span>
            识别部分依赖
          </h2>
        </div>
        
        <div class="section-content">
          <p class="intro-text">
            让我们通过一个学生选课表的例子来理解部分依赖问题：
          </p>
          
          <div class="example-container">
            <div class="table-title bad">❌ 违反2NF的学生选课表</div>
            <div class="table-wrapper">
              <table class="demo-table bad-table">
                <thead>
                  <tr>
                    <th class="primary-key">学生ID</th>
                    <th class="primary-key">课程ID</th>
                    <th class="partial-dep">学生姓名</th>
                    <th class="partial-dep">课程名称</th>
                    <th class="partial-dep">教师姓名</th>
                    <th class="full-dep">成绩</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1001</td>
                    <td>CS101</td>
                    <td class="violation">张三</td>
                    <td class="violation">计算机基础</td>
                    <td class="violation">李教授</td>
                    <td>A</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section class="cta-section">
        <div class="cta-content">
          <h3>第二范式详细内容正在完善中...</h3>
          <p>请继续学习第三范式或回顾第一范式</p>
          <div class="cta-buttons">
            <RouterLink to="/third-normal-form" class="btn btn-primary">
              学习第三范式
            </RouterLink>
            <RouterLink to="/first-normal-form" class="btn btn-secondary">
              回顾第一范式
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
.second-nf-container {
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
  background: linear-gradient(135deg, #f59e0b, #d97706);
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
  background: linear-gradient(135deg, #f59e0b10, #d9770610);
  padding: 1.5rem;
  border-radius: 12px;
  border-left: 4px solid #f59e0b;
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

.key-points ul {
  margin: 0;
  padding-left: 1rem;
}

.key-points li {
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
  border: 2px solid #f59e0b;
}

.demo-table th {
  padding: 1rem 0.75rem;
  font-weight: 600;
  text-align: left;
  border-bottom: 2px solid #f59e0b;
  background: #fef3c7;
  color: #92400e;
}

.demo-table td {
  padding: 0.75rem;
  border-bottom: 1px solid #fde68a;
  background: white;
}

.primary-key {
  background-color: #dbeafe !important;
  color: #1d4ed8 !important;
  font-weight: 700 !important;
}

.partial-dep {
  background-color: #fed7d7 !important;
  color: #c53030 !important;
}

.full-dep {
  background-color: #c6f6d5 !important;
  color: #2f855a !important;
}

.violation {
  background-color: #fecaca !important;
  font-weight: 600;
  color: #dc2626;
}

.cta-section {
  background: linear-gradient(135deg, #f59e0b, #d97706);
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
  color: #f59e0b;
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
  color: #f59e0b;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
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
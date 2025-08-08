<template>
  <div class="fourth-nf-container">
    <div class="page-header">
      <h1 class="page-title">第四范式 (4NF)</h1>
      <p class="page-subtitle">消除多值依赖：处理独立的一对多关系</p>
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
            <div class="definition-icon">4️⃣</div>
            <div class="definition-content">
              <h4>第四范式（4NF）要求：</h4>
              <p>1. 满足BCNF范式</p>
              <p>2. <strong>消除多值依赖</strong>（Multi-Valued Dependencies）</p>
              <p>3. 表中不存在独立的一对多关系导致的笛卡尔积</p>
            </div>
          </div>
          
          <div class="key-points">
            <h4>什么是多值依赖？</h4>
            <div class="mvd-explanation">
              <div class="mvd-example">
                <div class="mvd-formula">
                  <span class="entity">学生</span>
                  <span class="mvd-symbol">↠</span>
                  <span class="entity">技能</span>
                  <span class="separator">|</span>
                  <span class="entity">爱好</span>
                </div>
                <p>表示：学生的技能集合与爱好集合是独立的多值关系</p>
              </div>
              
              <div class="mvd-characteristics">
                <h5>多值依赖的特征：</h5>
                <ul>
                  <li>🔄 一个实体对应多个独立的值集合</li>
                  <li>❌ 两个值集合之间没有直接关系</li>
                  <li>📈 会产生笛卡尔积，导致数据冗余</li>
                  <li>⚠️ 在BCNF中仍可能存在</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <div class="section-header">
          <h2 class="section-title">
            <span class="section-icon">❌</span>
            识别多值依赖
          </h2>
        </div>
        
        <div class="section-content">
          <p class="intro-text">
            让我们通过一个学生技能爱好表的例子来理解多值依赖问题：
          </p>
          
          <div class="example-container">
            <div class="table-title bad">❌ 违反4NF的学生技能爱好表</div>
            <div class="table-wrapper">
              <table class="demo-table bad-table">
                <thead>
                  <tr>
                    <th class="primary-key">学生ID</th>
                    <th class="mvd-field">技能</th>
                    <th class="mvd-field">爱好</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1001</td>
                    <td class="violation">Java</td>
                    <td class="violation">篮球</td>
                  </tr>
                  <tr>
                    <td>1001</td>
                    <td class="violation">Java</td>
                    <td class="violation">音乐</td>
                  </tr>
                  <tr>
                    <td>1001</td>
                    <td class="violation">Python</td>
                    <td class="violation">篮球</td>
                  </tr>
                  <tr>
                    <td>1001</td>
                    <td class="violation">Python</td>
                    <td class="violation">音乐</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div class="mvd-analysis">
              <h4>多值依赖分析：</h4>
              <div class="analysis-content">
                <div class="mvd-diagram">
                  <div class="student-node">学生1001</div>
                  <div class="mvd-branches">
                    <div class="branch skills">
                      <h5>技能集合</h5>
                      <div class="value-items">
                        <span class="value-item">Java</span>
                        <span class="value-item">Python</span>
                      </div>
                    </div>
                    <div class="branch hobbies">
                      <h5>爱好集合</h5>
                      <div class="value-items">
                        <span class="value-item">篮球</span>
                        <span class="value-item">音乐</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="cartesian-result">
                  <h5>结果：笛卡尔积</h5>
                  <p>2个技能 × 2个爱好 = 4条记录（数据冗余）</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <div class="section-header">
          <h2 class="section-title">
            <span class="section-icon">✅</span>
            转换为4NF
          </h2>
        </div>
        
        <div class="section-content">
          <p class="intro-text">
            通过分解多值依赖，我们可以将表转换为符合4NF的设计：
          </p>
          
          <div class="nf4-decomposition">
            <div class="decomposed-tables">
              <div class="mini-table-container">
                <div class="table-title good">✅ 学生技能表</div>
                <table class="mini-table">
                  <thead>
                    <tr>
                      <th class="primary-key">学生ID</th>
                      <th class="primary-key">技能</th>
                      <th>熟练程度</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1001</td>
                      <td>Java</td>
                      <td>高级</td>
                    </tr>
                    <tr>
                      <td>1001</td>
                      <td>Python</td>
                      <td>中级</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="mini-table-container">
                <div class="table-title good">✅ 学生爱好表</div>
                <table class="mini-table">
                  <thead>
                    <tr>
                      <th class="primary-key">学生ID</th>
                      <th class="primary-key">爱好</th>
                      <th>兴趣程度</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1001</td>
                      <td>篮球</td>
                      <td>很感兴趣</td>
                    </tr>
                    <tr>
                      <td>1001</td>
                      <td>音乐</td>
                      <td>感兴趣</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div class="code-block">
              <div class="code-header">
                <span class="code-title">符合4NF的SQL创建语句</span>
                <button class="copy-btn" @click="copyCode('4nf-sql')">📋 复制</button>
              </div>
              <pre><code id="4nf-sql">-- 4NF改进：分解为独立的关系
CREATE TABLE student_skills_4nf (
    student_id INT,
    skill VARCHAR(50),
    proficiency_level VARCHAR(20),
    PRIMARY KEY (student_id, skill)
);

CREATE TABLE student_hobbies_4nf (
    student_id INT,
    hobby VARCHAR(50),
    interest_level VARCHAR(20),
    PRIMARY KEY (student_id, hobby)
);</code></pre>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <div class="section-header">
          <h2 class="section-title">
            <span class="section-icon">🎯</span>
            4NF的优势
          </h2>
        </div>
        
        <div class="section-content">
          <div class="advantages-grid">
            <div class="advantage-card">
              <div class="advantage-icon">📉</div>
              <h4>减少数据冗余</h4>
              <p>消除笛卡尔积造成的数据重复，优化存储空间</p>
            </div>
            
            <div class="advantage-card">
              <div class="advantage-icon">⚡</div>
              <h4>提高操作效率</h4>
              <p>简化插入、更新、删除操作，减少维护复杂度</p>
            </div>
            
            <div class="advantage-card">
              <div class="advantage-icon">🔍</div>
              <h4>独立性管理</h4>
              <p>可以独立管理不相关的多值属性</p>
            </div>
            
            <div class="advantage-card">
              <div class="advantage-icon">🛡️</div>
              <h4>避免异常</h4>
              <p>消除由多值依赖导致的各种数据异常</p>
            </div>
          </div>
        </div>
      </section>

      <section class="cta-section">
        <div class="cta-content">
          <h3>掌握了第四范式！</h3>
          <p>很好！你已经学会了处理多值依赖。现在让我们学习最高级的第五范式。</p>
          <div class="cta-buttons">
            <RouterLink to="/fifth-normal-form" class="btn btn-primary">
              学习第五范式
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </RouterLink>
            <RouterLink to="/bcnf" class="btn btn-secondary">
              回顾BCNF范式
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
.fourth-nf-container {
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
  background: linear-gradient(135deg, #f97316, #ea580c);
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
  background: linear-gradient(135deg, #f9731610, #ea580c10);
  padding: 1.5rem;
  border-radius: 12px;
  border-left: 4px solid #f97316;
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

.mvd-explanation {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.mvd-example {
  text-align: center;
}

.mvd-formula {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  border: 2px solid #f97316;
}

.entity {
  padding: 0.5rem 1rem;
  background: #f97316;
  color: white;
  border-radius: 8px;
  font-weight: 600;
}

.mvd-symbol {
  font-size: 1.5rem;
  color: #f97316;
  font-weight: bold;
}

.separator {
  font-size: 1.2rem;
  color: #6b7280;
}

.mvd-characteristics ul {
  margin: 0;
  padding-left: 1rem;
}

.mvd-characteristics li {
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
  border: 2px solid #f97316;
}

.demo-table th {
  padding: 1rem 0.75rem;
  font-weight: 600;
  text-align: left;
  border-bottom: 2px solid #f97316;
  background: #fff7ed;
  color: #c2410c;
  font-size: 0.9rem;
}

.demo-table td {
  padding: 0.75rem;
  border-bottom: 1px solid #fed7aa;
  background: white;
  font-size: 0.9rem;
}

.primary-key {
  background-color: #dbeafe !important;
  color: #1d4ed8 !important;
  font-weight: 700 !important;
}

.mvd-field {
  background-color: #fef3c7 !important;
  color: #92400e !important;
}

.violation {
  background-color: #fecaca !important;
  font-weight: 600;
  color: #dc2626;
}

.mvd-analysis {
  background: #fff7ed;
  padding: 1.5rem;
  border-radius: 12px;
  border-left: 4px solid #f97316;
  margin-bottom: 1.5rem;
}

.mvd-analysis h4 {
  color: #c2410c;
  margin-bottom: 1rem;
  font-weight: 600;
}

.analysis-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.mvd-diagram {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
}

.student-node {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: #3b82f6;
  color: white;
  border-radius: 8px;
  font-weight: 600;
  margin-bottom: 1rem;
}

.mvd-branches {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.branch h5 {
  color: #374151;
  margin-bottom: 0.75rem;
  font-weight: 600;
}

.value-items {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.value-item {
  padding: 0.5rem 1rem;
  background: #f97316;
  color: white;
  border-radius: 6px;
  font-weight: 500;
}

.cartesian-result {
  background: #fef2f2;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
}

.cartesian-result h5 {
  color: #991b1b;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.cartesian-result p {
  color: #7f1d1d;
  font-weight: 500;
}

.nf4-decomposition {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.decomposed-tables {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
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
  background: #f97316;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.875rem;
  transition: background-color 0.2s;
}

.copy-btn:hover {
  background: #ea580c;
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
  background: linear-gradient(135deg, #f97316, #ea580c);
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
  color: #f97316;
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
  color: #f97316;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }
  
  .mvd-branches {
    grid-template-columns: 1fr;
  }
  
  .decomposed-tables {
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
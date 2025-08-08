<template>
  <div class="fifth-nf-container">
    <div class="page-header">
      <h1 class="page-title">第五范式 (5NF)</h1>
      <p class="page-subtitle">消除连接依赖：处理复杂的多对多关系</p>
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
            <div class="definition-icon">5️⃣</div>
            <div class="definition-content">
              <h4>第五范式（5NF）要求：</h4>
              <p>1. 满足第四范式（4NF）</p>
              <p>2. <strong>消除连接依赖</strong>（Join Dependencies）</p>
              <p>3. 表不能无损分解为更小的表</p>
              <p>4. 也称为<strong>投影-连接范式（PJNF）</strong></p>
            </div>
          </div>
          
          <div class="key-points">
            <h4>什么是连接依赖？</h4>
            <div class="jd-explanation">
              <div class="jd-concept">
                <p>连接依赖是指一个表可以通过多个较小的表连接重建，并且这种分解是无损的。</p>
                <div class="jd-formula">
                  <span class="formula-text">R = R1 ⋈ R2 ⋈ R3</span>
                  <p class="formula-desc">表R可以通过表R1, R2, R3的自然连接完全重建</p>
                </div>
              </div>
              
              <div class="jd-characteristics">
                <h5>连接依赖的特征：</h5>
                <ul>
                  <li>🔗 涉及三个或更多实体的复杂关系</li>
                  <li>🎯 分解后的表必须能无损连接</li>
                  <li>📊 通常出现在多对多对多的关系中</li>
                  <li>🔬 是最高级的范式，实际应用较少</li>
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
            识别连接依赖
          </h2>
        </div>
        
        <div class="section-content">
          <p class="intro-text">
            让我们通过一个供应商-产品-项目的例子来理解连接依赖问题：
          </p>
          
          <div class="example-container">
            <div class="table-title bad">❌ 违反5NF的供应商-产品-项目表</div>
            <div class="table-wrapper">
              <table class="demo-table bad-table">
                <thead>
                  <tr>
                    <th class="primary-key">供应商ID</th>
                    <th class="primary-key">产品ID</th>
                    <th class="primary-key">项目ID</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="violation">S1</td>
                    <td class="violation">P1</td>
                    <td class="violation">J1</td>
                  </tr>
                  <tr>
                    <td class="violation">S1</td>
                    <td class="violation">P1</td>
                    <td class="violation">J2</td>
                  </tr>
                  <tr>
                    <td class="violation">S1</td>
                    <td class="violation">P2</td>
                    <td class="violation">J1</td>
                  </tr>
                  <tr>
                    <td class="violation">S2</td>
                    <td class="violation">P1</td>
                    <td class="violation">J1</td>
                  </tr>
                  <tr>
                    <td class="violation">S2</td>
                    <td class="violation">P2</td>
                    <td class="violation">J2</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div class="jd-analysis">
              <h4>连接依赖分析：</h4>
              
              <div class="business-rules">
                <h5>业务规则假设：</h5>
                <div class="rules-list">
                  <div class="rule-item">
                    <span class="rule-icon">📋</span>
                    <span>供应商可以供应多种产品</span>
                  </div>
                  <div class="rule-item">
                    <span class="rule-icon">🏗️</span>
                    <span>产品可以用于多个项目</span>
                  </div>
                  <div class="rule-item">
                    <span class="rule-icon">🤝</span>
                    <span>项目可以从多个供应商采购</span>
                  </div>
                </div>
              </div>

              <div class="jd-problem">
                <h5>问题：</h5>
                <div class="problem-explanation">
                  <p>这个表存在连接依赖，可以分解为三个二元关系：</p>
                  <div class="decomposition-preview">
                    <div class="relation-item">
                      <strong>供应商-产品</strong>：管理供应关系
                    </div>
                    <div class="relation-item">
                      <strong>产品-项目</strong>：管理使用关系
                    </div>
                    <div class="relation-item">
                      <strong>项目-供应商</strong>：管理合作关系
                    </div>
                  </div>
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
            转换为5NF
          </h2>
        </div>
        
        <div class="section-content">
          <p class="intro-text">
            通过分解连接依赖，我们可以将表转换为符合5NF的设计：
          </p>
          
          <div class="nf5-decomposition">
            <div class="decomposed-tables">
              <div class="table-trio">
                <div class="mini-table-container">
                  <div class="table-title good">✅ 供应商产品表</div>
                  <table class="mini-table">
                    <thead>
                      <tr>
                        <th class="primary-key">供应商ID</th>
                        <th class="primary-key">产品ID</th>
                        <th>供应价格</th>
                        <th>供应能力</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>S1</td>
                        <td>P1</td>
                        <td>100</td>
                        <td>1000</td>
                      </tr>
                      <tr>
                        <td>S1</td>
                        <td>P2</td>
                        <td>200</td>
                        <td>500</td>
                      </tr>
                      <tr>
                        <td>S2</td>
                        <td>P1</td>
                        <td>95</td>
                        <td>800</td>
                      </tr>
                      <tr>
                        <td>S2</td>
                        <td>P2</td>
                        <td>190</td>
                        <td>600</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div class="mini-table-container">
                  <div class="table-title good">✅ 产品项目表</div>
                  <table class="mini-table">
                    <thead>
                      <tr>
                        <th class="primary-key">产品ID</th>
                        <th class="primary-key">项目ID</th>
                        <th>需求数量</th>
                        <th>使用开始日期</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>P1</td>
                        <td>J1</td>
                        <td>100</td>
                        <td>2024-01-01</td>
                      </tr>
                      <tr>
                        <td>P1</td>
                        <td>J2</td>
                        <td>200</td>
                        <td>2024-02-01</td>
                      </tr>
                      <tr>
                        <td>P2</td>
                        <td>J1</td>
                        <td>50</td>
                        <td>2024-01-15</td>
                      </tr>
                      <tr>
                        <td>P2</td>
                        <td>J2</td>
                        <td>80</td>
                        <td>2024-02-15</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div class="mini-table-container">
                  <div class="table-title good">✅ 项目供应商表</div>
                  <table class="mini-table">
                    <thead>
                      <tr>
                        <th class="primary-key">项目ID</th>
                        <th class="primary-key">供应商ID</th>
                        <th>合作开始日期</th>
                        <th>评估等级</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>J1</td>
                        <td>S1</td>
                        <td>2024-01-01</td>
                        <td>A</td>
                      </tr>
                      <tr>
                        <td>J1</td>
                        <td>S2</td>
                        <td>2024-01-01</td>
                        <td>B</td>
                      </tr>
                      <tr>
                        <td>J2</td>
                        <td>S1</td>
                        <td>2024-02-01</td>
                        <td>A</td>
                      </tr>
                      <tr>
                        <td>J2</td>
                        <td>S2</td>
                        <td>2024-02-01</td>
                        <td>A</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div class="code-block">
              <div class="code-header">
                <span class="code-title">符合5NF的SQL创建语句</span>
                <button class="copy-btn" @click="copyCode('5nf-sql')">📋 复制</button>
              </div>
              <pre><code id="5nf-sql">-- 5NF分解：消除连接依赖
CREATE TABLE supplier_product_5nf (
    supplier_id VARCHAR(10),
    product_id VARCHAR(10),
    supply_price DECIMAL(10,2),
    supply_capacity INT,
    PRIMARY KEY (supplier_id, product_id)
);

CREATE TABLE product_project_5nf (
    product_id VARCHAR(10),
    project_id VARCHAR(10),
    required_quantity INT,
    usage_start_date DATE,
    PRIMARY KEY (product_id, project_id)
);

CREATE TABLE project_supplier_5nf (
    project_id VARCHAR(10),
    supplier_id VARCHAR(10),
    cooperation_start_date DATE,
    evaluation_grade CHAR(1),
    PRIMARY KEY (project_id, supplier_id)
);</code></pre>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <div class="section-header">
          <h2 class="section-title">
            <span class="section-icon">⚖️</span>
            实际应用考虑
          </h2>
        </div>
        
        <div class="section-content">
          <div class="practical-considerations">
            <div class="consideration-item warning">
              <div class="consideration-header">
                <div class="consideration-icon">⚠️</div>
                <h4>注意事项</h4>
              </div>
              <div class="consideration-content">
                <ul>
                  <li>5NF在实际项目中应用较少</li>
                  <li>大多数业务场景在3NF或BCNF就足够</li>
                  <li>过度规范化可能影响查询性能</li>
                  <li>维护复杂度会显著增加</li>
                </ul>
              </div>
            </div>

            <div class="consideration-item advice">
              <div class="consideration-header">
                <div class="consideration-icon">💡</div>
                <h4>实践建议</h4>
              </div>
              <div class="consideration-content">
                <ul>
                  <li>先实现3NF，根据需要逐步优化</li>
                  <li>重点关注业务需求和性能要求</li>
                  <li>在复杂多对多关系中考虑5NF</li>
                  <li>平衡规范化与查询效率</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="cta-section">
        <div class="cta-content">
          <h3>🎉 恭喜完成所有范式学习！</h3>
          <p>你已经掌握了从1NF到5NF的完整数据库范式知识体系。现在可以开始实战项目或深入学习最佳实践了。</p>
          <div class="cta-buttons">
            <RouterLink to="/practical-example" class="btn btn-primary">
              实战项目案例
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </RouterLink>
            <RouterLink to="/best-practices" class="btn btn-secondary">
              最佳实践指南
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
.fifth-nf-container {
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
  background: linear-gradient(135deg, #ec4899, #db2777);
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
  background: linear-gradient(135deg, #ec489910, #db277710);
  padding: 1.5rem;
  border-radius: 12px;
  border-left: 4px solid #ec4899;
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

.jd-explanation {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.jd-concept {
  text-align: center;
}

.jd-formula {
  margin: 1rem 0;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  border: 2px solid #ec4899;
}

.formula-text {
  font-size: 1.2rem;
  font-weight: 600;
  color: #ec4899;
  display: block;
  margin-bottom: 0.5rem;
}

.formula-desc {
  color: #6b7280;
  font-size: 0.9rem;
  margin: 0;
}

.jd-characteristics ul {
  margin: 0;
  padding-left: 1rem;
}

.jd-characteristics li {
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
  border: 2px solid #ec4899;
}

.demo-table th {
  padding: 1rem 0.75rem;
  font-weight: 600;
  text-align: left;
  border-bottom: 2px solid #ec4899;
  background: #fdf2f8;
  color: #be185d;
  font-size: 0.9rem;
}

.demo-table td {
  padding: 0.75rem;
  border-bottom: 1px solid #fbcfe8;
  background: white;
  font-size: 0.9rem;
}

.primary-key {
  background-color: #dbeafe !important;
  color: #1d4ed8 !important;
  font-weight: 700 !important;
}

.violation {
  background-color: #fecaca !important;
  font-weight: 600;
  color: #dc2626;
}

.jd-analysis {
  background: #fdf2f8;
  padding: 1.5rem;
  border-radius: 12px;
  border-left: 4px solid #ec4899;
  margin-bottom: 1.5rem;
}

.jd-analysis h4 {
  color: #be185d;
  margin-bottom: 1rem;
  font-weight: 600;
}

.business-rules {
  margin-bottom: 1.5rem;
}

.business-rules h5 {
  color: #374151;
  margin-bottom: 0.75rem;
  font-weight: 600;
}

.rules-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.rule-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem;
  background: white;
  border-radius: 6px;
}

.rule-icon {
  font-size: 1.1rem;
}

.jd-problem {
  background: white;
  padding: 1rem;
  border-radius: 8px;
}

.jd-problem h5 {
  color: #be185d;
  margin-bottom: 0.75rem;
  font-weight: 600;
}

.problem-explanation p {
  margin-bottom: 1rem;
}

.decomposition-preview {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.relation-item {
  padding: 0.5rem 1rem;
  background: #f8fafc;
  border-radius: 6px;
  border-left: 3px solid #ec4899;
}

.nf5-decomposition {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.table-trio {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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
  font-size: 0.8rem;
}

.mini-table th {
  background: #dcfce7;
  color: #166534;
  padding: 0.6rem 0.4rem;
  font-weight: 600;
  text-align: left;
  font-size: 0.75rem;
}

.mini-table th.primary-key {
  background: #dbeafe;
  color: #1d4ed8;
}

.mini-table td {
  padding: 0.4rem;
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
  background: #ec4899;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.875rem;
  transition: background-color 0.2s;
}

.copy-btn:hover {
  background: #db2777;
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

.practical-considerations {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.consideration-item {
  padding: 1.5rem;
  border-radius: 12px;
  border-left: 4px solid;
}

.consideration-item.warning {
  background: #fef3c7;
  border-left-color: #f59e0b;
}

.consideration-item.advice {
  background: #f0fdf4;
  border-left-color: #10b981;
}

.consideration-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.consideration-icon {
  font-size: 1.5rem;
}

.consideration-item.warning .consideration-header h4 {
  color: #92400e;
}

.consideration-item.advice .consideration-header h4 {
  color: #065f46;
}

.consideration-content ul {
  margin: 0;
  padding-left: 1rem;
}

.consideration-item.warning .consideration-content li {
  color: #b45309;
  margin-bottom: 0.5rem;
}

.consideration-item.advice .consideration-content li {
  color: #047857;
  margin-bottom: 0.5rem;
}

.cta-section {
  background: linear-gradient(135deg, #ec4899, #db2777);
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
  color: #ec4899;
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
  color: #ec4899;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }
  
  .table-trio {
    grid-template-columns: 1fr;
  }
  
  .practical-considerations {
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
  
  .rules-list {
    gap: 0.25rem;
  }
}
</style>
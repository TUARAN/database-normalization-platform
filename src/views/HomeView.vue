<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref, onMounted } from 'vue'

const stats = ref([
  { label: '范式等级', value: '5', icon: '📊' },
  { label: '实战案例', value: '12+', icon: '💼' },
  { label: '交互演示', value: '8', icon: '🎮' },
  { label: '学习进度', value: '100%', icon: '✅' }
])

const features = ref([
  {
    title: '渐进式学习',
    description: '从1NF到5NF，循序渐进掌握数据库范式',
    icon: '🎯',
    color: 'from-blue-500 to-purple-600'
  },
  {
    title: '可视化演示',
    description: '丰富的图表和动画帮助理解抽象概念',
    icon: '📈',
    color: 'from-green-500 to-teal-600'
  },
  {
    title: '实战案例',
    description: '真实的电商、图书管理等业务场景',
    icon: '🛍️',
    color: 'from-orange-500 to-red-600'
  },
  {
    title: '交互练习',
    description: '动手实践，巩固理论知识',
    icon: '✋',
    color: 'from-purple-500 to-pink-600'
  }
])

const animateValue = (obj: any, start: number, end: number, duration: number) => {
  let startTimestamp: number | null = null
  const step = (timestamp: number) => {
    if (!startTimestamp) startTimestamp = timestamp
    const progress = Math.min((timestamp - startTimestamp) / duration, 1)
    obj.value = Math.floor(progress * (end - start) + start)
    if (progress < 1) {
      window.requestAnimationFrame(step)
    }
  }
  window.requestAnimationFrame(step)
}

onMounted(() => {
  // 简单的数字动画效果
  setTimeout(() => {
    stats.value.forEach((stat, index) => {
      if (stat.value.includes('+')) return
      if (stat.value.includes('%')) return
      const endValue = parseInt(stat.value)
      const mockRef = { value: 0 }
      animateValue(mockRef, 0, endValue, 1000 + index * 200)
    })
  }, 500)
})
</script>

<template>
  <div class="home-container">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title">
            掌握数据库范式
            <span class="highlight">设计优雅的数据结构</span>
          </h1>
          <p class="hero-description">
            通过可视化教学和实战案例，深入理解数据库范式原理，
            从第一范式到第五范式，构建高质量的数据库设计能力
          </p>
          <div class="hero-actions">
            <RouterLink to="/introduction" class="btn btn-primary">
              开始学习
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </RouterLink>
            <RouterLink to="/interactive-demo" class="btn btn-secondary">
              交互演示
            </RouterLink>
          </div>
        </div>
        
        <div class="hero-visual">
          <div class="database-diagram">
            <!-- 简化的数据库图表 -->
            <div class="table-box unnormalized">
              <div class="table-header">未规范化表</div>
              <div class="table-issues">❌ 数据冗余</div>
            </div>
            
            <div class="arrow">➡️</div>
            
            <div class="normalized-tables">
              <div class="table-box">
                <div class="table-header">用户表</div>
                <div class="table-fields">✅ 规范化</div>
              </div>
              <div class="table-box">
                <div class="table-header">订单表</div>
                <div class="table-fields">✅ 规范化</div>
              </div>
              <div class="table-box">
                <div class="table-header">商品表</div>
                <div class="table-fields">✅ 规范化</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="stats-section">
      <div class="stats-container">
        <div class="stat-item" v-for="stat in stats" :key="stat.label">
          <div class="stat-icon">{{ stat.icon }}</div>
          <div class="stat-value">{{ stat.value }}</div>
          <div class="stat-label">{{ stat.label }}</div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <div class="section-header">
        <h2>学习特色</h2>
        <p>多维度的教学方式，让数据库范式变得简单易懂</p>
      </div>
      
      <div class="features-grid">
        <div class="feature-card" v-for="feature in features" :key="feature.title">
          <div class="feature-icon" :class="feature.color">
            {{ feature.icon }}
          </div>
          <h3 class="feature-title">{{ feature.title }}</h3>
          <p class="feature-description">{{ feature.description }}</p>
        </div>
      </div>
    </section>

    <!-- 从混乱到有序的数据设计之路 -->
    <section class="journey-section">
      <div class="section-header">
        <h2>从混乱到有序的数据设计之路</h2>
        <p>数据库范式：将数据混沌转化为有序结构的艺术</p>
      </div>
      
      <div class="journey-metaphor">
        <div class="metaphor-intro">
          <div class="metaphor-icon">🏗️</div>
          <h3>建筑师的比喻</h3>
          <p>想象数据库设计就像建造一座大厦。没有范式的数据就像一堆散乱的建筑材料，而范式化就是将这些材料组织成稳固的建筑结构。</p>
        </div>
        
        <div class="journey-stages">
          <div class="stage chaos">
            <div class="stage-header">
              <div class="stage-icon">🌪️</div>
              <h4>混沌状态</h4>
            </div>
            <div class="stage-content">
              <div class="chaos-example">
                <h5>原始数据就像：</h5>
                <ul>
                  <li>📦 所有物品堆在一个大箱子里</li>
                  <li>🔍 找东西需要翻遍整个箱子</li>
                  <li>📝 重复信息到处都是</li>
                  <li>❌ 修改一处要改很多地方</li>
                </ul>
                <div class="example-table">
                  <div class="table-title bad">混乱的学生信息表</div>
                  <div class="chaos-data">
                    <span>学生ID: 1001</span>
                    <span>姓名: 张三</span>
                    <span>课程: 数学,英语,物理</span>
                    <span>成绩: 85,92,78</span>
                    <span>教师: 李老师,王老师,赵老师</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="stage transformation">
            <div class="stage-header">
              <div class="stage-icon">🔄</div>
              <h4>范式化过程</h4>
            </div>
            <div class="stage-content">
              <div class="transformation-process">
                <h5>就像整理房间的过程：</h5>
                <div class="process-steps">
                  <div class="process-step">
                    <div class="step-icon">📋</div>
                    <div class="step-text">
                      <strong>1NF - 分类整理</strong>
                      <p>将物品按类别分开，每个物品只放在一个地方</p>
                    </div>
                  </div>
                  <div class="process-step">
                    <div class="step-icon">🗂️</div>
                    <div class="step-text">
                      <strong>2NF - 建立抽屉</strong>
                      <p>为每类物品创建专门的存储空间</p>
                    </div>
                  </div>
                  <div class="process-step">
                    <div class="step-icon">🏷️</div>
                    <div class="step-text">
                      <strong>3NF - 标签管理</strong>
                      <p>给每个抽屉贴上标签，建立索引系统</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="stage order">
            <div class="stage-header">
              <div class="stage-icon">✨</div>
              <h4>有序结构</h4>
            </div>
            <div class="stage-content">
              <div class="order-example">
                <h5>范式化后的结果：</h5>
                <ul>
                  <li>📚 学生表：专门存储学生基本信息</li>
                  <li>📖 课程表：专门存储课程信息</li>
                  <li>📝 成绩表：专门存储选课和成绩关系</li>
                  <li>👨‍🏫 教师表：专门存储教师信息</li>
                </ul>
                <div class="organized-tables">
                  <div class="table-group">
                    <div class="mini-table">
                      <div class="table-title good">学生表</div>
                      <div class="table-data">
                        <span>ID: 1001</span>
                        <span>姓名: 张三</span>
                        <span>邮箱: zhangsan@email.com</span>
                      </div>
                    </div>
                    <div class="mini-table">
                      <div class="table-title good">课程表</div>
                      <div class="table-data">
                        <span>ID: C001</span>
                        <span>名称: 数学</span>
                        <span>学分: 3</span>
                      </div>
                    </div>
                    <div class="mini-table">
                      <div class="table-title good">成绩表</div>
                      <div class="table-data">
                        <span>学生ID: 1001</span>
                        <span>课程ID: C001</span>
                        <span>成绩: 85</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="journey-benefits">
          <h3>范式化带来的好处</h3>
          <div class="benefits-grid">
            <div class="benefit-item">
              <div class="benefit-icon">⚡</div>
              <h4>高效查询</h4>
              <p>就像在图书馆找书，有明确的分类和索引</p>
            </div>
            <div class="benefit-item">
              <div class="benefit-icon">🛡️</div>
              <h4>数据安全</h4>
              <p>修改一处不会影响其他地方，避免连锁反应</p>
            </div>
            <div class="benefit-item">
              <div class="benefit-icon">📈</div>
              <h4>易于扩展</h4>
              <p>新增功能就像在房间添加新家具，不影响现有结构</p>
            </div>
            <div class="benefit-item">
              <div class="benefit-icon">🔄</div>
              <h4>维护简单</h4>
              <p>每个部分职责明确，修改时知道该动哪里</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Learning Path Section -->
    <section class="learning-path-section">
      <div class="section-header">
        <h2>学习路径</h2>
        <p>按照科学的顺序，逐步掌握数据库范式知识</p>
      </div>
      
      <div class="learning-path">
        <div class="path-step">
          <RouterLink to="/introduction" class="step-card">
            <div class="step-number">1</div>
            <div class="step-content">
              <h4>基础概念</h4>
              <p>了解数据库范式的意义</p>
            </div>
          </RouterLink>
        </div>
        
        <div class="path-connector">→</div>
        
        <div class="path-step">
          <RouterLink to="/first-normal-form" class="step-card">
            <div class="step-number">2</div>
            <div class="step-content">
              <h4>基础范式</h4>
              <p>掌握1NF、2NF、3NF</p>
            </div>
          </RouterLink>
        </div>
        
        <div class="path-connector">→</div>
        
        <div class="path-step">
          <RouterLink to="/bcnf" class="step-card">
            <div class="step-number">3</div>
            <div class="step-content">
              <h4>高级范式</h4>
              <p>学习BCNF、4NF、5NF</p>
            </div>
          </RouterLink>
        </div>
        
        <div class="path-connector">→</div>
        
        <div class="path-step">
          <RouterLink to="/practical-example" class="step-card">
            <div class="step-number">4</div>
            <div class="step-content">
              <h4>实战应用</h4>
              <p>真实项目案例分析</p>
            </div>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="cta-content">
        <h2>准备开始你的学习之旅？</h2>
        <p>立即开始学习数据库范式，构建优雅的数据结构设计能力</p>
        <RouterLink to="/introduction" class="btn btn-large">
          立即开始
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Hero Section */
.hero-section {
  padding: 4rem 0;
  text-align: center;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.hero-title {
  font-size: 3rem;
  font-weight: 800;
  line-height: 1.2;
  color: #1e293b;
  margin-bottom: 1.5rem;
}

.highlight {
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: block;
}

.hero-description {
  font-size: 1.2rem;
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
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
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
}

.btn-secondary {
  background: white;
  color: #667eea;
  border: 2px solid #667eea;
}

.btn-secondary:hover {
  background: #667eea;
  color: white;
  transform: translateY(-2px);
}

.btn-large {
  padding: 1.5rem 3rem;
  font-size: 1.2rem;
}

/* Hero Visual */
.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.database-diagram {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.table-box {
  background: white;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  padding: 1rem;
  min-width: 120px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.table-box.unnormalized {
  border-color: #ef4444;
  background: #fef2f2;
}

.table-header {
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 0.5rem;
}

.table-issues {
  color: #ef4444;
  font-size: 0.875rem;
}

.table-fields {
  color: #10b981;
  font-size: 0.875rem;
}

.arrow {
  font-size: 2rem;
  color: #667eea;
}

.normalized-tables {
  display: flex;
  gap: 1rem;
}

/* Stats Section */
.stats-section {
  padding: 4rem 0;
  background: linear-gradient(135deg, #667eea10, #764ba210);
  border-radius: 20px;
  margin: 4rem 0;
}

.stats-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  text-align: center;
}

.stat-item {
  padding: 2rem 1rem;
}

.stat-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.stat-value {
  font-size: 2.5rem;
  font-weight: 800;
  color: #1e293b;
  margin-bottom: 0.5rem;
}

.stat-label {
  color: #64748b;
  font-weight: 500;
}

/* Features Section */
.features-section {
  padding: 4rem 0;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-header h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
}

.section-header p {
  font-size: 1.1rem;
  color: #64748b;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
}

.feature-icon {
  width: 60px;
  height: 60px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--tw-gradient-from), var(--tw-gradient-to));
}

.from-blue-500.to-purple-600 {
  --tw-gradient-from: #3b82f6;
  --tw-gradient-to: #9333ea;
}

.from-green-500.to-teal-600 {
  --tw-gradient-from: #10b981;
  --tw-gradient-to: #0891b2;
}

.from-orange-500.to-red-600 {
  --tw-gradient-from: #f97316;
  --tw-gradient-to: #dc2626;
}

.from-purple-500.to-pink-600 {
  --tw-gradient-from: #8b5cf6;
  --tw-gradient-to: #db2777;
}

.feature-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 0.5rem;
}

.feature-description {
  color: #64748b;
  line-height: 1.6;
}

/* Journey Section */
.journey-section {
  padding: 4rem 0;
  margin: 4rem 0;
}

.journey-metaphor {
  max-width: 1000px;
  margin: 0 auto;
}

.metaphor-intro {
  text-align: center;
  margin-bottom: 3rem;
  padding: 2rem;
  background: linear-gradient(135deg, #667eea10, #764ba210);
  border-radius: 16px;
}

.metaphor-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.metaphor-intro h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 1rem;
}

.metaphor-intro p {
  font-size: 1.1rem;
  color: #64748b;
  line-height: 1.6;
}

.journey-stages {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 3rem;
}

.stage {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-left: 4px solid;
}

.stage.chaos {
  border-left-color: #ef4444;
}

.stage.transformation {
  border-left-color: #f59e0b;
}

.stage.order {
  border-left-color: #10b981;
}

.stage-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.stage-icon {
  font-size: 2rem;
}

.stage-header h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1e293b;
  margin: 0;
}

.stage-content {
  color: #475569;
  line-height: 1.7;
}

.chaos-example h5,
.transformation-process h5,
.order-example h5 {
  color: #1e293b;
  margin-bottom: 1rem;
  font-weight: 600;
}

.chaos-example ul,
.order-example ul {
  margin-bottom: 1.5rem;
  padding-left: 1rem;
}

.chaos-example li,
.order-example li {
  margin-bottom: 0.5rem;
  color: #374151;
}

.example-table {
  background: #fef2f2;
  border: 2px solid #fecaca;
  border-radius: 8px;
  padding: 1rem;
  margin-top: 1rem;
}

.table-title {
  font-weight: 600;
  margin-bottom: 0.75rem;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  display: inline-block;
  font-size: 0.875rem;
}

.table-title.bad {
  background: #fee2e2;
  color: #991b1b;
}

.table-title.good {
  background: #dcfce7;
  color: #166534;
}

.chaos-data {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-family: 'Monaco', 'Consolas', monospace;
  font-size: 0.875rem;
  color: #dc2626;
}

.transformation-process {
  margin-bottom: 1rem;
}

.process-steps {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.process-step {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  background: #f8fafc;
  border-radius: 8px;
  border-left: 3px solid #f59e0b;
}

.step-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.step-text strong {
  color: #1e293b;
  font-weight: 600;
  display: block;
  margin-bottom: 0.25rem;
}

.step-text p {
  color: #64748b;
  margin: 0;
  font-size: 0.9rem;
}

.organized-tables {
  margin-top: 1rem;
}

.table-group {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.mini-table {
  background: #f0fdf4;
  border: 2px solid #bbf7d0;
  border-radius: 8px;
  padding: 1rem;
}

.table-data {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-family: 'Monaco', 'Consolas', monospace;
  font-size: 0.875rem;
  color: #166534;
}

.journey-benefits {
  background: linear-gradient(135deg, #10b98110, #05966910);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
}

.journey-benefits h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 2rem;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.benefit-item {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
}

.benefit-item:hover {
  transform: translateY(-2px);
}

.benefit-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.benefit-item h4 {
  color: #1e293b;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.benefit-item p {
  color: #64748b;
  font-size: 0.9rem;
  line-height: 1.5;
}

/* Learning Path Section */
.learning-path-section {
  padding: 4rem 0;
  background: linear-gradient(135deg, #f8fafc, #e2e8f0);
  border-radius: 20px;
  margin: 4rem 0;
}

.learning-path {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.path-step {
  flex: 1;
  min-width: 200px;
}

.step-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.step-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.step-number {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  flex-shrink: 0;
}

.step-content h4 {
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 0.25rem;
}

.step-content p {
  color: #64748b;
  font-size: 0.875rem;
}

.path-connector {
  font-size: 1.5rem;
  color: #667eea;
  font-weight: bold;
}

/* CTA Section */
.cta-section {
  padding: 4rem 0;
  text-align: center;
}

.cta-content {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  padding: 4rem 2rem;
  border-radius: 20px;
}

.cta-content h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.cta-content p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.cta-content .btn {
  background: white;
  color: #667eea;
}

.cta-content .btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(255, 255, 255, 0.2);
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
  
  .hero-title {
    font-size: 2rem;
  }
  
  .stats-container {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .learning-path {
    flex-direction: column;
  }
  
  .path-connector {
    transform: rotate(90deg);
  }
  
  .normalized-tables {
    flex-direction: column;
  }
  
  .table-group {
    grid-template-columns: 1fr;
  }
  
  .benefits-grid {
    grid-template-columns: 1fr;
  }
  
  .process-step {
    flex-direction: column;
    text-align: center;
  }
  
  .stage-header {
    flex-direction: column;
    text-align: center;
  }
}</style>

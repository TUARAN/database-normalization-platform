<template>
  <aside class="navigation-sidebar" :class="{ 
    collapsed, 
    'mobile-show': mobileOpen,
    'is-mobile': isMobile 
  }" @click="handleSidebarClick">
    <div class="sidebar-content">
      <div class="nav-section">
        <h3 class="section-title" v-if="!collapsed">基础概念</h3>
        <div class="section-icon" v-else>📚</div>
        
        <ul class="nav-list">
          <li>
            <RouterLink to="/introduction" class="nav-item">
              <span class="nav-icon">📖</span>
              <span class="nav-text" v-if="!collapsed">引言介绍</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/why-normalization" class="nav-item">
              <span class="nav-icon">❓</span>
              <span class="nav-text" v-if="!collapsed">为什么需要范式</span>
            </RouterLink>
          </li>
        </ul>
      </div>

      <div class="nav-section">
        <h3 class="section-title" v-if="!collapsed">基础范式</h3>
        <div class="section-icon" v-else>🏗️</div>
        
        <ul class="nav-list">
          <li>
            <RouterLink to="/first-normal-form" class="nav-item">
              <span class="nav-icon">1️⃣</span>
              <span class="nav-text" v-if="!collapsed">第一范式 (1NF)</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/second-normal-form" class="nav-item">
              <span class="nav-icon">2️⃣</span>
              <span class="nav-text" v-if="!collapsed">第二范式 (2NF)</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/third-normal-form" class="nav-item">
              <span class="nav-icon">3️⃣</span>
              <span class="nav-text" v-if="!collapsed">第三范式 (3NF)</span>
            </RouterLink>
          </li>
        </ul>
      </div>

      <div class="nav-section">
        <h3 class="section-title" v-if="!collapsed">高级范式</h3>
        <div class="section-icon" v-else>🚀</div>
        
        <ul class="nav-list">
          <li>
            <RouterLink to="/bcnf" class="nav-item">
              <span class="nav-icon">🔧</span>
              <span class="nav-text" v-if="!collapsed">BCNF范式</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/fourth-normal-form" class="nav-item">
              <span class="nav-icon">4️⃣</span>
              <span class="nav-text" v-if="!collapsed">第四范式 (4NF)</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/fifth-normal-form" class="nav-item">
              <span class="nav-icon">5️⃣</span>
              <span class="nav-text" v-if="!collapsed">第五范式 (5NF)</span>
            </RouterLink>
          </li>
        </ul>
      </div>

      <div class="nav-section">
        <h3 class="section-title" v-if="!collapsed">实践应用</h3>
        <div class="section-icon" v-else>⚡</div>
        
        <ul class="nav-list">
          <li>
            <RouterLink to="/denormalization" class="nav-item">
              <span class="nav-icon">🔄</span>
              <span class="nav-text" v-if="!collapsed">反规范化</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/practical-example" class="nav-item">
              <span class="nav-icon">🛒</span>
              <span class="nav-text" v-if="!collapsed">实战案例</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/interactive-demo" class="nav-item">
              <span class="nav-icon">🎮</span>
              <span class="nav-text" v-if="!collapsed">交互演示</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/best-practices" class="nav-item">
              <span class="nav-icon">✨</span>
              <span class="nav-text" v-if="!collapsed">最佳实践</span>
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>

    <div class="sidebar-footer" v-if="!collapsed">
      <div class="progress-section">
        <h4>学习进度</h4>
        <div class="progress-bar">
          <div class="progress-fill" :style="{ width: `${learningProgress}%` }"></div>
        </div>
        <span class="progress-text">{{ learningProgress }}% 完成</span>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

interface Props {
  collapsed: boolean
  mobileOpen?: boolean
  isMobile?: boolean
}

const props = defineProps<Props>()
const emit = defineEmits(['close-mobile'])

const handleSidebarClick = (e: Event) => {
  // 在移动端点击链接时关闭侧边栏
  if (props.isMobile && (e.target as HTMLElement).tagName === 'A') {
    emit('close-mobile')
  }
}

const route = useRoute()

// 简单的学习进度计算
const learningProgress = computed(() => {
  const totalPages = 11
  const completedPages = Math.floor(Math.random() * totalPages) // 这里可以替换为实际的进度逻辑
  return Math.round((completedPages / totalPages) * 100)
})
</script>

<style scoped>
.navigation-sidebar {
  position: fixed;
  left: 0;
  top: 80px;
  width: 280px;
  height: calc(100vh - 80px);
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(20px);
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  transition: all 0.3s ease;
  z-index: 900;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
}

.navigation-sidebar.collapsed {
  width: 80px;
}

.sidebar-content {
  flex: 1;
  padding: 1.5rem 0;
}

.nav-section {
  margin-bottom: 2rem;
  padding: 0 1.5rem;
}

.navigation-sidebar.collapsed .nav-section {
  padding: 0 1rem;
  text-align: center;
}

.section-title {
  font-size: 0.875rem;
  font-weight: 600;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0 0 1rem 0;
  padding: 0 0.5rem;
}

.section-icon {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-align: center;
}

.nav-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  margin-bottom: 0.25rem;
  border-radius: 12px;
  text-decoration: none;
  color: #475569;
  font-weight: 500;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;
}

.navigation-sidebar.collapsed .nav-item {
  justify-content: center;
  padding: 0.75rem;
}

.nav-item:hover {
  background: linear-gradient(135deg, #667eea20, #764ba220);
  color: #1e293b;
  transform: translateX(4px);
}

.nav-item.router-link-active {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  font-weight: 600;
}

.nav-item.router-link-active::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 4px;
  height: 100%;
  background: white;
  border-radius: 0 2px 2px 0;
}

.nav-icon {
  font-size: 1.2rem;
  min-width: 20px;
  text-align: center;
}

.nav-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.sidebar-footer {
  padding: 1.5rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.progress-section h4 {
  font-size: 0.875rem;
  font-weight: 600;
  color: #64748b;
  margin: 0 0 1rem 0;
}

.progress-bar {
  width: 100%;
  height: 8px;
  background: #e2e8f0;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 0.5rem;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #667eea, #764ba2);
  border-radius: 4px;
  transition: width 0.3s ease;
}

.progress-text {
  font-size: 0.75rem;
  color: #64748b;
  font-weight: 500;
}

/* 自定义滚动条 */
.navigation-sidebar::-webkit-scrollbar {
  width: 4px;
}

.navigation-sidebar::-webkit-scrollbar-track {
  background: transparent;
}

.navigation-sidebar::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 2px;
}

.navigation-sidebar::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.3);
}

@media (max-width: 768px) {
  .navigation-sidebar {
    transform: translateX(-100%);
    width: 280px;
  }
  
  .navigation-sidebar.collapsed {
    transform: translateX(-100%);
    width: 280px;
  }
  
  /* 移动端显示侧边栏的类 */
  .navigation-sidebar.mobile-show {
    transform: translateX(0) !important;
  }
}
</style>
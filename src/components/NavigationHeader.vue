<template>
  <header class="navigation-header">
    <div class="header-content">
      <div class="header-left">
        <button class="sidebar-toggle" @click="$emit('toggle-sidebar')">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        
        <div class="logo-section">
          <svg class="logo-icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- 数据库圆柱体图标 -->
            <ellipse cx="16" cy="8" rx="12" ry="4" fill="currentColor" opacity="0.8"/>
            <rect x="4" y="8" width="24" height="8" fill="currentColor" opacity="0.6"/>
            <ellipse cx="16" cy="16" rx="12" ry="4" fill="currentColor" opacity="0.8"/>
            <rect x="4" y="16" width="24" height="8" fill="currentColor" opacity="0.6"/>
            <ellipse cx="16" cy="24" rx="12" ry="4" fill="currentColor"/>
          </svg>
          <h1 class="logo-text">数据库范式教学平台</h1>
        </div>
      </div>
      
      <div class="header-right">
        <nav class="quick-nav">
          <RouterLink to="/" class="nav-link">首页</RouterLink>
          <RouterLink to="/introduction" class="nav-link">开始学习</RouterLink>
          <RouterLink to="/interactive-demo" class="nav-link">交互演示</RouterLink>
        </nav>
        
        <div class="user-section">
          <button class="theme-toggle">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
defineEmits(['toggle-sidebar'])
</script>

<style scoped>
.navigation-header {
  height: 80px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.header-content {
  height: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.sidebar-toggle {
  background: none;
  border: none;
  color: white;
  padding: 0.5rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.sidebar-toggle:hover {
  background: rgba(255, 255, 255, 0.1);
}

.logo-section {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.logo-icon {
  color: white;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin: 0;
  background: linear-gradient(45deg, #fff, #e2e8f0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.quick-nav {
  display: flex;
  gap: 1.5rem;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.2s;
  position: relative;
}

.nav-link:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-1px);
}

.nav-link.router-link-active {
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
}

.nav-link.router-link-active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 2px;
  background: white;
  border-radius: 1px;
}

.user-section {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.theme-toggle {
  background: none;
  border: none;
  color: white;
  padding: 0.5rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.theme-toggle:hover {
  background: rgba(255, 255, 255, 0.1);
}

@media (max-width: 768px) {
  .header-content {
    padding: 0 1rem;
  }
  
  .quick-nav {
    display: none;
  }
  
  .logo-text {
    font-size: 1.2rem;
  }
}
</style>
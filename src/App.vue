<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavigationHeader from './components/NavigationHeader.vue'
import NavigationSidebar from './components/NavigationSidebar.vue'
import { ref, onMounted, onUnmounted } from 'vue'

const sidebarCollapsed = ref(false)
const isMobile = ref(false)
const mobileMenuOpen = ref(false)

const checkDevice = () => {
  isMobile.value = window.innerWidth <= 768
  if (!isMobile.value) {
    mobileMenuOpen.value = false
  }
}

const toggleSidebar = () => {
  if (isMobile.value) {
    mobileMenuOpen.value = !mobileMenuOpen.value
  } else {
    sidebarCollapsed.value = !sidebarCollapsed.value
  }
}

onMounted(() => {
  checkDevice()
  window.addEventListener('resize', checkDevice)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkDevice)
})
</script>

<template>
  <div class="app-layout">
    <NavigationHeader @toggle-sidebar="toggleSidebar" />
    
    <div class="main-container">
      <!-- 移动端遮罩层 -->
      <div 
        v-if="isMobile && mobileMenuOpen" 
        class="mobile-overlay"
        @click="mobileMenuOpen = false"
      ></div>
      
      <NavigationSidebar 
        :collapsed="sidebarCollapsed" 
        :mobile-open="mobileMenuOpen"
        :is-mobile="isMobile"
        @close-mobile="mobileMenuOpen = false"
      />
      
      <main class="content-area" :class="{ 
        'sidebar-collapsed': sidebarCollapsed && !isMobile,
        'mobile': isMobile 
      }">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<style scoped>
.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.main-container {
  display: flex;
  flex: 1;
  position: relative;
}

.content-area {
  flex: 1;
  margin-left: 280px;
  padding: 2rem;
  background: #f8fafc;
  height: calc(100vh - 80px);
  overflow-y: auto;
  transition: margin-left 0.3s ease;
  border-radius: 20px 0 0 0;
  box-shadow: -10px 0 30px rgba(0, 0, 0, 0.1);
}

.content-area.sidebar-collapsed {
  margin-left: 80px;
}

.mobile-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 850;
  backdrop-filter: blur(4px);
}

@media (max-width: 768px) {
  .content-area,
  .content-area.sidebar-collapsed,
  .content-area.mobile {
    margin-left: 0;
    border-radius: 0;
  }
}
</style>

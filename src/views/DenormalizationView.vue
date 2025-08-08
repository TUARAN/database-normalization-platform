<template>
  <div class="denormalization-container">
    <div class="page-header">
      <h1 class="page-title">反规范化</h1>
      <p class="page-subtitle">性能与规范的平衡：何时考虑反规范化</p>
    </div>
    
    <div class="coming-soon">
      <h3>🚧 正在建设中...</h3>
      <p>反规范化的详细内容正在制作中，敬请期待！</p>
      <RouterLink to="/first-normal-form" class="btn btn-primary">
        回到第一范式
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.denormalization-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
  text-align: center;
}

.page-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #64748b, #475569);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.page-subtitle {
  font-size: 1.2rem;
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 3rem;
}

.coming-soon {
  background: white;
  padding: 4rem 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.coming-soon h3 {
  color: #1e293b;
  margin-bottom: 1rem;
}

.coming-soon p {
  color: #64748b;
  margin-bottom: 2rem;
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
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
}
</style>
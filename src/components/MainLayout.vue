<template>
  <div class="layout">
    <HeaderComponent />
    <main class="layout__main">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue'
</script>

<style lang="scss" scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  &__main {
    flex: 1;
  }
}
</style>

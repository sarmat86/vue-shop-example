<template>
  <div v-if="isOpen" class="overlay" @click="cartStore.closeCart" />
</template>

<script setup lang="ts">
import { useCartStore } from '@/stores/cartStore';
import { storeToRefs } from 'pinia';

const cartStore = useCartStore();
const { isOpen } = storeToRefs(cartStore)
</script>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}
</style>

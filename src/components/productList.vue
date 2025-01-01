<template>
  <div class="product-list">
    <h2 class="product-list__title">Wyszukaj czasopismo</h2>
    <div class="product-list__wrapper">
      <ProductTile v-for="product in products" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProductsStore } from '@/stores/products'
import { computed } from 'vue'
import ProductTile from '@/components/productTile.vue'

const productsStore = useProductsStore()
const products = computed(() => productsStore.products)
</script>

<style lang="scss">
.product-list {
  &__title {
    font-size: 2.625rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  &__wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(15.625rem, 1fr));
    gap: 2rem;
  }
}
</style>

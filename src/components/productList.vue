<template>
  <div class="product-list container">
    <h2 class="product-list__title">Wyszukaj czasopismo</h2>
    <div v-if="!isLoading" class="product-list__wrapper">
      <ProductTile v-for="product in products" :key="product.id" :product="product" />
    </div>
    <div v-else class="product-list__loader" >
      <LoaderComponent />
    </div>
    <PaginationComponent v-if="!isLoading" />
  </div>
</template>

<script setup lang="ts">
import { useProductsStore } from '@/stores/productsStore'
import ProductTile from '@/components/productTile.vue'
import LoaderComponent from '@/components/loaderComponent.vue'
import PaginationComponent from '@/components/paginationComponent.vue'
import { storeToRefs } from 'pinia';

const productsStore = useProductsStore();
productsStore.fetchProducts();

const { products, isLoading } = storeToRefs(productsStore);

</script>

<style lang="scss">
.product-list {
  min-height: 100vh;

  &__title {
    font-size: 2.625rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  &__wrapper {
    display: grid;
    grid-template-columns: repeat(4, minmax(15.625rem, 1fr));
    gap: 4rem 2rem;
    margin-top: 3.75rem;
  }

  &__loader {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    height: 100vh;
  }
}
</style>

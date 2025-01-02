<script setup lang="ts">
import MainLayout from '@/components/MainLayout.vue';
import ProductList from '@/components/ProductList.vue';
import HeroBanner from '@/components/HeroBanner.vue';
import OverlayComponent from '@/components/OverlayComponent.vue';
</script>

<template>
  <MainLayout>
    <HeroBanner />
    <ProductList />
    <OverlayComponent />
  </MainLayout>
</template>

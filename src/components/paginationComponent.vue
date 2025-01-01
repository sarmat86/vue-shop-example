<template>
  <div class="pagination">
    <button
      class="pagination__arrow"
      :disabled="currentPage === 1"
      @click="handlePageChange(currentPage - 1)"
    >
     <ChevronLeftIcon />
    </button>

    <div class="pagination__numbers">
      <button
        v-for="page in totalPages"
        :key="page"
        :class="[
          'pagination__number',
          { 'pagination__number--active': page === currentPage }
        ]"
        @click="handlePageChange(page)"
      >
        {{ page }}
      </button>
    </div>

    <button
      class="pagination__arrow"
      :disabled="currentPage === totalPages"
      @click="handlePageChange(currentPage + 1)"
    >
      <ChevronRightIcon />
    </button>
  </div>
</template>

<script setup lang="ts">

import { useProductsStore } from '@/stores/productsStore';
import { storeToRefs } from 'pinia';
import ChevronLeftIcon from '@/components/icons/chevronLeftIcon.vue';
import ChevronRightIcon from '@/components/icons/chevronRightIcon.vue';


const productsStore = useProductsStore();
const { currentPage, totalPages } = storeToRefs(productsStore);


const handlePageChange = (page: number) => {
  productsStore.setCurrentPage(page);
};
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;

  &__numbers {
    display: flex;
    gap: 0.5rem;
  }

  &__number {
    min-width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: none;
    cursor: pointer;
    font-size: 1rem;
    color: #6E8484;

    &:hover {
      color: var(--color-primary);
    }

    &--active {
      background-color: var(--color-primary);
      color: #fff;
      border-radius: 4px;

      &:hover {
        cursor: not-allowed;
        color: #fff;
      }
    }
  }

  &__arrow {
    border: none;
    background: none;
    cursor: pointer;
    padding: 0.5rem;

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      color: var(--color-gold);
    }
  }


}
</style>


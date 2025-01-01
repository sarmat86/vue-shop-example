<template>
  <div class="product-list">
    <h2 class="product-list__title">Wyszukaj czasopismo</h2>
    <div class="product-list__wrapper">
      <div v-for="product in products" :key="product.id" class="product-item">
        <div class="product-item__image-wrapper">
          <img :src="product.image.url" :alt="product.image.alt" class="product-item__image" />
        </div>
        <div class="product-item__content-wrapper">
          <h3 class="product-item__name">{{ product.name }}</h3>
          <p class="product-item__price">{{ product.price.toFixed(2) }} <span class="product-item__price-currency">PLN</span></p>
          <p class="product-item__vat">+ VAT 23%</p>
          <button class="product-item__details">SZCZEGÓŁY</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProductsStore } from '@/stores/products'
import { computed } from 'vue'

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
.product-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    position: relative;
    cursor: pointer;

    &:hover {
      .product-item__content-wrapper {
        border: .0625rem solid var(--color-gold);
        box-shadow: .3125rem .3125rem .625rem 0rem rgba(46, 56, 56, 0.2);
        color: var(--color-gold);
        transition: all 0.2s ease-in-out;
      }
      .product-item__details {
        color: var(--color-gold);
        transition: all 0.2s ease-in-out;
      }
    }

    &__image-wrapper {
    width: 100%;
    height: 18.75rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 1;
  }

  &__content-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: .0625rem solid transparent;
    position: absolute;
        top: 56%;
    left: -0.75rem;
    right: -0.3125rem;
    padding-top: 4.5625rem;
    padding-bottom: 1rem;
    }

  &__image {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }

  &__name {
    font-size: 1.125rem;
    font-weight: 900;
    margin-top: .625rem;
    text-align: center;
    margin-bottom: 0.5rem;
    line-height: 1.2;
  }

  &__price {
    font-size: 1.875rem;
    font-weight: 900;
    margin: 1.25rem 0 0;
  }

  &__price-currency {
    font-size: 1.125rem;
    font-weight: 900;
  }

  &__vat {
    font-size: 0.9rem;
    margin: 0.2rem 0 1rem;
  }

  &__details {
    background: transparent;
    border: none;
    cursor: pointer;
    font-weight: 500;
    text-transform: uppercase;
    font-size: 1rem;
    letter-spacing: .15rem;
    color: var(--vt-green);
  }
  }
</style>

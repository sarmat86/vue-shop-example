<template>
  <div class="product-item">
    <div class="product-item__image-wrapper">
      <img :src="product.image.url" :alt="product.image.alt" class="product-item__image" />
    </div>
    <div class="product-item__content-wrapper">
      <h3 class="product-item__name">{{ product.name }}</h3>
      <p class="product-item__price">{{ product.price }} <span class="product-item__price-currency">PLN</span></p>
      <p class="product-item__vat">+ VAT 23%</p>
      <button class="product-item__details">SZCZEGÓŁY</button>
      <div class="product-item__border" />
    </div>

  </div>
</template>

<script setup lang="ts">
import type { ProductType } from '@/types'

defineProps<{
  product: ProductType
}>()

</script>

<style lang="scss" scoped>
.product-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    position: relative;
    cursor: pointer;
    max-width: 17.1875rem;
    margin-bottom: 2rem;

    &:hover {
      .product-item__border {
        border: .0625rem solid var(--color-secondary);
        box-shadow: .3125rem .3125rem .625rem 0rem rgba(46, 56, 56, 0.2);
        color: var(--color-secondary);
        transition: all 0.2s ease-in-out;
      }
      .product-item__details, > * {
        color: var(--color-secondary);
        transition: all 0.2s ease-in-out;
      }
    }

    &__border {
      border: .0625rem solid transparent;
      transition: all 0.2s ease-in-out;
      position: absolute;
      left: -1.875rem;
      right: -1.875rem;
      top: -5.125rem;
      height: 155%;
    }

    &__image-wrapper {
    width: 100%;
    height: 11.875rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 1;
  }

  &__content-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    }

  &__image {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }

  &__name {
    font-size: 1.0625rem;
    letter-spacing: 0rem;
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

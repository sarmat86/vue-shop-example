<template>
  <div v-if="isOpen" class="cart">
    <div class="cart__content container">
      <div class="cart__header">
        <span class="cart__title">Twój koszyk</span>
        <button class="cart__close" @click="cartStore.closeCart">
          <CancelIcon />
        </button>
      </div>

      <div v-if="products.length > 0" class="cart__items">
        <div v-for="item in products" :key="item.id" class="cart__item">
          <div class="cart__item-content">
            <div class="cart__item-icon">
              <BookIcon />
            </div>
            <div class="cart__item-info">
              <h3 class="cart__item-title">{{ item.name }}</h3>
            </div>
            <button class="cart__item-remove" @click="cartStore.removeProduct(item.id)">
              <TrashIcon />
            </button>
          </div>
          <div class="cart__item-price">
            <p>Cena</p>
            <span>{{ item.price }} PLN</span>
          </div>

        </div>
      </div>

      <div v-if="products.length > 0" class="cart__footer">
        <div class="cart__total">
          <p class="cart__total-text">Łączna kwota</p>
          <div>
            <p class="cart__total-price">{{ totalPrice }} PLN</p>
            <span class="cart__vat">+ VAT 23%</span>
          </div>
        </div>
        <button class="cart__checkout">PRZEJDŹ DO KOSZYKA</button>
      </div>
      <div v-else class="cart__empty">
        <p>Twój koszyk jest pusty</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCartStore } from '@/stores/cartStore';
import BookIcon from '@/components/icons/BookIcon.vue'
import TrashIcon from '@/components/icons/TrashIcon.vue'
import CancelIcon from '@/components/icons/CancelIcon.vue'


const cartStore = useCartStore();
const { products, totalPrice, isOpen } = storeToRefs(cartStore)

</script>

<style lang="scss" scoped>
.cart {
  position: absolute;
  top: 100%;
  right: 0;
  top: 57px;
  width: 380px;
  z-index: 1000;

  &__content {
    position: relative;
    z-index: 2;
    background: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 16px 27px;

  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
  }

  &__title {
    color: #2E3838;
    font-size: 18px;
    font-weight: 500;
    margin: 0;
  }

  &__close {
    position: absolute;
    top: 0;
    right: 0;
    border: 0;

    background: var(--color-primary);
    width: 41px;
    height: 41px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    cursor: pointer;
    padding: 0.5rem;
    color: #666;

    &:hover {
      background-color: var(--color-secondary);
    }
  }

  &__items {
    margin-bottom: 1.5rem;

  }

  &__item {
    margin-bottom: 11px;
    background: #F1F5F5;
    padding: 9px 22px;

    &:last-child {
      border-bottom: none;
      margin-bottom: 0;
    }

    &-content {
      display: flex;
      align-items: center;
      gap: 1rem;
      border-bottom: 1px solid #F1F5F5
    }

    &-price {
      display: flex;
      justify-content: space-between;
      margin-top: 14px;

      p {
        font-size: 14px;
        font-weight: 300;
        color: #2E3838;
        margin: 0;
      }

      span {
        font-size: 16px;
        font-weight: 900;
      }
    }

    &-icon {
      color: var(--color-primary);
    }

    &-info {
      flex: 1;
    }

    &-title {
      font-size: 16px;
      font-weight: bold;
      margin: 0;
      color: var(--color-primary);
    }

    &-remove {
      background: none;
      border: none;
      cursor: pointer;
      color: #666;
      padding: 0.5rem;

      &:hover {
        fill: var(--color-primary);
      }
    }
  }

  &__total {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }

  &__total-text {
    font-size: 16px;
    font-weight: 500;
    margin: 0;
    color: #2E3838;
  }

  &__total-price {
    font-size: 22px;
    font-weight: bold;
    margin: 0;
    text-align: right;
    color: #2E3838;
  }

  &__vat {
    display: block;
    font-size: 14px;
    font-weight: 300;
    color: #2E3838;
  }

  &__checkout {
    width: 100%;
    padding: 17px;
    background: var(--color-secondary);
    border: none;
    color: white;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 2.4px;
    cursor: pointer;
    transition: background-color 0.2s ease;

    margin-bottom: 10px;

    &:hover {
      background: var(--color-primary);
    }
  }
}
</style>

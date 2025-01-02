import { defineStore } from 'pinia'
import type { ProductType } from '@/types'

type CartState = {
  products: ProductType[]
  isOpen: boolean
}

export const useCartStore = defineStore('cart', {
  state: (): CartState => {
    return {
      products: [],
      isOpen: false,
    }
  },

  getters: {
    totalPrice: (state) => {
      return state.products.reduce((total, product) => total + product.price, 0).toFixed(2)
    },

    count: (state) => {
      return state.products.length
    },
  },

  actions: {
    addProduct(product: ProductType) {
      const isInBasket = this.products.find((p) => p.id === product.id)
      if (isInBasket) {
        return
      } else {
        this.products.push({ ...product })
      }
    },

    removeProduct(productId: number) {
      this.products = this.products.filter((product) => product.id !== productId)
    },

    openCart() {
      this.isOpen = true
    },

    closeCart() {
      this.isOpen = false
    },
  },
})

import { defineStore } from 'pinia'
import type { ProductType } from '@/types'
import { fetchProducts } from '@/mockedApi/productsApi'

type ProductsState = {
  products: ProductType[]
  currentPage: number
  isLoading: boolean
}

export const useProductsStore = defineStore('products', {
  state: (): ProductsState => {
    return {
      products: [],
      currentPage: 1,
      isLoading: false,
    }
  },

  actions: {
    async fetchProducts() {
      this.isLoading = true
      this.products = await fetchProducts(this.currentPage)
      this.isLoading = false
    },

    nextPage() {
      this.currentPage++
      this.fetchProducts()
    },

    previousPage() {
      this.currentPage--
      this.fetchProducts()
    },
  },
})

import { defineStore } from 'pinia'
import type { ProductType } from '@/types'
import { fetchProducts } from '@/mockedApi/productsApi'

type ProductsState = {
  products: ProductType[]
  currentPage: number
  totalPages: number
  isLoading: boolean
}

export const useProductsStore = defineStore('products', {
  state: (): ProductsState => {
    return {
      products: [],
      currentPage: 1,
      totalPages: 0,
      isLoading: false,
    }
  },

  actions: {
    async fetchProducts() {
      this.isLoading = true
      const response = await fetchProducts(this.currentPage)
      this.products = response.products
      this.totalPages = response.totalPages
      this.isLoading = false
    },

    setCurrentPage(page: number) {
      if (page > this.totalPages || page < 1 || page === this.currentPage) {
        return
      }
      this.currentPage = page
      this.fetchProducts()
    },
  },
})

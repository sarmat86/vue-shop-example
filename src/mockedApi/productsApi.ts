import mockedProducts from './products.json'
import type { ProductType } from '@/types'

type ResponseType = {
  products: ProductType[]
  totalPages: number
  currentPage: number
}

export const fetchProducts = async (page: number): Promise<ResponseType> => {
  return new Promise((resolve) => {
    const pageData = mockedProducts.find((product) => product.page === page)
    setTimeout(() => {
      resolve({
        products: pageData?.products || [],
        totalPages: pageData?.totalPages || 0,
        currentPage: pageData?.page || 0,
      })
    }, Math.random() * 1000)
  })
}

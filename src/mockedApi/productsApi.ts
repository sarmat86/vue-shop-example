import mockedProducts from './products.json'
import type { ProductType } from '@/types'

export const fetchProducts = async (page: number): Promise<ProductType[]> => {
  return new Promise((resolve) => {
    const products = mockedProducts.find((product) => product.page === page)?.products || []
    setTimeout(() => {
      resolve(products)
    }, Math.random() * 1000)
  })
}

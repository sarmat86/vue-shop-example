import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { ProductType } from '@/types'

export const useProductsStore = defineStore('products', () => {
  const products = ref<ProductType[]>([
    {
      id: 1,
      name: 'Kazus Podatkowy 1(6)2019',
      price: 98.76,
      image: { url: '/img/products/kazus.png', alt: 'Kazus Podatkowy 1(6)2019' },
    },
    {
      id: 2,
      name: 'Kazus Podatkowy 1(6)2019',
      price: 98.76,
      image: { url: '/img/products/kazus.png', alt: 'Kazus Podatkowy 1(6)2019' },
    },
    {
      id: 3,
      name: 'Procedury administracyjne i podatkowe 2',
      price: 98.76,
      image: {
        url: '/img/products/procedury.png',
        alt: 'Procedury administracyjne i podatkowe 2',
      },
    },
    {
      id: 4,
      name: 'Prawo Pomocy Publicznej',
      price: 98.76,
      image: {
        url: '/img/products/prawopomocy.png',
        alt: 'Prawo Pomocy Publicznej',
      },
    },
  ])

  return { products }
})

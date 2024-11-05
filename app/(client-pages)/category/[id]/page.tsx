"use client"
import Card from '@/components/(client)/Card'
import FilterMenu from '@/components/(client)/FilterMenu'
import useCategoryStore from '@/zustand/useCategoryStore'
import useProductStore from '@/zustand/useProductStore'
import Link from 'next/link'
import React, { useEffect } from 'react'

const CategoryItem = ({ params }: { params: { id: string } }) => {
  const { category, fetchSingleCategory } = useCategoryStore()
  const { products, fetchProducts } = useProductStore()

  useEffect(() => {
    fetchProducts();
    fetchSingleCategory(params.id);    
  }, [fetchSingleCategory, fetchProducts, params.id]);
  return (
    <main className="bg-body min-h-screen">
      <div className="max-w-7xl mx-auto px-4 lg:px-10 pb-24">
        <Link
          href="/"
          className="flex items-center gap-3 w-fit text-gray-500 text-sm transition-all ease-in-out hover:text-indigo-500 py-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
          <span>Orqaga</span>
        </Link>
        <FilterMenu />

        <div className="flex items-center justify-between py-4">
          <h2 className="text-xl sm:text-2xl font-bold capitalize">{category?.name}</h2>
        </div>

        <div className="flex gap-3.5 min-h-72">
          {products.filter(product => product.category === category?.name).map(product => (
            <Card key={product.id} title={product.title} imgUrl={product.productImageUrl} price={product.price} href={`/products/${product.id}`} />
          ))}
        </div>
      </div>
    </main>
  )
}

export default CategoryItem
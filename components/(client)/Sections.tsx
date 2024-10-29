"use client"
import React, { useEffect } from 'react'
import CategoryHeader from './CategoryHeader'
import Card from './Card'
import useCategoryStore from '@/zustand/useCategoryStore'
import useProductStore from '@/zustand/useProductStore'

const Sections = () => {
  const { categories, fetchCategories } = useCategoryStore()
  const { products, fetchProducts } = useProductStore()

  useEffect(() => {
    fetchProducts()
    fetchCategories();
  }, [fetchCategories, fetchProducts]);

  console.log(products);
  
  return (
    <>
    {categories.map(category => (
      <div key={category.id}>
        <CategoryHeader heading={category.name} link={`/category/${category.id}`} />
        <div className="flex gap-3.5">
          {products.filter(product => product.category === category.name).map(product => (
            <Card key={product.id} title={product.title} imgUrl={product.productImageUrl} price={product.price} href={`/products/${product.id}`} />
          ))}
        </div>
      </div>
    ))}
    </>
  )
}

export default Sections
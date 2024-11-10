"use client"
import useCategoryStore from '@/zustand/useCategoryStore'
import React, { useEffect } from 'react'
import Loader from '../Loader'
import Image from 'next/image'

const FilterMenu = () => {
  const { categories, fetchCategories } = useCategoryStore()

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  if(categories.length == 0){
    return <div className="flex items-center justify-center h-40">
      <Loader />
    </div>
  }
  console.log(categories);
  

  return (
    <div className="flex items-center gap-5 py-5">
      {categories.map(category => (
        <a href={`/category/${category.id}`} key={category.id} className="w-24 text-center space-y-2.5">
          <div className="size-24 relative rounded-2xl overflow-hidden">
            <Image src={category.categoryImgUrl[0].url} alt="" className="w-full h-full object-cover" fill />
          </div>
          <p className="font-medium text-sm capitalize">
            {category.name}
          </p>
        </a>
      ))}
    </div>

  )
}

export default FilterMenu
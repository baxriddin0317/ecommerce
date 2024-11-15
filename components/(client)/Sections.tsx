"use client"
import React, { useEffect } from 'react'
import CategoryHeader from './CategoryHeader'
import Card from './Card'
import useCategoryStore from '@/zustand/useCategoryStore'
import useProductStore from '@/zustand/useProductStore'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const Sections = () => {
  const { categories, fetchCategories } = useCategoryStore()
  const { products, fetchProducts } = useProductStore()

  useEffect(() => {
    fetchProducts()
    fetchCategories();
  }, [fetchCategories, fetchProducts]);

  return (
    <>
    {categories.map(category => (
      <div key={category.id}>
        <CategoryHeader heading={category.name} link={`/category/${category.id}`} />
        <div className="hidden md:flex gap-5 flex-wrap min-h-72">
          {products.filter(product => product.category === category.name).slice(0, 8).map(product => (
            <Card key={product.id} title={product.title} imgUrl={product.productImageUrl} price={product.price} href={`/products/${product.id}`} />
          ))}
        </div>
        <div className='md:hidden'>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              400: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              515: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            }}
            modules={[Pagination]}
            className="mySwiper pb-10 min-h-[440px]"
          >
            {products.filter(product => product.category === category.name).slice(0, 8).map(product => (
              <SwiperSlide className='rounded-lg w-fit shadow' key={product.id}>
                <Card title={product.title} imgUrl={product.productImageUrl} price={product.price} href={`/products/${product.id}`} />
              </SwiperSlide>
            ))}
            
          </Swiper>
        </div>
      </div>
    ))}
    </>
  )
}

export default Sections
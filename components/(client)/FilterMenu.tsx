"use client"
import useCategoryStore from '@/zustand/useCategoryStore'
import React, { useEffect } from 'react'
import Loader from '../Loader'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

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
    <>
      <div className="hidden md:flex items-start gap-5 py-5">
        {categories.map(category => (
          <a href={`/category/${category.id}`} key={category.id} className="w-24 text-center space-y-2.5">
            <div className="size-24 relative rounded-2xl overflow-hidden">
              <Image src={category.categoryImgUrl[0].url} alt="" className="w-full h-full object-cover" fill />
            </div>
            <div className='relative group'>
              <p className="font-medium text-sm capitalize line-clamp-1">
                {category.name}
              </p>
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-gray-800 text-white text-sm rounded-md p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {category.name}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-3 h-3 bg-gray-800 rotate-45" />
              </div>

            </div>
          </a>
        ))}
      </div>
      <div className='md:hidden py-5'>
          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            navigation={true}
            breakpoints={{
              400: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              515: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            modules={[Navigation]}
            className="mySwiper pb-10"
          >
            {categories.map(category => (
              <SwiperSlide className=''  key={category.id}>
                <a href={`/category/${category.id}`} className="w-24 text-center space-y-2.5">
                  <div className="size-24 relative rounded-2xl overflow-hidden mx-auto">
                    <Image src={category.categoryImgUrl[0].url} alt="" className="w-full h-full object-cover" fill />
                  </div>
                  <p className="font-medium text-sm capitalize">
                    {category.name}
                  </p>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
    </>

  )
}

export default FilterMenu
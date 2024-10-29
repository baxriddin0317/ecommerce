"use client"
import Loader from '@/components/Loader'
import useCategoryStore from '@/zustand/useCategoryStore';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

const AddCategory = () => {
  const { addCategory, loading } = useCategoryStore();
   // navigate
  const navigate = useRouter();
  const [newCategory, setNewCategory] = useState({
    id: "",
    name: "",
    categoryImgUrl: "",
  });

  const handleAddCategory = async () => {
    
    try {
      await addCategory(newCategory);
      toast.success("Add category successfully");
      navigate.push("/admin-dashboard");
    } catch (error) {
      console.log(error);
      toast.error("Add product failed");
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        {loading && <Loader />}
        {/* Login Form  */}
        <div className="login_Form bg-pink-50 px-8 py-6 border border-pink-100 rounded-xl shadow-md">
          {/* Top Heading  */}
          <div className="mb-5">
            <h2 className="text-center text-2xl font-bold text-pink-500 "></h2>
          </div>
          {/* Input One  */}
          <div className="mb-3">
            <input
              type="text"
              name="name"
              value={newCategory.name}
              onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
              placeholder="Category Name"
              className="bg-pink-50 border text-pink-300 border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-300"
            />
          </div>
          {/* Input Three  */}
          <div className="mb-3">
            <input
              type="text"
              name="productImageUrl"
              value={newCategory.categoryImgUrl}
              onChange={(e) => setNewCategory({ ...newCategory, categoryImgUrl: e.target.value })}
              placeholder="Category Image Url"
              className="bg-pink-50 border text-pink-300 border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-300"
            />
          </div>
          {/* Add Product Button  */}
          <div className="mb-3">
            <button
              onClick={handleAddCategory}
              type="button"
              className="bg-pink-500 hover:bg-pink-600 w-full text-white text-center py-2 font-bold rounded-md "
            >
              Add category
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddCategory
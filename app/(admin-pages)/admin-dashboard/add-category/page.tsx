"use client"
import Loader from '@/components/Loader'
import { fireStorage } from '@/firebase/FirebaseConfig';
import { CategoryI, ImageT } from '@/lib/types';
import useCategoryStore from '@/zustand/useCategoryStore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { v4 as uuidv4 } from 'uuid';


const AddCategory = () => {
  const [load, setLoad] = useState(false);

  const { addCategory, loading } = useCategoryStore();
  const navigate = useRouter();
  const [newCategory, setNewCategory] = useState<CategoryI>({
    id: "",
    name: "",
    categoryImgUrl: [] as ImageT[],
    storageFileId: ""
  });

  const handleImageUpload = async (files: FileList | null) => {
    if (!files) return;
    setLoad(true);

    const uuid = uuidv4();
    const uploadPromises = Array.from(files).map(async (file) => {
      const storageRef = newCategory.storageFileId.length === 0 ? ref(fireStorage, `categories/${uuid}/${file.name}`) : ref(fireStorage, `categories/${newCategory.storageFileId}/${file.name}`);
      await uploadBytes(storageRef, file);
      const downloadUrl = await getDownloadURL(storageRef);
      return { url: downloadUrl, path: storageRef.fullPath };
    });

    const imageUrls = await Promise.all(uploadPromises);
    
    setNewCategory((prevCategory) => ({
      ...prevCategory,
      categoryImgUrl: imageUrls,
      storageFileId: uuid
    }));
    setLoad(false);

  };

  const handleAddCategory = async () => {
    if (
      newCategory.name == "" ||
      newCategory.categoryImgUrl.length == 0
    ) {
      return toast.error("all fields are required");
    }
    
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
    <div className="flex justify-center items-center h-screen">
      {loading || load && <Loader />}
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
            type="file"
            multiple
            name="categoryImageUrl"
            accept="image/*"
            onChange={(e) => handleImageUpload(e.target.files)}
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
  )
}

export default AddCategory
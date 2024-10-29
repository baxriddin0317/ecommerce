"use client"
import Loader from "@/components/Loader";
import { ProductT } from "@/lib/types";
import useProductStore from "@/zustand/useProductStore";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
const categoryList = [
  {
    name: "fashion",
  },
  {
    name: "shirt",
  },
  {
    name: "jacket",
  },
  {
    name: "mobile",
  },
  {
    name: "laptop",
  },
  {
    name: "shoes",
  },
  {
    name: "home",
  },
  {
    name: "books",
  },
];

const UpdateProductContent = ({ params }: { params: { id: string } }) => {
  const navigate = useRouter();
  const { product, loading, fetchSingleProduct, updateProduct } = useProductStore();
  const [updatedProduct, setUpdatedProduct] = useState<ProductT>({
    id: params.id || '',
    title: '',
    price: 0,
    productImageUrl: '',
    category: '',
    description: '',
    quantity: 0,
    time: product?.time || '',
    date: product?.date || '',
  });
  useEffect(() => {
    if (params.id) {
      fetchSingleProduct(params.id as string);
    }
  }, [params.id, fetchSingleProduct]);
  
  useEffect(() => {
    if (product) {
      setUpdatedProduct({
        id: product.id,
        title: product.title,
        price: product.price,
        productImageUrl: product.productImageUrl,
        category: product.category,
        description: product.description,
        quantity: product.quantity,
        time: product.time,
        date: product.date,
      });
    }
  }, [product]);

  const handleUpdate = async () => {
    if (params.id) {
      await updateProduct(params.id, updatedProduct);
      toast.success('Product Updated Successfully');
      navigate.push('/admin-dashboard');
    }
  };

  if(loading){
    return <div className="flex items-center justify-center h-screen"><Loader /></div>
  }

  return (
    <div>
      <div className="flex justify-center items-center h-screen">
      
        {/* Login Form  */}
        <div className="login_Form bg-pink-50 px-8 py-6 border border-pink-100 rounded-xl shadow-md">
          {/* Top Heading  */}
          <div className="mb-5">
            <h2 className="text-center text-2xl font-bold text-pink-500 ">
              update product
            </h2>
          </div>
          {/* Input One  */}
          <div className="mb-3">
            <input
              type="text"
              name="title"
              placeholder="Product Title"
              value={updatedProduct.title}
              onChange={(e) => setUpdatedProduct({ ...updatedProduct, title: e.target.value })}
              className="bg-pink-50 border text-pink-300 border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-300"
            />
          </div>
          {/* Input Two  */}
          <div className="mb-3">
            <input
              type="number"
              name="price"
              placeholder="Product Price"
              value={updatedProduct?.price}
              onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: +e.target.value })}
              className="bg-pink-50 border text-pink-300 border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-300"
            />
          </div>
          {/* Input Three  */}
          <div className="mb-3">
            <input
              type="text"
              name="productImageUrl"
              placeholder="Product Image Url"
              value={updatedProduct?.productImageUrl}
              onChange={(e) => setUpdatedProduct({ ...updatedProduct, productImageUrl: e.target.value })}
              className="bg-pink-50 border text-pink-300 border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-300"
            />
          </div>
          {/* Input Four  */}
          <div className="mb-3">
            <select 
              className="w-full px-1 py-2 text-pink-300 bg-pink-50 border border-pink-200 rounded-md outline-none"
              value={updatedProduct.category}
              onChange={(e) => setUpdatedProduct({ ...updatedProduct, category: e.target.value })}
            >
              <option disabled>Select Product Category</option>
              {categoryList.map((value, index) => {
                const { name } = value;
                return (
                  <option
                    className=" first-letter:uppercase"
                    key={index}
                    value={name}
                  >
                    {name}
                  </option>
                );
              })}
            </select>
          </div>
          {/* Input Five  */}
          <div className="mb-3">
            <textarea
              name="description"
              placeholder="Product Description"
              rows={5}
              value={updatedProduct?.description}
              onChange={(e) => setUpdatedProduct({ ...updatedProduct, description: e.target.value })}
              className=" w-full px-2 py-1 text-pink-300 bg-pink-50 border border-pink-200 rounded-md outline-none placeholder-pink-300 "
            ></textarea>
          </div>
          {/* Update Product Button  */}
          <div className="mb-3">
            <button
              type="button"
              onClick={handleUpdate}
              className="bg-pink-500 hover:bg-pink-600 w-full text-white text-center py-2 font-bold rounded-md capitalize"
            >
              update product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProductContent;

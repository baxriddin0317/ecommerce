"use client";
import useProductStore from "@/zustand/useProductStore";
import React, { useEffect, useState } from "react";
import Loader from "../Loader";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const ProductItem = ({ id }: { id: string }) => {
  const { fetchSingleProduct, loading, product } = useProductStore();
  // navigate
  const navigate = useRouter();

  useEffect(() => {
    if (id) {
      fetchSingleProduct(id as string);
    }
  }, [fetchSingleProduct, id]);

  if (loading || !product) {
    return (
      <div className="flex items-center justify-center h-40">
        <Loader />
      </div>
    );
  }

  const handleAddQuantity = () => {
    // my logic
  };

  const handledeleteQuantity = () => {
    // my logic
  };

  const handleSubmit = async () => {
    try {
      toast.success("Add cart product successfully");
      navigate.push("/");
    } catch (error) {
      console.log(error);
      toast.error("Add cart product failed");
    }
  };

  return (
    <div className="flex gap-10 py-5">
      <div className="rounded-xl overflow-hidden max-w-[416px] w-full h-[512px]">
        <img src={product.productImageUrl} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="space-y-9 w-full">
        <h1 className="text-xl">{product?.title}</h1>
        <div className="space-y-5">
          <div className="rounded-xl border border-gray-300 flex items-center gap-8 w-fit py-1.5 px-2">
            <button
              onClick={handledeleteQuantity}
              disabled={product.quantity == 1}
              className="size-9 bg-gray-100 flex items-center justify-center rounded-full"
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
                  d="M5 12h14"
                />
              </svg>
            </button>
            <div className="w-14 border-b">
              <span className="block text-center">{product.quantity}</span>
            </div>
            <button
              onClick={handleAddQuantity}
              className="size-9 bg-indigo-500 text-white flex items-center justify-center rounded-full"
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
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </button>
          </div>
          <div>
            <div className="text-sm text-gray-500">Umumiy</div>
            <div className="font-bold">{product.price} UZS</div>
          </div>
          <button
            onClick={handleSubmit}
            className="flex items-center justify-center gap-2 bg-indigo-500 transition-all ease-in-out hover:bg-indigo-600 rounded-xl max-w-lg w-full text-white p-3"
          >
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 4H18C20.2091 4 22 5.79086 22 8V13C22 15.2091 20.2091 17 18 17H10C7.79086 17 6 15.2091 6 13V4ZM6 4C6 2.89543 5.10457 2 4 2H2"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11 20.5C11 21.3284 10.3284 22 9.5 22C8.67157 22 8 21.3284 8 20.5C8 19.6716 8.67157 19 9.5 19C10.3284 19 11 19.6716 11 20.5Z"
                stroke="white"
                strokeWidth="1.5"
              />
              <path
                d="M20 20.5C20 21.3284 19.3284 22 18.5 22C17.6716 22 17 21.3284 17 20.5C17 19.6716 17.6716 19 18.5 19C19.3284 19 20 19.6716 20 20.5Z"
                stroke="white"
                strokeWidth="1.5"
              />
              <path
                d="M11 12C13.3561 13.3404 14.6476 13.3263 17 12"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Savatga qo'shish</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;

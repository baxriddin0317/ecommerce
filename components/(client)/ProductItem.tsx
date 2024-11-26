"use client";
import useProductStore from "@/zustand/useProductStore";
import React, { useEffect, useState } from "react";
import Loader from "../Loader";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import useCartProductStore from "@/zustand/useCartStore";
import { BsCartDash } from "react-icons/bs";
import { LuPlus } from "react-icons/lu";
import { HiMinus } from "react-icons/hi";
import Image from "next/image";
import { FormattedPrice } from "@/utils";

const ProductItem = ({ id }: { id: string }) => {
  const { fetchSingleProduct, loading, product } = useProductStore();
  const { addToBasket, getItemQuantity, load, calculateTotals } = useCartProductStore();
  const [quantity, setQuantity] = useState(1);

  // navigate
  const navigate = useRouter();
  const quantityInBasket = getItemQuantity(id);

  useEffect(() => {
    if (id) {
      fetchSingleProduct(id as string);
      setQuantity(quantityInBasket || 1);
    }
  }, [fetchSingleProduct, id, quantityInBasket]);

  if (loading || !product) {
    return (
      <div className="flex items-center justify-center h-40">
        <Loader />
      </div>
    );
  }

  const handleAddQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handledeleteQuantity = () => {
    setQuantity(quantity - 1);
  };

  const handleSubmit = async () => {
    addToBasket({...product, quantity: quantity});
    calculateTotals();
    toast.success("Add cart product successfully");
    navigate.push("/");
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-10 md:py-5">
      <div className="relative rounded-xl overflow-hidden w-full h-[512px]">
        <Image fill src={product.productImageUrl[0].url} alt="" className="absolute hover:scale-105 transition-all duration-500 w-full h-full object-cover" />
      </div>
      <div className="space-y-5 md:space-y-9 w-full">
        <h1 className="text-xl">{product?.title}</h1>
        <div className="space-y-5">
          <div className="rounded-xl border border-gray-300 flex items-center gap-8 w-fit py-1.5 px-2">
            <button
              onClick={handledeleteQuantity}
              disabled={quantity == 1}
              className="size-9 bg-gray-100 flex items-center justify-center rounded-full"
            >
              <HiMinus className="text-black" />
            </button>
            <div className="w-14 border-b">
              <span className="block text-center">{quantity}</span>
            </div>
            <button
              onClick={handleAddQuantity}
              className="size-9 bg-indigo-500 text-white flex items-center justify-center rounded-full"
            >
              <LuPlus className="text-white" />
            </button>
          </div>
          <div>
            <div className="text-sm text-gray-500">Umumiy</div>
            <div className="font-bold">{FormattedPrice(product.price)} UZS</div>
          </div>
          <button
            onClick={handleSubmit}
            className="flex items-center justify-center gap-2 bg-indigo-500 transition-all ease-in-out hover:bg-indigo-600 rounded-xl max-w-lg w-full text-white p-3"
          >
            {load ? <Loader /> : (
              <>
                <BsCartDash className="text-white text-xl" />
                <span>Savatga qo&apos;shish</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;

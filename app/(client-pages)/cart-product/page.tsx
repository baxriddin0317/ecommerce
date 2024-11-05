"use client";
import Quantity from "@/components/(client)/cart/Quantity";
import useCartProductStore from "@/zustand/useCartStore";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const CartProduct = () => {
  const { cartProducts, getTotalPrice, getTotalQuantity } = useCartProductStore();

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
        <div className="grid lg:grid-cols-6 gap-6">
          <div className="order-2 bg-white shadow-md border border-gray-300 rounded-xl p-5 flex lg:col-span-4 flex-col gap-10 py-5">
            {cartProducts.map((cart) => (
              <div key={cart.id} className="flex flex-wrap items-center">
                <div className="relative size-44 overflow-hidden rounded-md">
                  <img
                    className="absolute size-full object-cover"
                    src={cart.productImageUrl}
                    alt=""
                  />
                </div>
                <div className="flex flex-col">
                  <h3>{cart.title}</h3>
                  <p>{cart.price}UZS</p>
                </div>
                <Quantity id={cart.id} />
              </div>
            ))}

          </div>
          <div className="max-h-60 bg-white shadow-md border border-gray-300 rounded-xl p-5 order-1 lg:order-3 lg:col-span-2 space-y-2 font-medium">
            <div className="flex items-center justify-between">
              <p className="text-slate-400">Mahsulotlar soni</p>
              <p className="text-gray-800">{getTotalQuantity()} ta</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-slate-400">Umumiy summa</p>
              <p className="text-gray-800 ">{getTotalPrice()} UZS</p>
            </div>
            <button
              // onClick={handleSubmit}
              className="flex items-center mx-auto justify-center gap-2 bg-indigo-500 transition-all ease-in-out hover:bg-indigo-600 rounded-xl max-w-lg w-full text-white p-3 !mt-6"
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
              <span>Adminga Yuborish</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CartProduct;

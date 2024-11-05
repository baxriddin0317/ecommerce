import ProductItem from "@/components/(client)/ProductItem";
import Link from "next/link";
import React from "react";
import { GoArrowLeft } from "react-icons/go";

const ProductSlug = ({ params }: { params: { slug: string } }) => {
  return (
    <main className="bg-body min-h-screen">
      <div className="max-w-7xl mx-auto px-4 lg:px-10 pb-24">
        <Link
          href="/"
          className="flex items-center gap-1 w-fit text-gray-500 text-sm transition-all ease-in-out hover:text-indigo-500 py-4"
        >
          <GoArrowLeft className="text-xl" />
          <span>Orqaga</span>
        </Link>
        <ProductItem id={params.slug} />
      </div>
    </main>
  );
};

export default ProductSlug;

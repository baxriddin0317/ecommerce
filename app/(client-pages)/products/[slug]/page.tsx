import ProductItem from "@/components/(client)/ProductItem";
import React from "react";

const ProductSlug = ({ params }: { params: { slug: string } }) => {
  return (
    <main className="bg-body min-h-screen">
      <div className="max-w-7xl mx-auto px-4 lg:px-10 pb-24">
        <a
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
        </a>
        <ProductItem id={params.slug} />
      </div>
    </main>
  );
};

export default ProductSlug;

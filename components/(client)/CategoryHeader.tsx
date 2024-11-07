import React from "react";

interface props {
  heading: string;
  link: string;
}

const CategoryHeader = ({ heading, link }: props) => {
  return (
    <>
      <div className="flex items-center justify-between py-4">
        <h2 className="text-xl sm:text-2xl font-bold capitalize">{heading}</h2>
        <a
          href={link}
          className="hidden sm:block rounded-full bg-gray-100 text-indigo-600 px-2 py-1 text-xs font-medium"
        >
          Barchasini ko&apos;rish
        </a>
      </div>
    </>
  );
};

export default CategoryHeader;

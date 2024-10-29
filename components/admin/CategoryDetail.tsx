
import useCategoryStore from "@/zustand/useCategoryStore";
import Link from "next/link";
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";
import Loader from "../Loader";
import { useEffect } from "react";

const CategoryDetail = () => {
  const {categories, fetchCategories, loading} = useCategoryStore();
  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return (
    <div>
        <div>
            <div className="py-5 flex justify-between items-center">
                {/* text  */}
                <h1 className=" text-xl text-pink-300 font-bold">All Category</h1>
                {/* Add Product Button  */}
                <Link href={"/admin-dashboard/add-category"}>
                    <button className="px-5 py-2 bg-pink-50 border border-pink-100 rounded-lg">
                        Add Category
                    </button>
                </Link>
            </div>
            {/* Loading  */}
            <div className="flex justify-center relative top-20">
                {loading && <Loader />}
            </div>
            {/* table  */}
            <div className="w-full overflow-x-auto">
            <table className="w-full text-left border border-collapse sm:border-separate border-pink-100 text-pink-400" >
                <tbody>
                    <tr>
                        <th scope="col" className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold fontPara">S.No.</th>
                        <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">Category Name</th>
                        <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">Category Image</th>
                        <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">Update</th>
                        <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">Delete</th>
                    </tr>
                    {categories.map((item,idx) => (
                        <tr key={idx} className="text-pink-300">
                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 ">
                                {idx + 1}
                            </td>
                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                                {item.name}
                            </td>
                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                                <div className="flex justify-center py-1">
                                    <img className="w-20 " src={item.categoryImgUrl} alt="" />
                                </div>
                            </td>
                            <td className="h-12 px-6 transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500">
                                <Link href={`#`}><CiEdit className="text-green-500 text-2xl mx-auto cursor-pointer" /></Link>
                            </td>
                            <td className="h-12 px-6 transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500">
                                <button >
                                <MdDeleteForever className="text-red-500 text-2xl mx-auto cursor-pointer" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </div>
    </div>
  );
}

export default CategoryDetail;
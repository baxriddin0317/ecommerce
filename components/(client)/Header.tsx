"use client"
import { userT } from '@/lib/types'
import useCartProductStore from '@/zustand/useCartStore'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { BsFillCartCheckFill } from 'react-icons/bs'
import SearchContent from '../SearchContent'

const Header = () => {
  const { cartProducts } = useCartProductStore();
  const [user, setUser] = useState<userT | null>(null);

  // navigate
  const navigate = useRouter();

  const handleNavigate = () => {
    if(cartProducts.length > 0){
      navigate.push("/cart-product")
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const userString = localStorage.getItem('users');
      if(userString && userString != undefined){
        setUser(JSON.parse(userString));
      }
    }
  }, []);

  return (
    <header className="shadow border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3.5 px-4 lg:px-10">
        <div className="flex items-center gap-5">
          <div className="w-24 h-12 relative shrink-0">
            <Image fill alt='logo' src="/logo.png" className="w-full h-full" />
          </div>
          <SearchContent />
        </div>
        <div className='flex items-center gap-4'>
          <button onClick={handleNavigate} className='relative'>
            <BsFillCartCheckFill className='text-2xl text-indigo-500 hover:text-indigo-600' />
            <span className='absolute -top-2 -right-2 bg-rose-500 size-4 rounded-full text-xs text-white'>{cartProducts.length}</span>
          </button>
          {user && user.role === "admin" && <Link className='bg-indigo-500 transition-all ease-in-out hover:bg-indigo-600 rounded-xl max-w-lg w-full text-white py-2 px-3' href={'/admin-dashboard'}>Dashboard</Link>}
          <button className="bg-indigo-950 text-white rounded-full p-3.5">
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M5.25002 3H8.34002C8.9385 2.99999 9.51231 3.23842 9.93456 3.66254C10.3568 4.08666 10.5927 4.66153 10.59 5.26V8.34C10.59 9.58264 9.58266 10.59 8.34002 10.59H5.25002C4.00738 10.59 3.00002 9.58264 3.00002 8.34V5.26C2.99736 4.66153 3.23324 4.08666 3.65549 3.66254C4.07773 3.23842 4.65155 2.99999 5.25002 3ZM8.34002 9.08C8.75198 9.07461 9.08464 8.74196 9.09002 8.33V5.26C9.09002 4.84579 8.75424 4.51 8.34002 4.51H5.25002C4.83581 4.51 4.50002 4.84579 4.50002 5.26V8.33C4.50541 8.74196 4.83806 9.07461 5.25002 9.08H8.34002Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M15.66 3H18.75C19.3485 2.99999 19.9223 3.23842 20.3446 3.66254C20.7668 4.08666 21.0027 4.66153 21 5.26V8.34C21 9.58264 19.9927 10.59 18.75 10.59H15.66C14.4174 10.59 13.41 9.58264 13.41 8.34V5.25C13.41 4.00736 14.4174 3 15.66 3ZM18.75 9.08C19.162 9.07461 19.4947 8.74196 19.5 8.33V5.26C19.5 4.84579 19.1643 4.51 18.75 4.51H15.66C15.2458 4.51 14.91 4.84579 14.91 5.26V8.33C14.9154 8.74196 15.2481 9.07461 15.66 9.08H18.75Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M5.25002 13.41H8.34002C9.58266 13.41 10.59 14.4174 10.59 15.66V18.75C10.59 19.9926 9.58266 21 8.34002 21H5.25002C4.65155 21 4.07773 20.7616 3.65549 20.3375C3.23324 19.9133 2.99736 19.3385 3.00002 18.74V15.66C3.00002 14.4174 4.00738 13.41 5.25002 13.41ZM8.34002 19.49C8.75424 19.49 9.09002 19.1542 9.09002 18.74V15.66C9.08464 15.248 8.75198 14.9154 8.34002 14.91H5.25002C4.83806 14.9154 4.50541 15.248 4.50002 15.66V18.74C4.50002 19.1542 4.83581 19.49 5.25002 19.49H8.34002Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M15.66 13.41H18.75C19.9927 13.41 21 14.4174 21 15.66V18.74C21.0027 19.3385 20.7668 19.9133 20.3446 20.3375C19.9223 20.7616 19.3485 21 18.75 21H15.66C15.0615 21 14.4877 20.7616 14.0655 20.3375C13.6432 19.9133 13.4074 19.3385 13.41 18.74V15.66C13.41 14.4174 14.4174 13.41 15.66 13.41ZM18.75 19.49C19.1642 19.49 19.5 19.1542 19.5 18.74V15.66C19.4946 15.248 19.162 14.9154 18.75 14.91H15.66C15.2481 14.9154 14.9154 15.248 14.91 15.66V18.74C14.91 19.1542 15.2458 19.49 15.66 19.49H18.75Z" fill="currentColor" /></svg>
          </button>
        </div>
      </div>
    </header>

  )
}

export default Header
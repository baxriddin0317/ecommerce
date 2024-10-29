import Image from 'next/image'
import React from 'react'

interface props {
  title: string;
  imgUrl: string;
  price: number;
  href: string;
}

const Card = ({title, imgUrl, price, href}: props) => {
  return (
    <>
      <a href={href} className="rounded-lg w-fit shadow">
        <div className="w-52 h-48 relative rounded-xl overflow-hidden p-0.5">
          <Image className='absolute size-full object-cover' src={imgUrl ? imgUrl : `/sample.webp`} fill alt='' />
        </div>
        <div className="space-y-2 py-2 px-1.5">
          <span className="text-xs">
            {title}
          </span>
          <div className="flex items-end justify-between">
            <span className="text-sm font-medium">{price} UZS</span>
            <button type="button">
              <svg width={36} height={36} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width={36} height={36} rx={8} fill="white" />
                <rect width={36} height={36} rx={8} fill="url(#paint0_linear_4822_25631)" fillOpacity="0.1" />
                <path fillRule="evenodd" clipRule="evenodd" d="M18 8.14551C16.1015 8.14551 14.5625 9.68453 14.5625 11.583V12.5086C12.8279 12.6296 11.4005 13.9625 11.1818 15.7115L10.2652 23.0449C9.99163 25.2333 11.698 27.1663 13.9035 27.1663H22.0965C24.302 27.1663 26.0084 25.2333 25.7348 23.0449L24.8182 15.7115C24.5995 13.9625 23.1721 12.6296 21.4375 12.5086V11.583C21.4375 9.68453 19.8985 8.14551 18 8.14551ZM20.0625 12.4997V11.583C20.0625 10.4439 19.1391 9.52051 18 9.52051C16.8609 9.52051 15.9375 10.4439 15.9375 11.583V12.4997H20.0625ZM14.5625 19.833C14.5625 19.4533 14.8703 19.1455 15.25 19.1455H17.3125V17.083C17.3125 16.7033 17.6203 16.3955 18 16.3955C18.3797 16.3955 18.6875 16.7033 18.6875 17.083V19.1455H20.75C21.1297 19.1455 21.4375 19.4533 21.4375 19.833C21.4375 20.2127 21.1297 20.5205 20.75 20.5205H18.6875V22.583C18.6875 22.9627 18.3797 23.2705 18 23.2705C17.6203 23.2705 17.3125 22.9627 17.3125 22.583V20.5205H15.25C14.8703 20.5205 14.5625 20.2127 14.5625 19.833Z" fill="white" />
                <path fillRule="evenodd" clipRule="evenodd" d="M18 8.14551C16.1015 8.14551 14.5625 9.68453 14.5625 11.583V12.5086C12.8279 12.6296 11.4005 13.9625 11.1818 15.7115L10.2652 23.0449C9.99163 25.2333 11.698 27.1663 13.9035 27.1663H22.0965C24.302 27.1663 26.0084 25.2333 25.7348 23.0449L24.8182 15.7115C24.5995 13.9625 23.1721 12.6296 21.4375 12.5086V11.583C21.4375 9.68453 19.8985 8.14551 18 8.14551ZM20.0625 12.4997V11.583C20.0625 10.4439 19.1391 9.52051 18 9.52051C16.8609 9.52051 15.9375 10.4439 15.9375 11.583V12.4997H20.0625ZM14.5625 19.833C14.5625 19.4533 14.8703 19.1455 15.25 19.1455H17.3125V17.083C17.3125 16.7033 17.6203 16.3955 18 16.3955C18.3797 16.3955 18.6875 16.7033 18.6875 17.083V19.1455H20.75C21.1297 19.1455 21.4375 19.4533 21.4375 19.833C21.4375 20.2127 21.1297 20.5205 20.75 20.5205H18.6875V22.583C18.6875 22.9627 18.3797 23.2705 18 23.2705C17.6203 23.2705 17.3125 22.9627 17.3125 22.583V20.5205H15.25C14.8703 20.5205 14.5625 20.2127 14.5625 19.833Z" fill="url(#paint1_linear_4822_25631)" />
                <defs>
                  <linearGradient id="paint0_linear_4822_25631" x1="17.561" y1="-3.07317" x2="18.439" y2="42.1463" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#7D79FF" />
                    <stop offset={1} stopColor="#5D59F0" />
                  </linearGradient>
                  <linearGradient id="paint1_linear_4822_25631" x1="17.8106" y1="6.52178" x2="18.3788" y2="30.4093" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#7D79FF" />
                    <stop offset={1} stopColor="#5D59F0" />
                  </linearGradient>
                </defs>
              </svg>
            </button>
          </div>
        </div>
      </a>
    </>
  )
}

export default Card
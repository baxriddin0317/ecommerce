import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 lg:px-10 py-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2 text-sm text-gray-500">
            <a href="/" className="w-fit transition-all ease-in-out hover:text-indigo-500">
              Rahbarlar kreslosi
            </a>
            <a href="/" className="w-fit transition-all ease-in-out hover:text-indigo-500">
              Ofis kreslosi
            </a>
            <a href="/" className="w-fit transition-all ease-in-out hover:text-indigo-500">
              Tashrif buyuruvchilar uchun kreslolar
            </a>
            <a href="/" className="w-fit transition-all ease-in-out hover:text-indigo-500">
              Bar stullari
            </a>
          </div>
          <div className="text-sm text-gray-500 space-y-5">
            <div className="flex items-center gap-2">
              <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M10.833 1.875C10.4878 1.875 10.208 2.15482 10.208 2.5C10.208 2.84518 10.4878 3.125 10.833 3.125C11.6264 3.125 12.412 3.28127 13.1451 3.58489C13.8781 3.88852 14.5441 4.33354 15.1051 4.89456C15.6661 5.45558 16.1112 6.12161 16.4148 6.85462C16.7184 7.58763 16.8747 8.37326 16.8747 9.16667C16.8747 9.51184 17.1545 9.79167 17.4997 9.79167C17.8449 9.79167 18.1247 9.51184 18.1247 9.16667C18.1247 8.20911 17.9361 7.26093 17.5696 6.37627C17.2032 5.4916 16.6661 4.68777 15.989 4.01068C15.3119 3.33359 14.5081 2.79649 13.6234 2.43005C12.7387 2.0636 11.7906 1.875 10.833 1.875ZM17.5 15.8333V14.4617C17.5 13.7802 17.0851 13.1674 16.4523 12.9143L14.7572 12.2362C13.9524 11.9143 13.0352 12.263 12.6475 13.0383L12.5 13.3333C12.5 13.3333 10.4167 12.9167 8.75 11.25C7.08333 9.58333 6.66667 7.5 6.66667 7.5L6.96168 7.35249C7.73698 6.96484 8.08571 6.04761 7.76379 5.2428L7.08574 3.54768C6.83263 2.91492 6.21979 2.5 5.53828 2.5H4.16667C3.24619 2.5 2.5 3.24619 2.5 4.16667C2.5 11.5305 8.46954 17.5 15.8333 17.5C16.7538 17.5 17.5 16.7538 17.5 15.8333ZM10.208 5.83398C10.208 5.48881 10.4878 5.20898 10.833 5.20898C11.3528 5.20898 11.8675 5.31137 12.3478 5.51029C12.828 5.70922 13.2644 6.00079 13.632 6.36835C13.9995 6.73592 14.2911 7.17228 14.49 7.65253C14.689 8.13278 14.7913 8.6475 14.7913 9.16732C14.7913 9.5125 14.5115 9.79232 14.1663 9.79232C13.8212 9.79232 13.5413 9.5125 13.5413 9.16732C13.5413 8.81165 13.4713 8.45947 13.3352 8.13088C13.1991 7.80229 12.9996 7.50373 12.7481 7.25224C12.4966 7.00074 12.198 6.80125 11.8694 6.66514C11.5409 6.52904 11.1887 6.45898 10.833 6.45898C10.4878 6.45898 10.208 6.17916 10.208 5.83398Z" fill="#8393A6" /></svg>
              <a href="tel:+998990039000">+99899 003 90 00</a>
            </div>
            <div className="flex items-center gap-2">
              <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M10 18.3332C12.8125 18.3332 17.5 13.1649 17.5 9.07391C17.5 4.98291 14.1421 1.6665 10 1.6665C5.85786 1.6665 2.5 4.98291 2.5 9.07391C2.5 13.1649 7.1875 18.3332 10 18.3332ZM10 11.6665C11.3807 11.6665 12.5 10.5472 12.5 9.1665C12.5 7.78579 11.3807 6.6665 10 6.6665C8.61929 6.6665 7.5 7.78579 7.5 9.1665C7.5 10.5472 8.61929 11.6665 10 11.6665Z" fill="#8393A6" /></svg>
              <span>
                Uzbekistan, Andizhan, Bobur Avenue, 29
              </span>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-end gap-4">
            <a href="/" className="hover:scale-125 transition-all ease-in-out">
              <Image src="/instagram.svg" alt='' width={24} height={24}  />
            </a>
            <a href="/" className="hover:scale-125 transition-all ease-in-out">
              <Image src="/telegram.svg"  alt='' width={24} height={24} />
            </a>
            <a href="/" className="hover:scale-125 transition-all ease-in-out">
              <Image src="/facebook.svg"  alt='' width={24} height={24} />
            </a>
          </div>
          <p className="text-gray-500 text-center">
            © Kursiy.uz — Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
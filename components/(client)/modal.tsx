import React, { useState } from 'react';

const SubmitModal = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneNumberChange = (e) => {
    let value = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    if (value.startsWith('998')) {
      value = value.slice(3); // Remove "998" from input if present
    }
    value = value.slice(0, 9); // Limit to 9 digits

    // Format the value as +998 (XX) XXX-XX-XX
    const formattedValue = value
      ? `+998 (${value.slice(0, 2)}) ${value.slice(2, 5)}${value.length > 5 ? '-' : ''}${value.slice(5, 7)}${value.length > 7 ? '-' : ''}${value.slice(7)}`
      : '';

    setPhoneNumber(formattedValue);
  };

  return (
    <div className="fixed bg-black/80 z-10 w-full h-full inset-0 flex items-center justify-center">
      <div className="max-w-sm w-full bg-white rounded-md space-y-3 p-5">
        <div>
          <label htmlFor="first-name" className="block text-sm font-medium text-gray-900">
            Ism
          </label>
          <div className="mt-1">
            <input
              id="first-name"
              name="first-name"
              type="text"
              autoComplete="given-name"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:ring-inset focus:ring-indigo-600 sm:text-sm"
            />
          </div>
        </div>
        <div>
          <label htmlFor="last-name" className="block text-sm font-medium text-gray-900">
            Sharif
          </label>
          <div className="mt-1">
            <input
              id="last-name"
              name="last-name"
              type="text"
              autoComplete="family-name"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:ring-inset focus:ring-indigo-600 sm:text-sm"
            />
          </div>
        </div>
        <div>
          <label htmlFor="phone-number" className="block text-sm font-medium text-gray-900">
            Telefon
          </label>
          <div className="mt-1">
            <input
              id="phone-number"
              name="phone-number"
              type="text"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:ring-inset focus:ring-indigo-600 sm:text-sm"
              placeholder="+998 (__) ___-__-__"
            />
          </div>
        </div>

        <div className="pt-3">
          <button
            type="button"
            className="bg-indigo-500 transition-all ease-in-out hover:bg-indigo-600 rounded-xl max-w-lg w-full text-white p-2"
          >
            Buyurtmani Yuborish
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubmitModal;

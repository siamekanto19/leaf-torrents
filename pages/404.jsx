import Link from 'next/link'
import React from 'react'

export default function Error() {
  return (
    <div className="min-h-screen w-screen grid place-items-center">
      <div className="text-center">
        <img
          className="w-10/12 md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto"
          src="img/404.svg"
          alt=""
        />
        <p className="text-gray-800 text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-lemon-bold mt-10">
          Oops! Nothing Found Here.
        </p>
        <Link href="/">
          <button className="mt-10 text-white text-lemon-md h-14 px-5 rounded shadow-sm bg-green-600 hover:bg-green-700">
            Back To Home
          </button>
        </Link>
      </div>
    </div>
  )
}

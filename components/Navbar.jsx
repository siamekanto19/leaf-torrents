import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navbar() {
  const router = useRouter()
  const isHome = router.pathname === '/'

  const [navExpanded, setNavExpanded] = useState(false)

  return (
    <div className="w-screen fixed top-0 left-0 h-16 z-20">
      {/* Desktop Navbar */}
      <nav
        className={`fixed top-0 left-0 w-screen bg-gray-800 h-16 hidden lg:block ${
          isHome ? 'bg-opacity-70' : ''
        } shadow border-gray-800 text-white text-lemon-bold tracking-wider z-20`}
      >
        <div className="w-full h-full">
          <ul className="w-11/12 md:w-4/5 lg:w-3/4 xl:w-2/3 2xl:w-1/2 h-full mx-auto flex items-center justify-around">
            <Link href="/">
              <li className="cursor-pointer transform hover:scale-125 transition-transform duration-100">
                <img src="icons/leaf.svg" className="h-9" alt="" />
              </li>
            </Link>
            <Link href="/">
              <li className="cursor-pointer transform hover:scale-125 transition-transform duration-100">
                Home
              </li>
            </Link>
            <Link href="/about">
              <li className="cursor-pointer transform hover:scale-125 transition-transform duration-100">
                About Us
              </li>
            </Link>
            <Link href="/contact">
              <li className="cursor-pointer transform hover:scale-125 transition-transform duration-100">
                Contact Us
              </li>
            </Link>
            <Link href="/help">
              <li className="cursor-pointer transform hover:scale-125 transition-transform duration-100">
                Help
              </li>
            </Link>
          </ul>
        </div>
      </nav>
      {/* Mobile Navbar */}
      <nav className="w-screen h-16 fixed top-0 left-0 z-30 lg:hidden bg-gray-800">
        <div className="w-full h-full flex justify-center items-center relative">
          <Link href="/">
            <img
              onClick={() => setNavExpanded(false)}
              src="icons/leaf.svg"
              className="h-9 cursor-pointer"
              alt=""
            />
          </Link>
          <div
            className={`absolute left-4 cursor-pointer transform transition-transform duration-200 ${
              navExpanded ? 'rotate-90' : ''
            }`}
            onClick={() => {
              setNavExpanded(!navExpanded)
            }}
          >
            <span className="h-1 w-8 block bg-white rounded"></span>
            <span className="h-1 w-8 block bg-white rounded mt-2"></span>
          </div>
        </div>
      </nav>
      {navExpanded && (
        <div className="w-screen fixed top-0 left-0 z-30 mt-16 lg:hidden bg-gray-800 transition-all duration-200">
          <ul className="flex flex-col py-10 text-lemon-bold text-white text-lg space-y-10 items-center">
            <Link href="/">
              <li
                onClick={() => setNavExpanded(false)}
                className="cursor-pointer transform hover:scale-125 transition-transform duration-100"
              >
                Home
              </li>
            </Link>
            <Link href="/about">
              <li
                onClick={() => setNavExpanded(false)}
                className="cursor-pointer transform hover:scale-125 transition-transform duration-100"
              >
                About Us
              </li>
            </Link>
            <Link href="/contact">
              <li
                onClick={() => setNavExpanded(false)}
                className="cursor-pointer transform hover:scale-125 transition-transform duration-100"
              >
                Contact Us
              </li>
            </Link>
            <Link href="/help">
              <li
                onClick={() => setNavExpanded(false)}
                className="cursor-pointer transform hover:scale-125 transition-transform duration-100"
              >
                Help
              </li>
            </Link>
          </ul>
        </div>
      )}
    </div>
  )
}

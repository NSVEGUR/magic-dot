import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' // Import the FontAwesomeIcon component
import {
  faShoppingBag,
  faUser,
  faSearch,
} from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons' // import the icons you need
// import the icons you need

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full  overflow-hidden bg-black px-2 py-2.5 sm:px-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <a href="#" className="flex items-center">
          <Image
            src="/logo-trans.png"
            className="mr-3 h-6 sm:h-10"
            alt="Magic Dot Logo"
            width={50}
            height={50}
          />
          <span className="hidden self-center whitespace-nowrap text-xl font-semibold dark:text-white md:block">
            Magicdot
          </span>
        </a>
        <div className="flex md:order-2">
          <div className="flex cursor-pointer gap-5 text-xl text-gray-500">
            <div className="hover-trigger relative flex justify-center  hover:text-white">
              <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
              <span className="hover-target absolute -bottom-6 hidden text-sm text-gray-300 ">
                Search
              </span>
            </div>
            <div className="hover-trigger relative flex justify-center  hover:text-white">
              <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
              <span className="hover-target absolute -bottom-6 hidden text-sm text-gray-300 ">
                Wishlist
              </span>
            </div>
            <div className="hover-trigger relative flex justify-center  hover:text-white">
              <FontAwesomeIcon icon={faShoppingBag}></FontAwesomeIcon>
              <span className="hover-target absolute -bottom-6 hidden text-sm text-gray-300 ">
                Bag
              </span>
            </div>
            <div className="hover-trigger relative flex justify-center  hover:text-white">
              <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
              <span className="hover-target absolute -bottom-6 hidden text-sm text-gray-300 ">
                Profile
              </span>
            </div>
          </div>
          <button
            data-collapse-toggle="mobile-menu-3"
            type="button"
            className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none md:hidden"
            aria-controls="mobile-menu-3"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path>
            </svg>
            <svg
              className="hidden h-6 w-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
            </svg>
          </button>
        </div>
        <div
          className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
          id="mobile-menu-3"
        >
          <ul className="mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
            <li>
              <a
                href="#"
                className="block rounded py-2 pr-4 pl-3 text-white dark:text-white md:bg-transparent md:p-0"
                aria-current="page"
              >
                Featured
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:dark:hover:bg-transparent md:dark:hover:text-white"
              >
                Men
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:dark:hover:bg-transparent md:dark:hover:text-white"
              >
                Women
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:dark:hover:bg-transparent md:dark:hover:text-white"
              >
                Kids
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Navbar

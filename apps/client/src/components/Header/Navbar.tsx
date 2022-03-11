import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

var lastScrollTop = 0

const Navbar = () => {
  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      var st = window.screenY || document.documentElement.scrollTop
      if (st > lastScrollTop && window.scrollY >= 100) {
        document.querySelector('.navbar-top').classList.add('-translate-y-full')
      } else {
        document
          .querySelector('.navbar-top')
          .classList.remove('-translate-y-full')
      }
      lastScrollTop = st <= 0 ? 0 : st
    })
    window.addEventListener('mousemove', e => {
      if (e.y <= 80) {
        document
          .querySelector('.navbar-top')
          .classList.remove('-translate-y-full')
      }
    })
  }, [])
  return (
    <nav onClick={handleNavbar}>
      <nav className="navbar-top fixed top-0 z-[999] w-full overflow-x-hidden bg-black text-white transition duration-500">
        <div className="flex justify-between px-2 py-2 md:px-8">
          <div className="logo">
            <a href="#" className="flex items-center">
              <Image
                src="/logo-trans.png"
                className="mr-3 h-6 sm:h-10"
                alt="Magic Dot Logo"
                width={50}
                height={50}
              />
              <span className="self-center whitespace-nowrap text-xl font-semibold">
                Magicdot
              </span>
            </a>
          </div>
          <div className="primary-nav hidden items-center space-x-4 md:flex">
            <Link href="/" passHref>
              <span className="nav-link active-link cursor-pointer">Home</span>
            </Link>
            <Link href="/featured" passHref>
              <span className="nav-link cursor-pointer">Featured</span>
            </Link>
            <Link href="/men" passHref>
              <span className="nav-link cursor-pointer">Men</span>
            </Link>
            <Link href="/women" passHref>
              <span className="nav-link cursor-pointer">Women</span>
            </Link>
            <Link href="/kids" passHref>
              <span className="nav-link cursor-pointer">Kids</span>
            </Link>
          </div>
          <div className="secondary-nav hidden items-center space-x-2 md:flex">
            <button className="secondary-nav-link search-icon">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button>
            <Link href="/wishlist" passHref>
              <span className="nav-link secondary-nav-link">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </span>
            </Link>
            <Link href="/shoppingbag" passHref>
              <span className="nav-link secondary-nav-link">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  ></path>
                </svg>
              </span>
            </Link>
            <button className="secondary-nav-link profile-icon">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </button>
          </div>
          <div className="mobile-menu-buttons flex items-center space-x-2 md:hidden">
            <button className="search-icon-mobile text-gray-400 transition duration-300 hover:text-white">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button>
            <button className="menu-icon-mobile">
              <svg
                className="h-7 w-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="search-bar relative hidden w-full px-2 pb-2 text-gray-400 focus-within:text-gray-400">
          <span className="absolute top-1 left-2 flex items-center pl-2">
            <button
              type="submit"
              className="focus:shadow-outline p-1 focus:outline-none"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button>
          </span>
          <input
            type="text"
            name="q"
            className="w-full rounded-md bg-black py-2 pl-10 text-sm text-white focus:bg-white focus:text-gray-900 focus:outline-none"
            placeholder="Search by products..."
            autoComplete="off"
          />
          <span className="absolute top-1 right-3 flex items-center pl-2">
            <button
              type="submit"
              className="focus:shadow-outline search-close p-1 focus:outline-none"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </span>
        </div>
        <div className="mobile-menu hidden space-y-2 px-4 pb-4 transition duration-300 md:hidden">
          <Link href="/" passHref>
            <span className="nav-link active-link block cursor-pointer">
              Home
            </span>
          </Link>
          <Link href="/featured" passHref>
            <span className="nav-link block cursor-pointer">Featured</span>
          </Link>
          <Link href="/men" passHref>
            <span className="nav-link block cursor-pointer">Men</span>
          </Link>
          <Link href="/women" passHref>
            <span className="nav-link block cursor-pointer">Women</span>
          </Link>
          <Link href="/kids" passHref>
            <span className="nav-link block cursor-pointer">Kids</span>
          </Link>
        </div>
      </nav>
      <nav className="navbar-bottom fixed -bottom-1 z-[999] w-full overflow-x-hidden bg-black text-white">
        <div className="flex justify-evenly px-2 py-4 md:hidden">
          <Link href="/" passHref>
            <span className="nav-link mobile-secondary-nav-link active-link">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                ></path>
              </svg>
            </span>
          </Link>
          <Link href="/wishlist" passHref>
            <span className="nav-link mobile-secondary-nav-link">
              <svg
                className="h-7 w-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </span>
          </Link>
          <Link href="/shoppingbag" passHref>
            <span className="nav-link mobile-secondary-nav-link">
              <svg
                className="h-7 w-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                ></path>
              </svg>
            </span>
          </Link>
          <a href="#" className="mobile-secondary-nav-link">
            <svg
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </a>
        </div>
      </nav>
    </nav>
  )
}

const handleNavbar = (e: React.MouseEvent) => {
  const element = e.target as HTMLElement

  //Nav Links
  if (element.closest('span')?.classList.contains('nav-link')) {
    document
      .querySelectorAll('.nav-link')
      .forEach(link => link.classList.remove('active-link'))
    element.closest('span').classList.add('active-link')
  }

  //Nav Buttons
  //Mobile-menu
  if (element.closest('button')?.classList.contains('menu-icon-mobile')) {
    document.querySelector('.mobile-menu').classList.toggle('hidden')
  }
  //Search-menu
  if (
    element.closest('button')?.classList.contains('search-icon') ||
    element.closest('button')?.classList.contains('search-close') ||
    element.closest('button')?.classList.contains('search-icon-mobile')
  ) {
    document.querySelector('.search-bar').classList.toggle('hidden')
    document.querySelector('.search-icon').classList.toggle('active-link')
  }
  //Auth menu
  if (element.closest('button')?.classList.contains('profile-icon')) {
    document.querySelector('.login-form').classList.remove('hidden')
    document
      .querySelector('.profile-icon')
      .classList.add('active-secondary-nav-link')
  }
}

export default Navbar

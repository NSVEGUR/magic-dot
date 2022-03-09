import React from 'react'
import Help from './Help'

const Footer = () => {
  return (
    <>
      <Help></Help>
      <section className="mb-10 flex w-full flex-wrap-reverse items-center justify-around gap-5 bg-black py-4 px-6 text-gray-400 md:mb-0 md:px-12">
        <div>
          <a href="#" className="text-xs hover:text-white md:text-sm">
            &#169; 2022 Magicdot, Inc. All rights reserved.
          </a>
        </div>
        <div className="flex space-x-3 text-xs">
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white">
            Terms & Conditions
          </a>
          <a href="#" className="hover:text-white">
            Developers
          </a>
        </div>
      </section>
    </>
  )
}

export default Footer

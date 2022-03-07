import React from 'react'

const Footer = () => {
  return (
    <section className="flex w-full flex-wrap-reverse items-center justify-around gap-5 bg-black py-4 px-6 text-gray-400 md:px-12">
      <div>
        <a href="#" className="hover:text-white">
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
  )
}

export default Footer

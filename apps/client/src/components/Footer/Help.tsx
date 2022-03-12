import React from 'react'

const Help = () => {
  return (
    <section className="flex flex-wrap justify-around gap-6 bg-black py-8 px-4 text-sm text-gray-400 md:px-12">
      <div className="flex flex-col gap-3 text-white">
        <h1 className="mb-2 text-xl font-bold capitalize">Menu</h1>
        <a href="#" className="transition duration-300 hover:text-gray-400">
          All
        </a>
        <a href="#" className="transition duration-300 hover:text-gray-400">
          Featured
        </a>
        <a href="#" className="transition duration-300 hover:text-gray-400">
          Men
        </a>
        <a href="#" className="transition duration-300 hover:text-gray-400">
          Women
        </a>
        <a href="#" className="transition duration-300 hover:text-gray-400">
          Kids
        </a>
      </div>
      <div className="flex flex-col gap-3 text-white">
        <h1 className="mb-2 text-xl font-bold capitalize ">Help</h1>
        <a href="#" className="transition duration-300 hover:text-gray-400">
          Contact
        </a>
        <a href="#" className="transition duration-300 hover:text-gray-400">
          My Account
        </a>
        <a href="#" className="transition duration-300 hover:text-gray-400">
          Terms & Conditions
        </a>
        <a href="#" className="transition duration-300 hover:text-gray-400">
          Privacy Policy
        </a>
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="mb-4 text-xl font-bold capitalize text-white">
          Newsletter
        </h1>
        <h3>Subscribe to get offer updates*</h3>
        <input
          type="email"
          name="q"
          className="mb-5 rounded-md bg-gray-800 py-2 pl-3 text-sm text-gray-600 placeholder-gray-400 focus:bg-white focus:text-gray-900 focus:outline-none"
          placeholder="Enter your email"
        />
        <button className="w-fit self-center rounded bg-white px-2 py-1 text-gray-800 transition duration-300 hover:bg-gray-800 hover:text-gray-400">
          Subscribe
        </button>
      </div>
    </section>
  )
}

export default Help

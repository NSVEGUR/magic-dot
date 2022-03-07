import React from 'react'

const Help = () => {
  return (
    <section className="flex flex-wrap justify-around gap-6 bg-black py-4 px-4 text-sm text-gray-400 md:px-12">
      <div className="flex flex-col gap-1 text-white">
        <h1 className="mb-2 text-lg capitalize">Menu</h1>
        <a
          href="#"
          className="transition duration-300 hover:ml-1 hover:text-gray-400 hover:underline"
        >
          All
        </a>
        <a
          href="#"
          className="transition duration-300 hover:ml-1 hover:text-gray-400 hover:underline"
        >
          Featured
        </a>
        <a
          href="#"
          className="transition duration-300 hover:ml-1 hover:text-gray-400 hover:underline"
        >
          Men
        </a>
        <a
          href="#"
          className="transition duration-300 hover:ml-1 hover:text-gray-400 hover:underline"
        >
          Women
        </a>
        <a
          href="#"
          className="transition duration-300 hover:ml-1 hover:text-gray-400 hover:underline"
        >
          Kids
        </a>
      </div>
      <div className="flex flex-col gap-1 text-white">
        <h1 className="mb-2 text-lg capitalize">Help</h1>
        <a
          href="#"
          className="transition duration-300 hover:ml-1 hover:text-gray-400 hover:underline"
        >
          Contact
        </a>
        <a
          href="#"
          className="transition duration-300 hover:ml-1 hover:text-gray-400 hover:underline"
        >
          My Account
        </a>
        <a
          href="#"
          className="transition duration-300 hover:ml-1 hover:text-gray-400 hover:underline"
        >
          Terms & Conditions
        </a>
        <a
          href="#"
          className="transition duration-300 hover:ml-1 hover:text-gray-400 hover:underline"
        >
          Privacy Policy
        </a>
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="mb-4 text-lg capitalize text-white">Newsletter</h1>
        <h3>Subscribe to get offer updates*</h3>
        <input
          type="email"
          name="q"
          className="mb-5 rounded-md bg-gray-400 py-2 pl-3 text-sm text-gray-600 placeholder-gray-600 focus:bg-white focus:text-gray-900 focus:outline-none"
          placeholder="Enter your email"
        />
        <button className="w-fit self-center rounded bg-white px-2 py-1 text-gray-800 hover:bg-gray-100">
          Subscribe
        </button>
      </div>
    </section>
  )
}

export default Help

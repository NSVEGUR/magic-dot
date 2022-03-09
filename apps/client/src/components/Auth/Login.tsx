/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image'

const handleSubmit = (e: React.SyntheticEvent) => {
  e.preventDefault()
}

const Login = () => {
  return (
    <div className="login-form hidden">
      <section
        className="fixed inset-0 z-[999] flex h-full w-full items-center justify-center bg-black bg-opacity-10 shadow-lg backdrop-blur-sm"
        onClick={() => {
          document.querySelector('.login-form').classList.add('hidden')
        }}
      >
        <form
          className="relative flex w-11/12 flex-col items-center gap-4 bg-black py-5 px-5 md:w-2/3 md:px-20 md:py-20 xl:w-1/3"
          onSubmit={handleSubmit}
          onClick={e => {
            e.stopPropagation()
          }}
        >
          <button
            className="absolute top-4 right-4 text-white"
            onClick={() => {
              document.querySelector('.login-form').classList.add('hidden')
            }}
          >
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <Image
            src="/logo-trans.png"
            className="mr-3 h-6 sm:h-10"
            alt="Magic Dot Logo"
            width={75}
            height={75}
          />
          <input
            type="email"
            name="email"
            className="w-full bg-black py-2 pl-3 text-gray-300 placeholder-gray-600 outline outline-gray-700 ring-gray-700 focus:ring-1"
            placeholder="Email"
          />
          <input
            type="password"
            name="password"
            className="w-full bg-black py-2 pl-3 text-gray-300 placeholder-gray-600 outline outline-gray-700 ring-gray-700 focus:ring-1"
            placeholder="Password"
            autoComplete="on"
          />
          <input
            type="submit"
            name="submit"
            className="w-full bg-white py-2 text-black"
            value="Login"
          />
          <button className="row flex w-full items-center justify-center gap-3 bg-gray-800 py-2 px-4 text-gray-300">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-google"
                viewBox="0 0 16 16"
              >
                <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
              </svg>
            </span>
            Continue with Google
          </button>
          <h3 className="text-gray-400">
            Don't have an account!?{' '}
            <button
              className="text-white"
              onClick={() => {
                document.querySelector('.login-form').classList.add('hidden')
                document
                  .querySelector('.signup-form')
                  .classList.remove('hidden')
              }}
            >
              {' '}
              Signup
            </button>
          </h3>
        </form>
      </section>
    </div>
  )
}

export default Login

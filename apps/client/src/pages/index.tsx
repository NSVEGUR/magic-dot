/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import Head from 'next/head'
import Favicon from 'ui/src/Favicon'
import PaginatedSlider from '../components/Slider/PaginatedSlider'
import InfiniteSlider from '../components/Slider/InfiniteSlider'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Magicdot | Online Shopping store</title>
        <Favicon></Favicon>
      </Head>
      <PaginatedSlider></PaginatedSlider>
      <div className="flex flex-1 flex-col items-center gap-6 p-4 text-black md:flex-row md:p-8">
        <h1 className="text-left text-3xl font-black md:text-right md:text-5xl">
          Latest Offers on Dusshera Sale.
        </h1>
        <div>
          <p className="text-sm md:text-base">
            Excepteur ex sunt Lorem quis tempor sunt consectetur duis in elit
            sit. Consequat duis ut ut elit sit labore aliqua esse in laborum
            elit. Eu non quis incididunt dolor elit duis. Tempor ad magna
            nostrud ipsum. Cillum labore nostrud id enim labore in ad eiusmod.
            Minim exercitation magna cupidatat dolore magna ea quis ullamco sint
            cupidatat. Esse anim reprehenderit pariatur nostrud consequat elit
            fugiat labore mollit mollit quis nisi dolor amet.
          </p>
          <a
            href="#"
            className="mt-2 flex flex-row items-center gap-1 text-lg font-bold hover:underline"
          >
            Know more
            <span>
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
          </a>
        </div>
      </div>
      <div className="flex w-full flex-row flex-wrap items-center justify-center gap-4 p-8 px-6 py-4 font-extralight md:py-8">
        <a
          href="#"
          className="border-[1px] border-gray-300 p-1 transition duration-200 hover:border-black md:p-2"
        >
          T-Shirts
        </a>
        <a
          href="#"
          className="border-[1px] border-gray-300 p-1 transition duration-200 hover:border-black md:p-2"
        >
          Masks
        </a>
        <a
          href="#"
          className="border-[1px] border-gray-300 p-1 transition duration-200 hover:border-black md:p-2"
        >
          Magicdot Originals
        </a>
        <a
          href="#"
          className="border-[1px] border-gray-300 p-1 transition duration-200 hover:border-black md:p-2"
        >
          Kids Wear
        </a>
        <a
          href="#"
          className="border-[1px] border-gray-300 p-1 transition duration-200 hover:border-black md:p-2"
        >
          Chinos
        </a>
      </div>
      <h1 className="p-4 text-center text-3xl font-black text-gray-400 md:text-5xl">
        What are you <span className="text-black">Looking</span> for!?
      </h1>
      <div className="flex flex-col gap-4 px-8 pt-8 md:flex-row md:px-20">
        <div className="overlay relative cursor-pointer overflow-hidden shadow-md">
          <img
            src="/assets/men.jpeg"
            className="transition duration-300"
            alt="men"
          />
          <div className="absolute inset-0 z-[1] h-full w-full bg-black opacity-10"></div>
          <div className="absolute inset-0 z-[1] flex h-full w-full items-center justify-center text-2xl font-bold italic text-white">
            Men
          </div>
        </div>
        <div className="overlay relative cursor-pointer overflow-hidden shadow-md">
          <img
            src="/assets/women.jpeg"
            className="transition duration-300"
            alt="men"
          />
          <div className="absolute inset-0 z-[1] h-full w-full bg-black opacity-10"></div>
          <div className="absolute inset-0 z-[1] flex h-full w-full items-center justify-center text-2xl font-bold italic text-white">
            Women
          </div>
        </div>
        <div className="overlay relative cursor-pointer overflow-hidden shadow-md">
          <img
            src="/assets/kids.jpeg"
            className="transition duration-300"
            alt="men"
          />
          <div className="absolute inset-0 z-[1] h-full w-full bg-black opacity-10"></div>
          <div className="absolute inset-0 z-[1] flex h-full w-full items-center justify-center text-2xl font-bold italic text-white">
            Kids
          </div>
        </div>
      </div>
      <div className="relative h-96 bg-black md:h-[500px]">
        <img
          src="/assets/family.png"
          className="object-contain object-bottom transition duration-300"
          alt="men"
        />
        <div className="absolute inset-0 z-[1] h-full w-full bg-black opacity-40"></div>
        <div className="absolute inset-0 z-[1] flex h-full w-full flex-col items-start justify-center gap-3 p-4 text-xl font-bold text-white md:w-1/2 md:pl-16">
          <h1 className="text-2xl font-bold text-white md:text-5xl">
            Every Occassion must be memorable
          </h1>
          <h3 className="font-extralight">
            Today and Everyday in the society what matters is what we wear
            right!?. So Why late to order in our site?
          </h3>
          <a
            href="#"
            className="relative mt-2 flex flex-row items-center gap-2 border-[1px] border-black bg-white p-2 text-base font-light text-black shadow-lg transition duration-300 hover:bg-black hover:text-white"
          >
            Explore Featured
            <span>
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="absolute top-[4px] left-[4px] z-[-1] h-full w-full border-[1px] border-black bg-white"></span>
          </a>
        </div>
      </div>
      <InfiniteSlider
        {...{
          backgroundColor: 'bg-white',
          textColor: 'text-white',
          textBackgroundColor: 'bg-black',
          animation: 'animate-[bannermove_20s_linear_infinite_alternate]',
        }}
      ></InfiniteSlider>
      <div className="relative h-[400px] w-full bg-[#f1eef5] md:h-[600px]">
        <video
          className="absolute inset-0 h-full w-full overflow-hidden object-contain"
          autoPlay={true}
          loop={true}
          muted={true}
        >
          <source src="/assets/clothes.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 z-[1] h-full w-full bg-white opacity-30"></div>
        <div className="absolute right-2 z-[1] flex h-full w-full flex-col items-end justify-center gap-3 p-4 text-xl font-bold text-black md:right-16 md:w-1/2 md:pl-16">
          <h1 className="text-right text-2xl font-bold text-black md:text-5xl">
            Every Occassion must be memorable
          </h1>
          <h3 className="font-extralight">
            Today and Everyday in the society what matters is what we wear
            right!?. So Why late to order in our site?
          </h3>
          <a
            href="#"
            className="relative mt-2 flex flex-row items-center gap-2 border-[1px] border-black bg-black p-2 text-right text-base font-light text-white shadow-lg transition duration-300 hover:bg-white hover:text-black"
          >
            <span>
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                ></path>
              </svg>
            </span>
            Explore Featured
            <span className="absolute top-[4px] left-[4px] z-[-1] h-full w-full border-[1px] border-black bg-black"></span>
          </a>
        </div>
      </div>
      <InfiniteSlider
        {...{
          backgroundColor: 'bg-black',
          textColor: 'text-black',
          textBackgroundColor: 'bg-white',
          animation:
            'animate-[bannermove_20s_linear_infinite_alternate-reverse]',
        }}
      ></InfiniteSlider>
    </>
  )
}

export default Home

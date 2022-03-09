/* eslint-disable @next/next/no-img-element */
import React from 'react'

const InfiniteSlider = () => {
  return (
    <section className=" h-72 w-full overflow-hidden bg-white md:h-96">
      <article className="infinite-slide-animation flex h-full w-[900%] bg-white md:w-[400%]">
        <div>
          <ul className="flex h-full w-full flex-row items-center justify-evenly gap-24 text-xl font-bold text-white">
            <li className="relative">
              <img
                alt="img"
                src="/assets/islide-1.png"
                className=" h-60 md:h-80"
              />
              <span className="absolute top-1/2 right-0 -translate-y-1/2 bg-black p-2">
                Cut t-shirt
              </span>
            </li>
            <li className="relative">
              <img
                alt="img"
                src="/assets/islide-2.png"
                className=" h-60 md:h-80"
              />
              <span className="absolute top-1/2 right-0 -translate-y-1/2 bg-black p-2">
                Jacket
              </span>
            </li>
            <li className="relative">
              <img
                alt="img"
                src="/assets/islide-3.png"
                className=" h-60 md:h-80"
              />
              <span className="absolute top-1/2 right-0 -translate-y-1/2 bg-black p-2">
                Fancy t-shirt
              </span>
            </li>
            <li className="relative">
              <img
                alt="img"
                src="/assets/islide-4.png"
                className=" h-60 md:h-80"
              />
              <span className="absolute top-1/2 right-0 -translate-y-1/2 bg-black p-2">
                Torn Jeans
              </span>
            </li>
            <li className="relative">
              <img
                alt="img"
                src="/assets/islide-5.png"
                className=" h-60 md:h-80"
              />
              <span className="absolute top-1/2 right-0 -translate-y-1/2 bg-black p-2">
                Bermudas
              </span>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex h-full w-full flex-row items-center justify-evenly gap-24 text-xl font-bold text-white">
            <li className="relative">
              <img
                alt="img"
                src="/assets/islide-1.png"
                className=" h-60 md:h-80"
              />
              <span className="absolute top-1/2 right-0 -translate-y-1/2 bg-black p-2">
                Cut t-shirt
              </span>
            </li>
            <li className="relative">
              <img
                alt="img"
                src="/assets/islide-2.png"
                className=" h-60 md:h-80"
              />
              <span className="absolute top-1/2 right-0 -translate-y-1/2 bg-black p-2">
                Jacket
              </span>
            </li>
            <li className="relative">
              <img
                alt="img"
                src="/assets/islide-3.png"
                className=" h-60 md:h-80"
              />
              <span className="absolute top-1/2 right-0 -translate-y-1/2 bg-black p-2">
                Fancy t-shirt
              </span>
            </li>
            <li className="relative">
              <img
                alt="img"
                src="/assets/islide-4.png"
                className=" h-60 md:h-80"
              />
              <span className="absolute top-1/2 right-0 -translate-y-1/2 bg-black p-2">
                Torn Jeans
              </span>
            </li>
            <li className="relative">
              <img
                alt="img"
                src="/assets/islide-5.png"
                className=" h-60 md:h-80"
              />
              <span className="absolute top-1/2 right-0 -translate-y-1/2 bg-black p-2">
                Bermudas
              </span>
            </li>
          </ul>
        </div>
      </article>
    </section>
  )
}

export default InfiniteSlider

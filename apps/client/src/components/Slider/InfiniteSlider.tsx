/* eslint-disable @next/next/no-img-element */
import React from 'react'

type infiniteSlider = {
  backgroundColor: string
  textColor: string
  textBackgroundColor: string
  animation: string
}

const InfiniteSlider = (props: infiniteSlider) => {
  return (
    <section
      className={`h-72 w-full overflow-hidden md:h-96 ${props.backgroundColor} bg-fixed`}
    >
      <article
        className={`${props.animation} flex h-full w-[900%] ${props.backgroundColor} overflow-hidden bg-fixed md:w-[400%]`}
      >
        <div>
          <ul
            className={`flex h-full w-full flex-row items-center justify-evenly gap-24 text-xl font-bold ${props.textColor}`}
          >
            <li className="relative">
              <img
                alt="img"
                src="/assets/islide-1.png"
                className=" h-60 md:h-80"
              />
              <span
                className={`absolute top-1/2 right-0 -translate-y-1/2 ${props.textBackgroundColor} p-2`}
              >
                Cut t-shirt
              </span>
            </li>
            <li className="relative">
              <img
                alt="img"
                src="/assets/islide-2.png"
                className=" h-60 md:h-80"
              />
              <span
                className={`absolute top-1/2 right-0 -translate-y-1/2 ${props.textBackgroundColor} p-2`}
              >
                Jacket
              </span>
            </li>
            <li className="relative">
              <img
                alt="img"
                src="/assets/islide-3.png"
                className=" h-60 md:h-80"
              />
              <span
                className={`absolute top-1/2 right-0 -translate-y-1/2 ${props.textBackgroundColor} p-2`}
              >
                Fancy t-shirt
              </span>
            </li>
            <li className="relative">
              <img
                alt="img"
                src="/assets/islide-4.png"
                className=" h-60 md:h-80"
              />
              <span
                className={`absolute top-1/2 right-0 -translate-y-1/2 ${props.textBackgroundColor} p-2`}
              >
                Torn Jeans
              </span>
            </li>
            <li className="relative">
              <img
                alt="img"
                src="/assets/islide-5.png"
                className=" h-60 md:h-80"
              />
              <span
                className={`absolute top-1/2 right-0 -translate-y-1/2 ${props.textBackgroundColor} p-2`}
              >
                Bermudas
              </span>
            </li>
          </ul>
        </div>
        <div>
          <ul
            className={`flex h-full w-full flex-row items-center justify-evenly gap-24 text-xl font-bold ${props.textColor}`}
          >
            <li className="relative">
              <img
                alt="img"
                src="/assets/islide-1.png"
                className=" h-60 md:h-80"
              />
              <span
                className={`absolute top-1/2 right-0 -translate-y-1/2 ${props.textBackgroundColor} p-2`}
              >
                Cut t-shirt
              </span>
            </li>
            <li className="relative">
              <img
                alt="img"
                src="/assets/islide-2.png"
                className=" h-60 md:h-80"
              />
              <span
                className={`absolute top-1/2 right-0 -translate-y-1/2 ${props.textBackgroundColor} p-2`}
              >
                Jacket
              </span>
            </li>
            <li className="relative">
              <img
                alt="img"
                src="/assets/islide-3.png"
                className=" h-60 md:h-80"
              />
              <span
                className={`absolute top-1/2 right-0 -translate-y-1/2 ${props.textBackgroundColor} p-2`}
              >
                Fancy t-shirt
              </span>
            </li>
            <li className="relative">
              <img
                alt="img"
                src="/assets/islide-4.png"
                className=" h-60 md:h-80"
              />
              <span
                className={`absolute top-1/2 right-0 -translate-y-1/2 ${props.textBackgroundColor} p-2`}
              >
                Torn Jeans
              </span>
            </li>
            <li className="relative">
              <img
                alt="img"
                src="/assets/islide-5.png"
                className=" h-60 md:h-80"
              />
              <span
                className={`absolute top-1/2 right-0 -translate-y-1/2 ${props.textBackgroundColor} p-2`}
              >
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

/* eslint-disable @next/next/no-img-element */
import React from 'react'

const PaginatedSlider = () => {
  React.useEffect(() => {
    const slides: NodeListOf<HTMLElement> = document.querySelectorAll('.slide')
    const sliderBtnLeft: HTMLElement = document.getElementById('prev')
    const sliderBtnRight: HTMLElement = document.getElementById('next')
    const dotContainer: HTMLElement = document.querySelector('.dots')
    var autoSlider: any
    let currentSlide: number = 0
    const maxSlide: number = slides.length - 1

    const activateDot = (slide: number) => {
      const dots: NodeListOf<HTMLElement> =
        document.querySelectorAll('.dots__dot--div')
      dots.forEach(dot => {
        dot.classList.remove('dots__dot--active')
      })
      document
        .querySelector(`.dots__dot--div[data-slide="${slide}"]`)
        ?.classList.add('dots__dot--active')
    }
    const createDots = () => {
      slides.forEach((_, i) => {
        const dot = document.createElement('button')
        dot.classList.add(
          'bg-gray-700',
          'transition',
          'duration-500',
          'h-1',
          'w-6',
          'md:w-8',
          'rounded',
        )
        if (i == slides.length - 1) {
          dot.classList.add('mr-0')
        } else {
          dot.classList.add('mr-2')
        }
        const loadDiv = document.createElement('div')
        loadDiv.classList.add('dots__dot--div', 'h-full', 'w-full', 'rounded')
        loadDiv.dataset.slide = i.toString()
        dot.appendChild(loadDiv)
        dotContainer.insertAdjacentElement('beforeend', dot)
      })
    }

    const gotoSlide = (currentSlide: number) => {
      slides.forEach((slide, i) => {
        slide.style.transform = `translate(${100 * (i - currentSlide)}%)`
      })
      activateDot(currentSlide)
    }

    const nextSlide = () => {
      if (currentSlide === maxSlide) {
        currentSlide = 0
      } else {
        currentSlide += 1
      }
      gotoSlide(currentSlide)
    }

    const prevSlide = () => {
      if (currentSlide === 0) {
        currentSlide = maxSlide
      } else {
        currentSlide -= 1
      }
      gotoSlide(currentSlide)
    }

    const startAutoSlider = () => {
      if (!autoSlider) {
        autoSlider = window.setInterval(nextSlide, 3000)
      }
    }

    const stopAutoSlider = () => {
      window.clearInterval(autoSlider)
      autoSlider = null
    }

    ;(() => {
      createDots()
      gotoSlide(currentSlide)
      sliderBtnLeft.addEventListener('click', () => {
        stopAutoSlider()
        prevSlide()
        startAutoSlider()
      })
      sliderBtnRight.addEventListener('click', () => {
        stopAutoSlider()
        nextSlide()
        startAutoSlider()
      })
      document.addEventListener('keydown', e => {
        if (e.key === 'ArrowLeft') {
          stopAutoSlider()
          prevSlide()
          startAutoSlider()
        }

        if (e.key === 'ArrowRight') {
          stopAutoSlider()
          nextSlide()
          startAutoSlider()
        }
      })
      dotContainer.addEventListener('click', (e: any) => {
        if (e.target.classList.contains('dots__dot--div')) {
          const slide = parseInt(e.target.dataset.slide)
          stopAutoSlider()
          gotoSlide(slide)
          currentSlide = slide
          startAutoSlider()
        }
      })
      startAutoSlider()
    })()
  })
  return (
    <div
      id="slider"
      className="slider relative my-0 mx-auto h-80 max-w-[100rem] overflow-hidden bg-black text-white md:h-96"
    >
      <div className="slide  absolute inset-0 flex  h-full w-full items-center justify-center bg-black transition duration-1000">
        <img
          src="/assets/slide-1.png"
          alt="slide-1"
          className="h-full w-full object-contain"
        ></img>
      </div>
      <div className="slide  absolute inset-0 flex  h-full w-full items-center justify-center bg-black transition duration-1000">
        <img
          src="/assets/slide-2.png"
          alt="slide-2"
          className="h-full w-full object-contain"
        ></img>
      </div>
      <div className="slide absolute inset-0  flex h-full w-full items-center  justify-center bg-black transition duration-1000">
        <img
          src="/assets/slide-3.png"
          alt="slide-3"
          className="h-full w-full object-contain"
        ></img>
      </div>
      <button
        id="prev"
        className="absolute left-5 top-1/2  z-[2] -mt-5 rounded-full bg-gray-800 p-1 text-gray-400 shadow-md transition duration-300 hover:rotate-[360deg] hover:bg-white hover:text-black md:p-2"
      >
        <svg
          className="h-5 w-5 md:h-6 md:w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          ></path>
        </svg>
      </button>
      <button
        id="next"
        className="absolute right-5 top-1/2 z-[2] -mt-5 rounded-full bg-gray-800 p-1 text-gray-400 shadow-md transition duration-300 hover:rotate-[360deg] hover:bg-white hover:text-black md:p-2"
      >
        <svg
          className="h-5 w-5 md:h-6 md:w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </button>
      <div className="dots"></div>
    </div>
  )
}

export default PaginatedSlider

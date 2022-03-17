/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Favicon from 'ui/src/Favicon'
import Link from 'next/link'

const Featured = ({ data }) => {
  return (
    <>
      <Head>
        <title>Featured | Magicdot</title>
        <Favicon></Favicon>
      </Head>
      <main className="py-4 px-2 md:px-8 lg:px-16">
        <header>
          <div className="w-full py-3">
            <ul className="flex w-full flex-row gap-1">
              <li className="mr-4 flex flex-row items-center font-bold">
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
                    d="M15 19l-7-7 7-7"
                  ></path>
                </svg>
                <Link href="/">Back</Link>
              </li>
              <li className="text-gray-600">
                <Link href="/">Home</Link>
                <span> /</span>
              </li>
              <li className="text-gray-400 underline">
                <a href="">Featured</a>
              </li>
            </ul>
          </div>
          <h1 className="my-3 text-5xl font-black">
            Featured.{' '}
            <span className="text-base font-light italic text-gray-400">
              [33]
            </span>
          </h1>
          <p className="mb-3 max-w-3xl text-sm font-extralight">
            Excepteur et nulla elit labore cupidatat. Ut occaecat enim occaecat
            ullamco mollit ad excepteur esse laborum magna id occaecat eiusmod
            consequat. Laborum sunt officia magna amet non ad cupidatat duis
            consequat aute ut laboris magna.
          </p>
        </header>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
          {data.map((cloth: any) => {
            return (
              <div className="flex h-96 flex-col" key={cloth.id}>
                <div className="relative h-80 w-80">
                  <img src={cloth.image} alt="img"></img>
                  <svg
                    className="absolute top-2 right-2 h-6 w-6"
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
                  <div className="absolute bottom-2 left-2 bg-white p-2">
                    &#8377; {cloth.price}
                  </div>
                </div>
                <div className="p-1 font-light">
                  <h1>{cloth.title}</h1>
                  <h2 className="text-gray-400">{cloth.category}</h2>
                </div>
              </div>
            )
          })}
        </div>
      </main>
    </>
  )
}

export default Featured

export async function getStaticProps() {
  const response = await fetch('https://fakestoreapi.com/products')
  const data = await response.json()
  return {
    props: {
      data,
    },
  }
}

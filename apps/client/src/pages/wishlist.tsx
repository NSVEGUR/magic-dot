import type { NextPage } from 'next'
import Head from 'next/head'
import Favicon from 'ui/src/Favicon'

const Wishlist: NextPage = () => {
  return (
    <>
      <Head>
        <title>Wishlist | Magicdot</title>
        <Favicon></Favicon>
      </Head>
      <div className="flex h-[75vh] w-full flex-col items-center justify-center gap-5">
        <h1 className="text-3xl font-bold capitalize">Wishlist</h1>
        <h1>Please Login to add items to wishlist</h1>
      </div>
    </>
  )
}

export default Wishlist

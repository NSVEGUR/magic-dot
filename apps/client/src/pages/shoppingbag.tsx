import type { NextPage } from 'next'
import Head from 'next/head'
import Favicon from 'ui/src/Favicon'

const ShoppingBag: NextPage = () => {
  return (
    <>
      <Head>
        <title>ShoppingBag | Magicdot</title>
        <Favicon></Favicon>
      </Head>
      <div className="flex h-[75vh] w-full flex-col items-center justify-center gap-5">
        <h1 className="text-3xl font-bold capitalize">Shopping Bag</h1>
        <h1>Please Login to add items to bag</h1>
      </div>
    </>
  )
}

export default ShoppingBag

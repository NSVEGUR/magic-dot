import type { NextPage } from 'next'
import Head from 'next/head'
import Favicon from 'ui/src/Favicon'

const Men: NextPage = () => {
  return (
    <>
      <Head>
        <title>Men | Magicdot</title>
        <Favicon></Favicon>
      </Head>
      <div className="flex h-[75vh] w-full flex-col items-center justify-center gap-5">
        <h1 className="text-3xl font-bold capitalize">Men</h1>
      </div>
    </>
  )
}

export default Men

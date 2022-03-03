import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Favicon from 'ui/src/Favicon'
import Navbar from 'src/components/Navbar'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Magic Dot</title>
        <Favicon></Favicon>
      </Head>
      <Navbar></Navbar>
      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          &#9400; Copyright 2022{' '}
          <Image
            src="/favicon/android-chrome-192x192.png"
            alt="Vercel Logo"
            width={50}
            height={50}
          />{' '}
          Magic Dot
        </a>
      </footer>
    </div>
  )
}

export default Home

import type { NextPage } from 'next'
import Head from 'next/head'
import Favicon from 'ui/src/Favicon'
import Slider from '../components/Header/Slider'

const Home: NextPage = () => {
  return (
    <main className="mt-14 h-[200vh]">
      <Head>
        <title>Magicdot | Online Shopping store</title>
        <Favicon></Favicon>
      </Head>
      <Slider></Slider>
    </main>
  )
}

export default Home

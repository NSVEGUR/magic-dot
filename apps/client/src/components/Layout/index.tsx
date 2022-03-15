import React from 'react'
import Navbar from 'src/components/Navbar'
import Auth from 'src/components/Auth'
import Footer from 'src/components/Footer'

const Layout = ({ children }) => {
  return (
    <main className="mt-14">
      <Navbar></Navbar>
      <Auth></Auth>
      {children}
      <Footer></Footer>
    </main>
  )
}

export default Layout

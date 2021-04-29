import React from 'react'
import Navbar from './Navbar'
import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <div className="app">
      <Head>
        <link rel="shortcut icon" href="favicon.svg" type="image/x-icon" />
        <meta name="theme-color" content="#1f2937" />
      </Head>
      <Navbar />
      <main className="relative z-10">{children}</main>
    </div>
  )
}

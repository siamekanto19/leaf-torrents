import React from 'react'
import Navbar from './Navbar'

export default function Layout({ children }) {
  return (
    <div className="app">
      <Navbar />
      <main className="relative z-10">{children}</main>
    </div>
  )
}

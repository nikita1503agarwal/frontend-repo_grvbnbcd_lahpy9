import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] grid place-items-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-black bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">404</h1>
        <p className="text-white/70 mt-2">This page could not be found.</p>
        <Link to="/" className="inline-block mt-6 px-4 py-2 rounded-md bg-white/10 hover:bg-white/20">Back home</Link>
      </div>
    </div>
  )
}

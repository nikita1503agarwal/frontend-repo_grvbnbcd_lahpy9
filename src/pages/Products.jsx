import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import products from '../data/productsData'

export default function Products() {
  const ref = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.card', { opacity: 0, y: 24, duration: 0.8, stagger: 0.1, ease: 'power3.out' })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold">Products</h1>
        <p className="text-white/70 mt-2 max-w-2xl">Purpose-built platforms that accelerate outcomes, designed for security, scale, and developer joy.</p>
      </header>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <div key={p.id} id={p.slug} className="card group p-6 rounded-xl bg-white/5 border border-white/10 hover:border-white/20">
            <div className="h-36 rounded bg-gradient-to-b from-white/5 to-white/0 mb-4 flex items-center justify-center text-white/50">3D Demo Placeholder</div>
            <h3 className="font-semibold text-white mb-1">{p.name}</h3>
            <p className="text-white/70 text-sm mb-3">{p.description}</p>
            <ul className="text-white/60 text-sm list-disc pl-5 space-y-1">
              {p.features.map((f, i) => (<li key={i}>{f}</li>))}
            </ul>
            <button className="mt-4 px-4 py-2 rounded-md bg-white/10 text-white text-sm hover:bg-white/20">View Details</button>
          </div>
        ))}
      </div>
    </div>
  )
}

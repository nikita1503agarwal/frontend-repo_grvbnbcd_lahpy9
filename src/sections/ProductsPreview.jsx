import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Link } from 'react-router-dom'
import products from '../data/productsData'

export default function ProductsPreview() {
  const ref = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.prod', { opacity: 0, y: 24, duration: 0.8, stagger: 0.1, scrollTrigger: { trigger: ref.current, start: 'top 80%' } })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-2xl md:text-3xl font-bold">Products</h2>
          <Link to="/products" className="text-cyan-400 hover:text-cyan-300">Explore all</Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.slice(0,3).map((p) => (
            <Link key={p.id} to={`/products#${p.slug}`} className="prod group p-6 rounded-xl bg-gradient-to-b from-white/5 to-white/0 border border-white/10 hover:border-white/20">
              <div className="h-32 rounded bg-white/5 mb-4 flex items-center justify-center text-white/50">Thumbnail</div>
              <h3 className="font-semibold text-white mb-1">{p.name}</h3>
              <p className="text-white/70 text-sm line-clamp-2">{p.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

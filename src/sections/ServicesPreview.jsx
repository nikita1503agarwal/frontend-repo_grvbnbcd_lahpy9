import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Link } from 'react-router-dom'
import services from '../data/servicesData'

export default function ServicesPreview() {
  const ref = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.srv', { opacity: 0, y: 20, stagger: 0.1, duration: 0.8, scrollTrigger: { trigger: ref.current, start: 'top 80%' } })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="relative py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-2xl md:text-3xl font-bold">What we do</h2>
          <Link to="/services" className="text-cyan-400 hover:text-cyan-300">View all</Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 6).map((s, i) => (
            <div key={i} className="srv group p-6 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
              <div className="h-10 w-10 rounded bg-gradient-to-br from-cyan-500 to-fuchsia-500 mb-4" />
              <h3 className="font-semibold text-white mb-2">{s.title}</h3>
              <p className="text-white/70 text-sm">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

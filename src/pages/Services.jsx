import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import services from '../data/servicesData'

export default function Services() {
  const ref = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.svc', { opacity: 0, y: 20, duration: 0.8, stagger: 0.06, ease: 'power3.out' })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold">Services</h1>
        <p className="text-white/70 mt-2 max-w-2xl">Expert teams delivering across the stack — from cloud-native platforms to AI systems and beyond.</p>
      </header>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <div key={i} className="svc p-6 rounded-xl bg-white/5 border border-white/10 hover:border-white/20">
            <div className="h-10 w-10 rounded bg-gradient-to-br from-cyan-500 to-fuchsia-500 mb-4" />
            <h3 className="font-semibold text-white mb-2">{s.title}</h3>
            <p className="text-white/70 text-sm">{s.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

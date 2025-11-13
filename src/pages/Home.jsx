import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Spline from '@splinetool/react-spline'

import ServicesPreview from '../sections/ServicesPreview'
import ProductsPreview from '../sections/ProductsPreview'
import CaseStudiesPreview from '../sections/CaseStudiesPreview'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const heroRef = useRef(null)
  const tl = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap.timeline()
        .from('.hero-eyebrow', { y: 20, opacity: 0, duration: 0.6, ease: 'power3.out' })
        .from('.hero-title', { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.3')
        .from('.hero-sub', { y: 20, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.4')
        .from('.hero-cta', { y: 20, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out' }, '-=0.5')
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <div className="relative overflow-hidden">
      <section ref={heroRef} className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <div className="h-[70vh] md:h-[90vh]" aria-hidden>
            <Spline scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 via-slate-950/60 to-slate-950 pointer-events-none" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-24">
          <p className="hero-eyebrow text-cyan-300/90 font-semibold tracking-widest uppercase text-xs">Enterprise AI & Platforms</p>
          <h1 className="hero-title text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-white via-cyan-100 to-fuchsia-200 bg-clip-text text-transparent max-w-3xl">
            Build, scale, and ship next-gen digital products.
          </h1>
          <p className="hero-sub mt-6 text-white/70 max-w-2xl">
            We architect secure, reliable platforms and AI systems trusted by global leaders. From strategy to launch, we deliver measurable impact.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/products" className="hero-cta px-5 py-3 rounded-md bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-semibold shadow-lg shadow-cyan-500/10 hover:opacity-90">
              Explore Products
            </Link>
            <Link to="/contact" className="hero-cta px-5 py-3 rounded-md bg-white/10 text-white font-semibold hover:bg-white/20">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <ServicesPreview />
      <ProductsPreview />
      <CaseStudiesPreview />
    </div>
  )
}

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Link } from 'react-router-dom'
import cases from '../data/caseStudiesData'

export default function CaseStudiesPreview() {
  const ref = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.case', { opacity: 0, y: 24, duration: 0.8, stagger: 0.1, scrollTrigger: { trigger: ref.current, start: 'top 80%' } })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-2xl md:text-3xl font-bold">Case Studies</h2>
          <Link to="/work" className="text-cyan-400 hover:text-cyan-300">See our work</Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.slice(0,3).map((c) => (
            <Link key={c.slug} to={`/work/${c.slug}`} className="case group p-6 rounded-xl bg-white/5 border border-white/10 hover:border-white/20">
              <p className="text-xs uppercase tracking-widest text-white/60 mb-2">{c.industry}</p>
              <h3 className="font-semibold text-white mb-1">{c.title}</h3>
              <p className="text-white/70 text-sm line-clamp-2">{c.problem}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

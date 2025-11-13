import React from 'react'
import { Link } from 'react-router-dom'
import cases from '../data/caseStudiesData'

export default function CaseStudies() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold">Case Studies</h1>
        <p className="text-white/70 mt-2 max-w-2xl">Selected engagements with measurable impact across industries.</p>
      </header>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cases.map((c) => (
          <Link key={c.slug} to={`/work/${c.slug}`} className="group p-6 rounded-xl bg-white/5 border border-white/10 hover:border-white/20">
            <p className="text-xs uppercase tracking-widest text-white/60 mb-2">{c.industry}</p>
            <h3 className="font-semibold text-white mb-1">{c.title}</h3>
            <p className="text-white/70 text-sm line-clamp-2">{c.problem}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

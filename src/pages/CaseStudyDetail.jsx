import React from 'react'
import { useParams, Link } from 'react-router-dom'
import cases from '../data/caseStudiesData'

export default function CaseStudyDetail() {
  const { slug } = useParams()
  const item = cases.find(c => c.slug === slug)

  if (!item) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-white/70">Not found.</p>
        <Link className="text-cyan-400" to="/work">Back</Link>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Link className="text-cyan-400" to="/work">← Back</Link>
      <p className="text-xs uppercase tracking-widest text-white/60 mt-6">{item.industry}</p>
      <h1 className="text-3xl md:text-4xl font-bold mt-2">{item.title}</h1>
      <div className="prose prose-invert mt-6">
        <p><strong>Problem:</strong> {item.problem}</p>
        <p><strong>Solution:</strong> {item.solution}</p>
        <p><strong>Outcome:</strong> {item.outcome}</p>
      </div>
    </div>
  )
}

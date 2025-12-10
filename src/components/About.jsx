import React from 'react'
import { Church } from 'lucide-react'

export default function About({ data }) {
  return (
    <section id="about" className="about" data-aos="fade-up">
      <div className="container">
        <h3 className="section-title">
          <Church size={48} color="white" strokeWidth={2.5} />
          {data.title}
        </h3>
        <div className="card" data-aos="fade-up" data-aos-delay="200">
          {data.paragraphs.map((p, i) => <p key={i}>{p.text || p}</p>)}
        </div>
      </div>
    </section>
  )
}
import React from 'react'

export default function Hero({ title, image }) {
  return (
    <section className="hero" style={{ backgroundImage: `url(${image})` }}>
      <div className="hero-overlay">
        <h2>{title}</h2>
        <p>Seja bem-vindo(a) — participe de nossa comunidade.</p>
      </div>
    </section>
  )
}

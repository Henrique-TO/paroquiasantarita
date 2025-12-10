import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Circle } from 'lucide-react'

// Carrega todas as imagens da pasta src/assets/slides
const slidesContext = import.meta.glob('/src/assets/slides/*.{jpg,jpeg,png,webp}', {
  eager: true,
  as: 'url'
})

const slides = Object.values(slidesContext)

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)

  const activeSlides = slides.length > 0 ? slides : [] // Fallback logic handled in render if empty

  useEffect(() => {
    if (activeSlides.length <= 1) return
    const timer = setInterval(() => {
      setCurrent(c => (c + 1) % activeSlides.length)
    }, 7000)
    return () => clearInterval(timer)
  }, [activeSlides.length])

  // Navigation handlers
  const prevSlide = () => setCurrent(c => (c - 1 + activeSlides.length) % activeSlides.length)
  const nextSlide = () => setCurrent(c => (c + 1) % activeSlides.length)
  const goToSlide = (index) => setCurrent(index)

  if (activeSlides.length === 0) {
    return (
      <section style={{ height: '560px', background: '#003b73', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem', textAlign: 'center' }}>
        Paróquia Santa Rita de Cássia<br /><small>Jardim Cumbica • Guarulhos</small>
      </section>
    )
  }

  return (
    <section className="hero-slider" style={{ height: '560px', position: 'relative', overflow: 'hidden' }}>
      {activeSlides.map((src, i) => (
        <div
          key={i}
          style={{
            position: 'absolute', inset: 0,
            background: `url("${src}") center / cover no-repeat`,
            opacity: i === current ? 1 : 0,
            transition: 'opacity 1.2s ease-in-out',
            backgroundColor: '#003b73'
          }}
        />
      ))}

      {/* Overlay Escuro Gradiente para melhorar leitura do texto */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(0,59,115,0.8) 0%, transparent 60%)'
      }} />

      {/* Texto Central */}
      <div style={{
        position: 'absolute', bottom: '100px', left: '50%', transform: 'translateX(-50%)',
        textAlign: 'center', width: '100%', maxWidth: 'var(--max-width)', padding: '0 20px', zIndex: 2
      }}>
        <div style={{
          background: 'rgba(0, 59, 115, 0.7)',
          backdropFilter: 'blur(8px)',
          padding: '2rem 3rem',
          borderRadius: '24px',
          border: '1px solid rgba(212, 175, 55, 0.3)',
          display: 'inline-block',
          boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
        }}>
          <h2 style={{
            margin: 0,
            fontSize: 'clamp(2rem, 5vw, 3.8rem)',
            color: '#d4af37',
            fontFamily: 'Outfit, sans-serif',
            fontWeight: 700,
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
          }}>
            Paróquia Santa Rita de Cássia
          </h2>
          <p style={{
            margin: '0.5rem 0 0',
            fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
            color: 'white',
            fontWeight: 300
          }}>
            Jardim Cumbica • Guarulhos
          </p>
        </div>
      </div>

      {activeSlides.length > 1 && (
        <>
          {/* Setas de Navegação */}
          <button onClick={prevSlide}
            className="slider-arrow"
            style={{
              position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)',
              background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(5px)',
              border: '1px solid rgba(255,255,255,0.3)', color: 'white',
              width: '56px', height: '56px', borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', zIndex: 10, transition: 'all 0.3s ease'
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'white'; e.currentTarget.style.color = '#003b73'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = 'white'; }}
          >
            <ChevronLeft size={32} />
          </button>

          <button onClick={nextSlide}
            className="slider-arrow"
            style={{
              position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)',
              background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(5px)',
              border: '1px solid rgba(255,255,255,0.3)', color: 'white',
              width: '56px', height: '56px', borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', zIndex: 10, transition: 'all 0.3s ease'
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'white'; e.currentTarget.style.color = '#003b73'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = 'white'; }}
          >
            <ChevronRight size={32} />
          </button>

          {/* Navegação por Bolinhas */}
          <div style={{
            position: 'absolute', bottom: '30px', left: '50%', transform: 'translateX(-50%)',
            display: 'flex', gap: '12px', zIndex: 10
          }}>
            {activeSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                style={{
                  width: '12px', height: '12px', borderRadius: '50%',
                  border: 'none', cursor: 'pointer',
                  background: idx === current ? '#d4af37' : 'rgba(255,255,255,0.5)',
                  transition: 'all 0.3s ease',
                  transform: idx === current ? 'scale(1.3)' : 'scale(1)'
                }}
                aria-label={`Ir para slide ${idx + 1} `}
              />
            ))}
          </div>
        </>
      )}
    </section>
  )
}
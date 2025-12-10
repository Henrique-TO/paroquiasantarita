import React, { useLayoutEffect, useState } from 'react'
import { ArrowLeft } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import Lightbox from '../components/Lightbox'

import { siteData } from '../data/siteData'

const images = siteData.gallery

export default function GalleryFull() {
  const { pathname } = useLocation()
  const [selectedImage, setSelectedImage] = useState(null)

  // Scroll pro topo com delay para garantir que override o comportamento padrão do navegador
  React.useEffect(() => {
    // Timeout pequeno para garantir que roda após o render e scroll restoration do browser
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }, 10)
    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <>
      <section style={{ padding: '7rem 0 10rem', background: '#f8fcff', minHeight: '100vh' }}>
        <div className="container">
          <div style={{ marginBottom: '4rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Link to="/" style={{ color: '#005a9e' }}>
              <ArrowLeft size={42} />
            </Link>
            <h1 style={{ fontSize: '3.4rem', color: '#005a9e', margin: 0, fontWeight: 800 }}>
              Galeria Completa ({images.length} fotos)
            </h1>
          </div>

          {images.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '10rem 2rem', fontSize: '1.8rem', color: '#666' }}>
              Ainda não há fotos na galeria.<br /><br />
              Adicione imagens na pasta <code>public/gallery/</code>
            </div>
          ) : (
            <div className="gallery-grid" style={{ gap: '2.5rem' }}>
              {images.map((src, i) => (
                <div
                  key={src}
                  data-aos="fade-up"
                  data-aos-delay={i * 40}
                  style={{
                    borderRadius: '28px',
                    overflow: 'hidden',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.25)',
                    cursor: 'zoom-in'
                  }}
                  onClick={() => setSelectedImage(src)}
                >
                  <img
                    src={src}
                    alt={`Foto ${i + 1}`}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '360px',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.6s ease'
                    }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.08)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Lightbox image={selectedImage} onClose={() => setSelectedImage(null)} />
    </>
  )
}
import React, { useState } from 'react'
import { Image as ImageIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import Lightbox from './Lightbox'

// REMOVED AUTO IMPORT - uses CMS data
// const galleryContext = import.meta.glob('/public/gallery/*.{jpg,jpeg,png,webp,avif,gif}', {
//   eager: true,
//   as: 'url'
// })
// const allImages = Object.values(galleryContext)

export default function Gallery({ images = [] }) {
  // Ordena por nome (ou pode ser por data se quiser) e pega as 6 últimas
  // Assuming images come sorted or we just take first 6. 
  // CMS list order is usually manual. Let's just take first 6.
  const latestSix = images.slice(0, 6)
  const [selectedImage, setSelectedImage] = useState(null)

  if (latestSix.length === 0) return null

  return (
    <>
      <section id="galeria" className="gallery" data-aos="fade-up">
        <div className="container">
          <h3 className="section-title">
            <ImageIcon />
            Galeria de Fotos
          </h3>

          <div className="gallery-grid">
            {latestSix.map((src, i) => (
              <div
                key={src}
                className="card"
                data-aos="zoom-in"
                data-aos-delay={i * 100}
                style={{ cursor: 'zoom-in', padding: 0, overflow: 'hidden' }} // Ajuste para clicar
                onClick={() => setSelectedImage(src)}
              >
                <img
                  src={src}
                  alt={`Foto da paróquia ${i + 1}`}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '280px',
                    objectFit: 'cover',
                    borderRadius: '24px',
                    transition: 'transform 0.4s'
                  }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
            ))}
          </div>

          <div className="text-center" style={{ marginTop: '4rem', textAlign: 'center' }}>
            <Link
              to="/galeria"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '14px',
                padding: '18px 44px',
                background: 'linear-gradient(135deg, #005a9e, #003b73)',
                color: 'white',
                fontSize: '1.4rem',
                fontWeight: '700',
                borderRadius: '50px',
                textDecoration: 'none',
                boxShadow: '0 14px 40px rgba(0,90,158,0.5)',
                transition: 'all 0.35s ease'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-7px)'
                e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,90,158,0.6)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 14px 40px rgba(0,90,158,0.5)'
              }}
            >
              Ver galeria completa →
            </Link>
          </div>
        </div>
      </section>

      <Lightbox image={selectedImage} onClose={() => setSelectedImage(null)} />
    </>
  )
}
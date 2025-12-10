// src/components/GalleryAuto.jsx
import React from 'react'
import { Image as ImageIcon, Instagram } from 'lucide-react'

// Lista automática de todas as imagens da pasta raw/
const imagesContext = import.meta.glob('../../assets/gallery/raw/*.{jpg,jpeg,png,webp,avif}', { eager: true })
const imagePaths = Object.keys(imagesContext)

export default function GalleryAuto() {
  return (
    <section id="galeria" className="gallery" data-aos="fade-up">
      <div className="container">
        <h3 className="section-title">
          <ImageIcon size={48} color="white" strokeWidth={2.5} />
          Galeria de Fotos
        </h3>

        {imagePaths.length === 0 ? (
          <div className="card text-center" data-aos="fade-up">
            <p style={{padding: '3rem', fontSize: '1.3rem', opacity: 0.7}}>
              A galeria está vazia. Adicione fotos na pasta <code>src/assets/gallery/raw/</code>
            </p>
          </div>
        ) : (
          <div className="gallery-grid">
            {imagePaths.map((path, i) => {
              const fileName = path.split('/').pop().split('.').shift()
              const cleanName = fileName.replace(/_/g, ' ').replace(/-/g, ' ')

              return (
                <div key={i} className="card" data-aos="zoom-in" data-aos-delay={i * 80}>
                  <picture>
                    <source srcSet={path + '?format=avif'} type="image/avif" />
                    <source srcSet={path + '?format=webp'} type="image/webp" />
                    <img
                      src={path}
                      alt={`Paróquia Santa Rita de Cássia - ${cleanName}`}
                      loading="lazy"
                      style={{
                        width: '100%',
                        height: '240px',
                        objectFit: 'cover',
                        borderRadius: '18px'
                      }}
                    />
                  </picture>
                </div>
              )
            })}
          </div>
        )}

      </div>
    </section>
  )
}
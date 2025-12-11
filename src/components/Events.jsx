import React from 'react'
import { Link } from 'react-router-dom'
import { CalendarDays, MapPin, Info } from 'lucide-react'

export default function Events({ events }) {
  return (
    <section id="eventos" className="events" data-aos="fade-up">
      <div className="container">
        <h3 className="section-title">
          <CalendarDays />
          Próximos Eventos
        </h3>

        {events.length === 0 ? (
          <div className="card text-center" data-aos="fade-up">
            <p style={{ fontSize: '1.3rem', padding: '3rem 1rem', opacity: 0.8 }}>
              <Info size={40} style={{ marginBottom: '1rem', opacity: 0.5 }} />
              <br />Em breve novos eventos!<br />
              Acompanhe nosso Instagram @paroquiasantaritacumbica
            </p>
          </div>
        ) : (
          <div className="events-grid">
            {events.map((ev, i) => (
              <Link
                key={ev.slug}
                to={`/eventos/${ev.slug}`}
                className="event-card"
                data-aos="fade-up"
                data-aos-delay={i * 150}
                style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
              >
                {ev.image && (
                  <div className="event-image-wrapper">
                    <img src={ev.image} alt={ev.title} className="event-image" />
                  </div>
                )}
                <h4 style={{ color: 'var(--primary-blue)', marginBottom: '0.5rem' }}>
                  {ev.title}
                </h4>
                <p><CalendarDays size={18} /> <strong>{new Date(ev.date).toLocaleDateString && new Date(ev.date).toLocaleDateString('pt-BR')}</strong></p>
                {ev.location && <p><MapPin size={18} /> {ev.location}</p>}
                <p style={{ marginTop: '1rem' }}>{ev.description}</p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
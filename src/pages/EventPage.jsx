import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { siteData } from '../data/siteData';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Markdown from 'react-markdown';
import AOS from 'aos';

export default function EventPage() {
    const { slug } = useParams();
    const [event, setEvent] = useState(null);

    useEffect(() => {
        // Find event by slug (part of the filename) or matching the slug property if we refined the loader
        // Our loader sets 'slug' from filename.
        const found = siteData.events.find(e => e.slug === slug || e.slug.endsWith(slug));
        setEvent(found);
        AOS.refresh();
    }, [slug]);

    if (!event) {
        return (
            <>
                <Header title={siteData.title} />
                <div className="container" style={{ padding: '100px 20px', textAlign: 'center' }}>
                    <h2>Evento não encontrado</h2>
                    <Link to="/" className="btn-primary">Voltar para Início</Link>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Header title="Evento" />
            <main className="event-page">
                {/* Helper Space for Fixed Header */}
                <div style={{ height: '80px' }}></div>

                <section className="container">
                    <Link to="/#eventos" className="back-link">← Voltar para Eventos</Link>

                    <div className="event-header" data-aos="fade-up">
                        <h1>{event.title}</h1>
                        <p className="event-date">
                            {new Date(event.date).toLocaleDateString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>
                    </div>

                    <div className="event-content">
                        <div className="event-cover" data-aos="zoom-in">
                            <img src={event.image} alt={event.title} />
                        </div>

                        <div className="event-body" data-aos="fade-up">
                            <Markdown>{event.body || event.description}</Markdown>
                        </div>
                    </div>

                    {event.gallery && event.gallery.length > 0 && (
                        <div className="event-gallery" data-aos="fade-up">
                            <h3>Galeria de Fotos</h3>
                            <div className="gallery-grid">
                                {event.gallery.map((img, idx) => (
                                    <div key={idx} className="gallery-item">
                                        <img src={img.image || img} alt={`Foto ${idx + 1} - ${event.title}`} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </section>
            </main>
            <Footer />
        </>
    );
}

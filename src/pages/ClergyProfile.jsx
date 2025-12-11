import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { siteData } from '../data/siteData';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Markdown from 'react-markdown';
import AOS from 'aos';
import { ArrowLeft } from 'lucide-react';

export default function ClergyProfile() {
    const { slug } = useParams();
    const [person, setPerson] = useState(null);

    useEffect(() => {
        // Find person by slug
        const found = siteData.clergy.find(p => p.slug === slug);
        setPerson(found);
        AOS.refresh();
    }, [slug]);

    if (!person) {
        return (
            <>
                <Header />
                <div className="container" style={{ padding: '150px 20px', textAlign: 'center' }}>
                    <h2>Membro do clero não encontrado</h2>
                    <Link to="/" className="btn-primary">Voltar para o Inicio</Link>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Header />
            <main>
                <div style={{ height: '80px' }}></div>
                <section className="container" style={{ padding: '4rem 1rem' }}>
                    <Link to="/clero" className="back-link">
                        <ArrowLeft size={20} /> Voltar para o Clero
                    </Link>

                    <div className="clergy-profile" data-aos="fade-up" style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 2fr', gap: '4rem', alignItems: 'start' }}>

                        {/* Sidebar / Image */}
                        <div className="profile-sidebar" style={{ textAlign: 'center' }}>
                            <div style={{
                                borderRadius: '20px',
                                overflow: 'hidden',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                                marginBottom: '2rem'
                            }}>
                                <img
                                    src={person.image}
                                    alt={person.name}
                                    style={{ width: '100%', display: 'block' }}
                                />
                            </div>
                            <div style={{ background: '#f8fcff', padding: '1.5rem', borderRadius: '15px', border: '1px solid #e1e8ed' }}>
                                <h3 style={{ color: '#005a9e', margin: 0 }}>{person.role}</h3>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="profile-content">
                            <h1 style={{ fontSize: '3rem', color: '#333', marginBottom: '0.5rem' }}>{person.name}</h1>
                            <div style={{ width: '80px', height: '4px', background: '#005a9e', marginBottom: '2rem' }}></div>

                            <div className="markdown-content" style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#555' }}>
                                <Markdown>{person.bio || "_Sem biografia disponível._"}</Markdown>
                            </div>

                            {person.gallery && person.gallery.length > 0 && (
                                <div style={{ marginTop: '4rem' }}>
                                    <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', borderBottom: '2px solid #eee', paddingBottom: '0.5rem' }}>Galeria de Fotos</h3>
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '1rem' }}>
                                        {person.gallery.map((img, i) => (
                                            <div key={i} style={{ borderRadius: '12px', overflow: 'hidden', height: '150px' }}>
                                                <img
                                                    src={img.image || img}
                                                    alt={`Galeria ${person.name} ${i}`}
                                                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }}
                                                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
                                                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

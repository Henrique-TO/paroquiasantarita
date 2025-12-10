import React from 'react'
import { Link } from 'react-router-dom'
import { User } from 'lucide-react'

export default function Clergy({ data }) {
    if (!data || data.length === 0) return null

    return (
        <section id="clero">
            <div className="container">
                <h2 className="section-title">
                    <User /> <Link to="/clero" style={{ color: 'inherit', textDecoration: 'none' }}>Nosso Clero</Link>
                </h2>

                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '3rem',
                    flexWrap: 'wrap'
                }}>
                    {data.map((person, index) => (
                        <Link
                            to={`/clero/${person.slug}`}
                            key={index}
                            className="card clergy-card" // Added class for potential hover effects
                            style={{
                                textAlign: 'center',
                                padding: '2rem',
                                textDecoration: 'none',
                                color: 'inherit',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                display: 'block'
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.transform = 'translateY(-10px)';
                                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'var(--card-shadow)';
                            }}
                        >
                            <div style={{
                                width: '280px',
                                height: '350px',
                                borderRadius: '20px',
                                overflow: 'hidden',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                                marginBottom: '1.5rem',
                                background: '#f0f0f0',
                                margin: '0 auto 1.5rem',
                                position: 'relative' // For overlay if needed
                            }}>
                                <img
                                    src={person.image}
                                    alt={person.name}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = 'https://placehold.co/280x350/005a9e/FFF?text=Foto';
                                    }}
                                />
                                {/* Optional "Ver Perfil" Overlay or Badge could go here */}
                                <div style={{
                                    position: 'absolute',
                                    bottom: '0',
                                    left: '0',
                                    width: '100%',
                                    padding: '1rem',
                                    background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                                    color: 'white',
                                    opacity: 0.9
                                }}>
                                    <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>Ver Perfil &rarr;</span>
                                </div>
                            </div>
                            <h3 style={{ fontSize: '1.8rem', color: '#222', margin: '0 0 0.5rem', fontWeight: 700 }}>{person.name}</h3>
                            <p style={{ fontSize: '1.2rem', color: '#666', fontStyle: 'italic' }}>{person.role}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

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
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <Link to="/clero" className="btn-secondary">Ver Fotos e Detalhes</Link>
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '3rem',
                    flexWrap: 'wrap'
                }}>
                    {data.map((person, index) => (
                        <div key={index} className="card" style={{ textAlign: 'center', padding: '2rem' }}>
                            <div style={{
                                width: '280px',
                                height: '350px',
                                borderRadius: '20px',
                                overflow: 'hidden',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                                marginBottom: '1.5rem',
                                background: '#f0f0f0',
                                margin: '0 auto 1.5rem'
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
                            </div>
                            <h3 style={{ fontSize: '1.8rem', color: '#222', margin: '0 0 0.5rem', fontWeight: 700 }}>{person.name}</h3>
                            <p style={{ fontSize: '1.2rem', color: '#666', fontStyle: 'italic' }}>{person.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

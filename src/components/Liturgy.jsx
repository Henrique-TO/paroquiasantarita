import React from 'react'
import { BookOpen } from 'lucide-react'

export default function Liturgy() {
    return (
        <section id="liturgia">
            <div className="container" style={{ textAlign: 'center' }}>
                <h2 className="section-title" style={{ justifyContent: 'center' }}>
                    <BookOpen /> Liturgia Diária
                </h2>
                <p style={{ fontSize: '1.4rem', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem', color: 'rgba(255,255,255,0.9)' }}>
                    Acompanhe as leituras e o evangelho de hoje para fortalecer sua fé.
                </p>

                <a
                    href="https://liturgia.cancaonova.com/liturgia-diaria/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '1.2rem 3rem',
                        background: '#fff',
                        color: '#005a9e',
                        fontSize: '1.2rem',
                        fontWeight: '700',
                        borderRadius: '50px',
                        textDecoration: 'none',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
                    }}
                    onMouseEnter={e => {
                        e.currentTarget.style.transform = 'translateY(-3px)'
                        e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.3)'
                    }}
                    onMouseLeave={e => {
                        e.currentTarget.style.transform = 'translateY(0)'
                        e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)'
                    }}
                >
                    Ver Liturgia de Hoje
                </a>
            </div>
        </section>
    )
}

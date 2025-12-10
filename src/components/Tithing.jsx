import React from 'react'
import { Banknote } from 'lucide-react'

export default function Tithing({ data }) {
    if (!data) return null

    return (
        <section id="dizimo">
            <div className="container">
                <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
                    <h2 className="section-title" style={{ justifyContent: 'center' }}>
                        <Banknote /> Dízimo e Ofertas
                    </h2>
                    <p style={{ fontSize: '1.3rem', lineHeight: 1.8, marginBottom: '4rem', color: '#555' }}>
                        {data.text}
                    </p>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '2rem'
                    }}>
                        <div className="card" style={{ textAlign: 'left' }}>
                            <h3 style={{ fontSize: '1.6rem', marginBottom: '1.5rem', color: '#005a9e', fontWeight: 800 }}>Chave PIX</h3>
                            <div style={{
                                fontSize: '1.8rem',
                                fontWeight: 'bold',
                                color: '#222',
                                padding: '1rem',
                                background: '#f8fcff',
                                borderRadius: '12px',
                                border: '1px dashed #005a9e',
                                textAlign: 'center'
                            }}>
                                {data.pix}
                            </div>
                        </div>

                        <div className="card" style={{ textAlign: 'left' }}>
                            <h3 style={{ fontSize: '1.6rem', marginBottom: '1.5rem', color: '#005a9e', fontWeight: 800 }}>Dados Bancários</h3>
                            <div style={{ fontSize: '1.1rem', color: '#444', lineHeight: 2 }}>
                                <p><strong>Banco:</strong> {data.bank.name}</p>
                                <p><strong>Agência:</strong> {data.bank.agency}</p>
                                <p><strong>Conta:</strong> {data.bank.account}</p>
                                <p><strong>Favorecido:</strong> {data.bank.holder}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

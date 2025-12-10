import React from 'react'
import { Users } from 'lucide-react'

export default function Ministries({ data }) {
    if (!data || data.length === 0) return null

    return (
        <section id="pastorais">
            <div className="container">
                <h2 className="section-title">
                    <Users /> Pastorais e Movimentos
                </h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                    gap: '2rem'
                }}>
                    {data.map((ministry, index) => (
                        <div key={index} className="ministry-card">
                            <h3 style={{ fontSize: '1.4rem', color: '#005a9e', marginBottom: '1rem', fontWeight: 700 }}>{ministry.name}</h3>
                            <p style={{ fontSize: '1rem', color: '#555', lineHeight: 1.6 }}>{ministry.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

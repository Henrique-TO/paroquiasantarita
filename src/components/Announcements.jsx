import React from 'react'
import { Bell, Calendar, AlertTriangle } from 'lucide-react'

export default function Announcements({ announcements }) {
    return (
        <section id="avisos" className="about" data-aos="fade-up">
            <div className="container">
                <h3 className="section-title">
                    <Bell />
                    Avisos Paroquiais
                </h3>

                {announcements.length === 0 ? (
                    <div className="card text-center" data-aos="fade-up">
                        <p style={{ fontSize: '1.3rem', padding: '3rem 1rem', opacity: 0.8 }}>
                            <Bell size={40} style={{ marginBottom: '1rem', opacity: 0.5 }} />
                            <br />Nenhum aviso no momento.
                        </p>
                    </div>
                ) : (
                    <div className="announcements-grid">
                        {announcements.map((announcement, i) => (
                            <div
                                key={announcement.slug}
                                className={`announcement-card ${announcement.priority === 'urgent' ? 'urgent' : ''}`}
                                data-aos="fade-up"
                                data-aos-delay={i * 150}
                                style={{ cursor: 'pointer' }}
                            >
                                {announcement.image && (
                                    <div className="announcement-image-wrapper">
                                        <img src={announcement.image} alt={announcement.title} className="announcement-image" />
                                    </div>
                                )}
                                <h4 style={{ color: 'var(--primary-blue)', marginBottom: '0.5rem', marginTop: announcement.image ? '0' : '2rem' }}>
                                    {announcement.priority === 'urgent' && <AlertTriangle size={20} style={{ marginRight: '0.5rem', color: '#e74c3c' }} />}
                                    {announcement.title}
                                </h4>
                                <p>
                                    <Calendar size={18} />
                                    <strong>
                                        {new Date(announcement.date).toLocaleDateString && new Date(announcement.date).toLocaleDateString('pt-BR')}
                                    </strong>
                                </p>
                                <p style={{ marginTop: '1rem' }}>{announcement.description}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}

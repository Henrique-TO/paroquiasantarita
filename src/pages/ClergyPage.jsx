import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { siteData } from '../data/siteData';
import { Link } from 'react-router-dom';

export default function ClergyPage() {
    return (
        <>
            <Header title="Nosso Clero" />
            <main>
                <div style={{ height: '80px' }}></div>
                <section className="container">
                    <h1 data-aos="fade-up">Nossos Sacerdotes</h1>
                    <div className="clergy-grid-page">
                        {siteData.clergy.map((priest, index) => (
                            <div key={index} className="clergy-card-full" data-aos="fade-up" data-aos-delay={index * 100}>
                                <div className="clergy-image-full">
                                    <img src={priest.image} alt={priest.name} />
                                </div>
                                <div className="clergy-info-full">
                                    <h2>{priest.name}</h2>
                                    <p className="role">{priest.role}</p>
                                    {priest.bio && <p className="bio">{priest.bio}</p>}

                                    {/* If specific gallery exists for priest, show it here or link */}
                                    {priest.gallery && priest.gallery.length > 0 && (
                                        <div className="priest-mini-gallery">
                                            <h4>Galeria</h4>
                                            <div className="gallery-row">
                                                {priest.gallery.map((img, i) => (
                                                    <img key={i} src={img.image || img} alt={`${priest.name} ${i}`} />
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

import React from 'react'
import { MapPin } from 'lucide-react'
import './Location.css'

export default function Location() {
    const locationData = {
        address: "Av. Atalía do Norte, 648 - Jardim Cumbica",
        city: "Guarulhos - SP, 07240-120",
        description: "Estamos localizados no Jardim Cumbica, Guarulhos. Venha nos visitar e participar das nossas celebrações.",
        googleMapsUrl: "https://www.google.com/maps/place/Av.+Atal%C3%ADa+do+Norte,+648+-+Jardim+Cumbica,+Guarulhos+-+SP,+07240-120"
    }

    return (
        <section id="localizacao" className="location-section" data-aos="fade-up">
            <div className="container">
                <div className="location-card">
                    <div className="location-icon">
                        <MapPin size={48} strokeWidth={2.5} />
                    </div>

                    <h2 className="location-title">Localização</h2>

                    <p className="location-description">
                        {locationData.description}
                    </p>

                    <div className="location-details">
                        <h3 className="location-address">{locationData.address}</h3>
                        <p className="location-city">{locationData.city}</p>
                    </div>

                    <a
                        href={locationData.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="google-maps-link"
                    >
                        <MapPin size={20} strokeWidth={2.5} />
                        Abrir no Google Maps
                    </a>
                </div>
            </div>
        </section>
    )
}

import React from 'react'
import { Phone, MapPin, Mail, Instagram, Clock } from 'lucide-react'

export default function Contact({ contact, address, phone }) {
  return (
    <section id="contato" className="contact" data-aos="fade-up">
      <div className="container">
        <h3 className="section-title">
          <Mail size={48} color="white" strokeWidth={2.5} />
          Contato
        </h3>
        <div className="card" data-aos="fade-up" data-aos-delay="200">
          <p><MapPin size={22} /> {address}</p>
          <p><Phone size={22} /> {phone}</p>
          <p><Phone size={22} /> WhatsApp: {contact.whatsapp}</p>
          <p>
            <a href="https://instagram.com/paroquiasantaritacumbica" target="_blank" rel="noopener noreferrer">
              <Instagram size={28} /> @paroquiasantaritacumbica
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
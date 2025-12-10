import React from 'react'
import { Calendar, Clock, Cross } from 'lucide-react'

export default function MassTimes({ times }) {
  return (
    <section id="missas" className="mass-times" data-aos="fade-up">
      <div className="container">
        <h3 className="section-title">
          <Cross />
          Horários de Missa
        </h3>
        <div className="card" data-aos="zoom-in" data-aos-delay="200">
          <ul className="mass-list">
            {times.map((t, i) => (
              <li key={i}>
                <Calendar size={20} />
                <strong>{t.day}:</strong> <Clock size={18} /> {t.timeStr || t.times}
              </li>
            ))}
          </ul>

          <h4>Confissões</h4>
          <ul>
            <li>Terça e Quinta: 14h às 17h</li>
            <li>Sábado: 9h às 12h</li>
          </ul>

          <h4>Secretaria Paroquial</h4>
          <ul>
            <li>Segunda: Fechado</li>
            <li>Terça: 8h às 12h</li>
            <li>Sexta: 13h30 às 17h</li>
            <li>Sábado: 9h às 12h</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
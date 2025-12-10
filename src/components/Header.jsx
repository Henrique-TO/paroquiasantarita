import React from 'react'
import { Home, Church, CalendarDays, Image, Phone } from 'lucide-react'

export default function Header({ title }) {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <h1 className="brand">{title}</h1>
        <nav>
          <a href="/#about"><Home size={18} /> Início</a>
          <a href="/#missas"><Church size={18} /> Missas</a>
          <a href="/#eventos"><CalendarDays size={18} /> Eventos</a>
          <a href="/#galeria"><Image size={18} /> Galeria</a>
          <a href="/#contato"><Phone size={18} /> Contato</a>
        </nav>
      </div>
    </header>
  )
}
import React, { useState } from 'react'
import { Home, Church, CalendarDays, Image, Phone, MapPin, Menu, X, Bell } from 'lucide-react'
import './Header.css'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand-wrapper">
          <img src="/logo-paroquia.png" alt="Logo Paróquia" className="brand-logo" />
          <h1 className="brand">Paróquia Santa Rita de Cássia - Jardim Cumbica</h1>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation */}
        <nav className={menuOpen ? 'nav-open' : ''}>
          <a href="/" onClick={closeMenu}><Home size={18} /> Início</a>
          <a href="/#missas" onClick={closeMenu}><Church size={18} /> Missas</a>
          <a href="/#eventos" onClick={closeMenu}><CalendarDays size={18} /> Eventos</a>
          <a href="/#avisos" onClick={closeMenu}><Bell size={18} /> Avisos</a>
          <a href="/#galeria" onClick={closeMenu}><Image size={18} /> Galeria</a>
          <a href="/#localizacao" onClick={closeMenu}><MapPin size={18} /> Localização</a>
          <a href="/#contato" onClick={closeMenu}><Phone size={18} /> Contato</a>
        </nav>
      </div>
    </header>
  )
}

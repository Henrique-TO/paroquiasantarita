import React, { useState } from 'react'
import { Home, Church, CalendarDays, Image, Phone, MapPin, Menu, X } from 'lucide-react'
import './Header.css'

export default function Header({ title }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <div className="container header-inner">
        <h1 className="brand">{title}</h1>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Navigation */}
        <nav className={menuOpen ? 'nav-open' : ''}>
          <a href="/" onClick={closeMenu}><Home size={18} /> Início</a>
          <a href="/#missas" onClick={closeMenu}><Church size={18} /> Missas</a>
          <a href="/#eventos" onClick={closeMenu}><CalendarDays size={18} /> Eventos</a>
          <a href="/#galeria" onClick={closeMenu}><Image size={18} /> Galeria</a>
          <a href="/#localizacao" onClick={closeMenu}><MapPin size={18} /> Localização</a>
          <a href="/#contato" onClick={closeMenu}><Phone size={18} /> Contato</a>
        </nav>
      </div>
    </header>
  )
}

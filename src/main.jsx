// src/main.jsx
import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import GalleryFull from './pages/GalleryFull'
import EventPage from './pages/EventPage'
import ClergyPage from './pages/ClergyPage'
import './styles/index.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({ duration: 800, once: true, offset: 100 })

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/galeria" element={<GalleryFull />} />
      <Route path="/eventos/:slug" element={<EventPage />} />
      <Route path="/clero" element={<ClergyPage />} />
    </Routes>
  </BrowserRouter>
);
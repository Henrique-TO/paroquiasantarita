import React from 'react'
import { Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
          © {new Date().getFullYear()} Paróquia Santa Rita de Cássia - Jardim Cumbica
          <Heart size={16} fill="#d4af37" color="#d4af37" />
        </p>
      </div>
    </footer>
  )
}
import React from 'react'
import { useNavigate, Route, Routes } from 'react-router-dom'
import { Content } from '../../components/dashboard/Content.jsx'
import './homePage.css'
import { usePublications } from '../../shared/hooks/usePublications.jsx'
import { Navbar } from '../../components/navs/Navbar.jsx'

export const HomePage = () => {
  const { allPublications, getPublications } = usePublications()
  const navegar = useNavigate()

  return (
    <div className="dashboard-container">
      <header className="header">
        <h1 className="titulo-principal">BLOG DE ACTIVIDADES</h1>
        <Navbar />
      </header>

      <main className="contenido">
        <div className="contenido-izquierdo">
          <Content publications={allPublications} getPublications={getPublications} />
        </div>

        <aside className="contenido-derecho">
          <div className="curso-card" onClick={() => navegar('/Tecnología/publicaciones')}>
            <h3>Tecnología</h3>
            <p>Haz clic para ver las publicaciones</p>
          </div>
          <div className="curso-card" onClick={() => navegar('/Taller/publicaciones')}>
            <h3>Taller</h3>
            <p>Haz clic para ver las publicaciones</p>
          </div>
          <div className="curso-card" onClick={() => navegar('/Practica Supervisada/publicaciones')}>
            <h3>Práctica Supervisada</h3>
            <p>Haz clic para ver las publicaciones</p>
          </div>
        </aside>
      </main>
    </div>
  )
}

import React from 'react'
import { useNavigate }from 'react-router-dom'
import { Content }  from '../../components/dashboard/Content.jsx'
import './DashboardPage.css'
import { usePublications } from '../../shared/hooks/usePublications'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from '../../components/navs/Navbar.jsx'

export const DashboardPage = () => {
  const {allPublications, getPublications} = usePublications()
  const navegar = useNavigate()

  return (
    <div className="dashboard-container">
      <header className="header">
        <h1 className="titulo-principal">BLOG DE ACTIVIDADES</h1>
        <Navbar/>
      </header>

      <main className="contenido">
        <div className="contenido-izquierdo">
          <Content publications={allPublications} getPublications={getPublications}/>
        </div>

        <aside className="contenido-derecho">
          <div className="curso-card" onClick={() => navegar('/cursos/tecnologia')}>
            <h3>Tecnología</h3>
            <p>Haz clic para ver el contenido</p>
          </div>
          <div className="curso-card" onClick={() => navegar('/cursos/taller')}>
            <h3>Taller</h3>
            <p>Haz clic para ver el contenido</p>
          </div>
          <div className="curso-card" onClick={() => navegar('/cursos/practica')}>
            <h3>Práctica Supervisada</h3>
            <p>Haz clic para ver el contenido</p>
          </div>
        </aside>
      </main>
    </div>
  )
}

// components/navbar/Navbar.jsx

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import './Navbar.css'

const NavButton = ({ text, onClickHandler }) => (
  <span className="nav-button" onClick={onClickHandler}>
    {text}
  </span>
)

NavButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired
}

export const Navbar = () => {
  const navigate = useNavigate()
  const [navVisible,] = useState(false)
  return (
    <div className="nav-container">
        <div className={`nav-buttons-container ${navVisible ? 'visible' : ''}`}>
            <NavButton text="Inicio" onClickHandler={() => navigate('/')} />
            <NavButton text="Publicaciones" onClickHandler={() => navigate('/publicaciones')} />
            <NavButton text="Acerca" onClickHandler={() => navigate('/acerca')} />
            <NavButton text="Contacto" onClickHandler={() => navigate('/contacto')} />
        </div>
    </div>
  )
}

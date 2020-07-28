import React from 'react'
import logo from '../../assets/logo.png'
import './Menu.css'
import ButtonLink from './components/ButtonLink'
import Button from '../Button'


function Menu() {
    return (
        <nav className ="Menu">
            <a href="/">
                <img className="Logo" src={logo} alt ="Logo Sweetflix"/>
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo Vídeo
            </Button>
        </nav>
    )
}
    export default Menu
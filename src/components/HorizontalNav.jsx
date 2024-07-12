import React from "react"

import logo from './../assets/logo.svg'
import './../styles/HorizontalNav.css'

export default function Home() {
    return (
        <header>
            <img src={logo} alt="logo SportSee"></img>
            <nav className="horizontal-nav">
                <ul>
                    <li>Accueil</li>
                    <li>Profil</li>
                    <li>Réglage</li>
                    <li>Communauté</li>
                </ul>
            </nav>
        </header>
    )
}
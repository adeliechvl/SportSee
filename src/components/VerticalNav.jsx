import React from "react"

import yogaIcon from "../assets/yoga.svg";
import swimIcon from '../assets/swim.svg'
import bikeIcon from '../assets/bike.svg'
import weightIcon from '../assets/weight.svg'

import './../styles/VerticalNav.css'

export default function Home() {
    return (
        <div className="vertical-nav">
            <nav>
                <img src={yogaIcon} alt="Icône menu yoga"></img>
                <img src={swimIcon} alt="Icône menu natation"></img>
                <img src={bikeIcon} alt="Icône menu vélo"></img>
                <img src={weightIcon} alt="Icône menu musculation"></img>
            </nav>
            <p>Copyright, SportSee 2020</p>
        </div>
    )
}
import React from 'react'

import HorizontalNav from '../../components/HorizontalNav';
import VerticalNav from '../../components/VerticalNav';
import Dashboard from '../../components/Dashboard';

import '../../styles/home.css'
import '../../styles/container-data.css'

export default function Home() {
    return (
        <>
            <HorizontalNav />
            <main>
                <VerticalNav />
                <div className='container'>
                    <Dashboard />
                </div>
            </main>
        </>
    )
}
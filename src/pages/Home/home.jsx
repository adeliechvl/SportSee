import { useEffect } from 'react'

import HorizontalNav from '../../components/HorizontalNav';
import VerticalNav from '../../components/VerticalNav';
import Dashboard from '../../components/Dashboard';

import '../../styles/home.css'
import '../../styles/container-data.css'

export default function Home() {

    useEffect(() => 
        { document.title="SportSee - Page d'accueil" }
    )

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
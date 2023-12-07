import React from 'react'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import Hidden from '../components/Hidden'

function page() {
    return (
        <>
            <div>
                <Navbar />
                <Home />
                <Hidden/>
            </div>
        </>
    )
}

export default page
import React from 'react'
import Navbar from '../Pages/Navbar'

const Layout = ({ children }) => {
    return (
        <main>
            <Navbar />
            {children}
        </main>
    )
}

export default Layout
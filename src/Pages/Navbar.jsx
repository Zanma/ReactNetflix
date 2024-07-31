import React from 'react'
import { useAtom } from 'jotai'
import { languageAtom } from '../jotai/atoms'

const Navbar = () => {
    const [, setLanguage] = useAtom(languageAtom)

    return (
        <div className='Navbar'>
            <h1>Netflix Clone</h1>
            <div>
                <button onClick={() => setLanguage("id")}>Indonesia</button>
                <button onClick={() => setLanguage("en")}>English</button>
            </div>
        </div>
    )
}

export default Navbar
import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
import { Twirl as Hamburger } from 'hamburger-react'
import { useState } from 'react'

const Nav = () => {
    const [isOpen, setOpen] = useState(false)

    
    
   

    const handleBurger = () => {
        const nav = document.querySelector('nav')
       nav.classList.toggle('active')
    }

    const closeMobile = () => {
        setOpen(false)
        document.querySelector('nav').classList.remove('active')
    }

    return (
        <nav>
            <Link to='/'>
                <h1 onClick={closeMobile}>COFFEE BEAN</h1>
            </Link>
            <ul>
                <Link to='/'><li>link1</li></Link>
                <Link to='/'><li>link1</li></Link>
                <Link to='/'><li>link1</li></Link>
                <Link to='/cart'><li><i className="fas fa-shopping-cart"></i>(1)</li></Link>
            </ul>
            {isOpen ? <div className='hamburger-menu hamburger-container'>
                <ul>
                    <Link to='/'><li onClick={closeMobile}>link1</li></Link>
                    <Link to='/'><li onClick={closeMobile}>link1</li></Link>
                    <Link to='/'><li onClick={closeMobile}>link1</li></Link>
                    <Link to='/cart'><li onClick={closeMobile}><i className="fas fa-shopping-cart"></i>(1)</li></Link>
                </ul>
            </div> : null}
            <div onClick={handleBurger} className='hamburger-container'>
                <Hamburger toggled={isOpen} toggle={setOpen} duration={0.2} />
            </div>
        </nav>
    )
}

export default Nav

import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            <Link to='/'>
                <h1>COFFEE BEAN</h1>
            </Link>
            <ul>
                <Link to='/'><li>link1</li></Link>
                <Link to='/'><li>link1</li></Link>
                <Link to='/'><li>link1</li></Link>
                <Link to='/cart'><li><i className="fas fa-shopping-cart"></i>(1)</li></Link>
                
            </ul>
        </nav>
    )
}

export default Nav

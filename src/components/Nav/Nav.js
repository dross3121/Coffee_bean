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
                <li>link1</li>
                <li>link1</li>
                <li>link1</li>
                <li>link1</li>
            </ul>
        </nav>
    )
}

export default Nav

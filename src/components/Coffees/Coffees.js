import React from 'react'
import Coffee from '../Coffee/Coffee'
import './Coffees.css'
import { Link } from 'react-router-dom'

const Coffees = ({ coffees }) => {
    return (
        <main className='coffees'>
            {coffees && coffees.map(coffee => <Link to={`/coffee/${coffee.id}`}><Coffee coffee={coffee} /></Link>)}
        </main>
    )
}

export default Coffees

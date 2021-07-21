import React from 'react'
import { useEffect } from 'react'
import './CoffeeDetails.css'

const CoffeeDetails = ({ match }) => {
   const id = match.params.id
   useEffect(() => {
       console.log('api request')
   }, [])
    return (
        <div className='coffee-details'>
            <h1>Coffee Details</h1>
            <p>{id}</p>
        </div>
    )
}

export default CoffeeDetails

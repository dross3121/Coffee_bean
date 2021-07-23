import React from 'react'
import { useState, useEffect } from 'react'
import './CoffeeDetails.css'

//Delete exampleCoffee once DB connected
const exampleCoffee = {
    "name": "Good Coffee",
    "price": 15,
    "flavors": ['hazelnut', 'vanilla'],
    "img": "../images/coffeebag1.jpeg",
    "weight": ['10.5oz', '16oz', '5lb'],
    "roast": "dark",
    "region": "Boston",
    "id": 123
}

const CoffeeDetails = ({ match }) => {
    const [coffee, setCoffee] = useState({})
    const [selectedWeight, setSelectedWeight] = useState(exampleCoffee.weight[0])
    const [price, setPrice] = useState(exampleCoffee.price)
    const [cart, setCart] = useState('')
    const id = match.params.id

    const handleWeightClick = (e) => {
        setSelectedWeight(e)
    }

    const handleAddToCart = () => {
        console.log('hiii')
    }

    useEffect(() => {
            if(selectedWeight === '10.5oz') {
                setPrice(15)
            } else if (selectedWeight === '16oz') {
                setPrice(22)
            } else {
                setPrice(35)
            }
    }, [selectedWeight])

    useEffect(() => {
        //API request with id once DB connected
        console.log('api request')
        // setCoffee()
        window.scrollTo(0, 0)
    }, [])
    return (
        <main className='coffee-details'>
            <img src={exampleCoffee.img} alt={exampleCoffee.name} />
            <div className="coffee-details-content">
                <h2>{exampleCoffee.name}</h2>
                <p>${price}</p>
                <p>{exampleCoffee.flavors.map(flav => <span key={flav}>{flav}</span>)}</p>
                <div>{exampleCoffee.weight.map(weight => <span className='weight' key={weight} id={weight === selectedWeight ? 'selected-weight' : undefined} onClick={() => handleWeightClick(weight)}>{weight}</span>)}</div>
                <p>Roast: {exampleCoffee.roast}</p>
                <p>Region: {exampleCoffee.region}</p>
                <button onClick={handleAddToCart}>Add to Cart ${price}</button>
            </div>
        </main>
    )
}

export default CoffeeDetails

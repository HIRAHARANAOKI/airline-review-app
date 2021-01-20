import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Airline from "./Airline";

const Airlines = () => {
    const [airlines, setAirlines] = useState([])

     useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('/api/v1/airlines.json')
            console.log(result.data.data)
            setAirlines(result.data.data)
        }
        fetchData()
    }, [])

     const grid = airlines.map( (airline, index) => {
         return (<Airline key={index} attributes={airline.attributes} />)
     })

    return (
        <div className='home'>
            <div className="header">
<h1>header</h1>
            </div>

            <div className="grid">
                {grid}
            </div>
        </div>
    );
};

export default Airlines;
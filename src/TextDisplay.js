import React from 'react'
import axios from "axios"

const RANDOM_QUOTE_API_URL = 'http://api.quotable.io/random?minLength=200&maxLength=250'

const fetchData = () => {
    return axios.get(RANDOM_QUOTE_API_URL)
          .then((response) => console.log(response.data));}

export default function TextDisplay() {

    return (
        <div className='TextDisplay'>
        </div>
    )
}

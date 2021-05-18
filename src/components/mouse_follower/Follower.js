import React, {useState, useEffect} from 'react'
import * as d3 from 'd3'

import {message} from './message'
import { CSV_URL } from '../constants'





function Follower() {
    const [data, setData ] = useState(null)

    useEffect(() => {
        d3.csv(CSV_URL).then(
            response => {
                setData(response)                
            }
        )        
    }, [])
    
    return (
        <div>Data is {data ? message(data) : 'loading...'}</div>
    )
}
export default  Follower

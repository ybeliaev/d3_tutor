import React, {useState, useEffect} from 'react'

import {csv} from 'd3'
import { CSV_URL } from '../constants'


export default function VisualizationData_1() {
    const [data, setData] = useState(null)

    useEffect(()=>{
        csv(CSV_URL).then(setData)
    },[])
    return (
        <pre>
            {data ? data.map() : 'Loading..'}
        </pre>
    )
}

import React, {useState, useEffect} from 'react'

import {csv, arc, pie, scaleBand, scaleLinear, max} from 'd3'
import { POPULATION_URL } from '../constants'

const width = 960;
const height = 500;


export default function Population() {
    const [data, setData] = useState(null)
    useEffect(()=>{
        const row = d => {
            d.Population = +d['2020']
            return d
        }
        // adding row it to csv have ner property in data: 'Population'
        csv(POPULATION_URL, row).then(setData)
    },[])

    if(!data){
        return <pre>Loading..</pre>
    }
    console.log("data population: ", data[0])

    const yScale = scaleBand()
        .domain(data.map(d=>d.Country))
        .range([0, height]) // 0 - minimum, height - max 
    const xScale = scaleLinear()
        .domain([0, max(data, d=>d.Population)])
        .range([0, width])

    return (
        <svg width={width} height={height}>
            {data.map(d =>
                 (<rect 
                 x={0} 
                 y={yScale(d.Country)} 
                 width={xScale(d.Population)} 
                 height={yScale.bandwidth()} />)
                 )
            }
        </svg>
    )
}

import React, {useState, useEffect} from 'react'

import {csv} from 'd3'
import { CSV_URL } from '../constants'
import DataLoader from '../dataLoader'


export default function VisualizationData1() {
    const [data, setData] = useState(null)

    useEffect(()=>{
        csv(CSV_URL).then(response => {
            // make unique elements
            const newArr = response.filter((v,i,a)=>a.findIndex(t=>(t['RGB hex value'] === v['RGB hex value']))===i)
            setData(newArr)
        })
    },[])
    if(!data) return <DataLoader />
    console.log("Data colors MDN: ", data[0])
    return (
        <div className='div_visual'>
            {data.map(d => {
                if(d['Keyword'].length > 10){
                    return (
                        <div key={d['Keyword']} style={{backgroundColor: d['RGB hex value'] }}>
                            <span style={{fontSize:"0.7rem"}}>{d['Keyword']}</span>
                        </div>
                    )
                }else{
                    return (
                        <div key={d['Keyword']} style={{backgroundColor: d['RGB hex value'] }}>
                            <span>{d['Keyword']}</span>
                        </div>
                    )
                }
            })}
        </div>
    )
}

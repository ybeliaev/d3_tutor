import React from 'react'
import * as d3 from "d3"
import { CSV_URL } from '../constants'


export default function FetchCSV() {
// use csv method from d3-dsv
    d3.csv(CSV_URL).then(
        data => {
            let message = ''
            message = message + Math.round(d3.csvFormat(data).length/1024) + ' kB\n'
            message = message + data.length + ' rows\n'
            message = message + data.columns.length + ' columns'
            document.getElementById('message-container').textContent = message
        }
    )
// first/basic variant fetch
    // fetch(URL)
    //     .then((response) => response.text())
    //     .then(text=>console.log(text))

// second version with async
    // const fetchText = async (url) => {
    //     const response = await fetch(url)
    //     return await response.text()
        
    // }
    // fetchText(CSV_URL).then(text => {
    //     const data = d3.csvParse(text)

    //     console.log(Math.round(text.length/1024) + ' kB')
    //     console.log(data.length + ' rows')
    //     console.log(data.columns.length + ' columns')
    // })
  
    return (
        <div>
            <h2>Loading and parsing CSV data.</h2>
            <h3>Adding d3-dsv</h3>
            <a href="https://github.com/d3/d3-dsv">Link d3-csv</a>
            <pre id="message-container"></pre>
        </div>
    )
}



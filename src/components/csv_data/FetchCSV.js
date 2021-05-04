import React from 'react'
import * as d3 from "d3"

export default function FetchCSV() {
    // delete some numbers after raw:
    const csvURL = 'https://gist.githubusercontent.com/ybeliaev/e3e65a5135010936c4f359b9caf19260/raw/css_named_colors.csv'

    // fetch(URL)
    //     .then((response) => response.text())
    //     .then(text=>console.log(text))

    const fetchText = async (url) => {
        const response = await fetch(url)
        return await response.text()
        
    }
    fetchText(csvURL).then(text => {
        const data = d3.csvParse(text)

        console.log(Math.round(text.length/1024) + ' kB')
        console.log(data.length + ' rows')
        console.log(data.columns.length + ' columns')
    })
  
    return (
        <div>
            <h2>Loading and parsing CSV data.</h2>
            <h3>Adding d3-dsv</h3>
            <a href="https://github.com/d3/d3-dsv">Link d3-dsv</a>
        </div>
    )
}



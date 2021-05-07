import React, {useState, useCallback, useEffect} from 'react'
import * as d3 from 'd3'

const CSV_URL = 'https://gist.githubusercontent.com/ybeliaev/e3e65a5135010936c4f359b9caf19260/raw/css_named_colors.csv'

const message = data => {
    let message = ''
    message = message + Math.round(d3.csvFormat(data).length/1024) + ' kB\n'
    message = message + data.length + ' rows\n'
    message = message + data.columns.length + ' columns'
    return message
}

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

import React from 'react'

export default function FetchCSV() {
    const URL = 'https://gist.githubusercontent.com/ybeliaev/e3e65a5135010936c4f359b9caf19260/raw/css_named_colors.csv'

    // fetch(URL)
    //     .then((response) => response.text())
    //     .then(text=>console.log(text))

    const fetchText = async (url) => {
        const response = await fetch(url)
        return await response.text()
        
    }
    fetchText(URL)
  
    return (
        <div>
            <h2>Loading and parsing CSV data.</h2>
            
        </div>
    )
}



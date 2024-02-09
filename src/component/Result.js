import React from 'react'
import "./Startcoding.css"

function Result({srcCode}) {
    return (
        <div className='iframecont'>
            <div className='iframecont2' >
                <h2
                   >
                    Result
                </h2>
                <iframe className='iframe'
                    srcDoc={srcCode}
                    title="output"
                    sandbox="allow-scripts"
                    width="100%"
                    // height="100%"
                >
                </iframe>
            </div>
        </div>
    )
}

export default Result
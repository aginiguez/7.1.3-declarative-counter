import React, { useState } from 'react'
//When a user calls changeCounter() via the developer tools, the counter variable should display whatever was passed into that function.
function App(){
    let [ counter, changeCounter ] = useState(1)
    window.changeCounter = changeCounter
    return (
        <div>
            <h1>{counter}</h1>
            <h4>{counter}</h4>
        </div>
    )
}

export default App;


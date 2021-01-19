import React from 'react'
import Button from './Button'
const Headers = (props) => {
    return (
        <header className="header">
            <h1> Task Tracker{props.title}</h1>
            <Button text="Add" color="green"></Button>
            {/* <Button text="Delete" color="red"></Button>
            <Button text="Hold" color="pink"></Button> */}
        </header>
    )
}

export default Headers

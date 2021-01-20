import React from 'react'
import Button from './Button'
const Headers = ({title , onAdd}) => {
    return (
        <header className="header">
            <h1> Task Tracker{title}</h1>
            <Button text="Add" color="green" onClick={onAdd}></Button>
            {/* <Button text="Delete" color="red"></Button>
            <Button text="Hold" color="pink"></Button> */}
        </header>
    )
}

export default Headers

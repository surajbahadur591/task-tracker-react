import React from 'react'
import {FaTimes} from 'react-icons/fa'

const Task = ({task, onDelete, onToggle}) => {

    return (
        <div className={`task ${task.reminder ? 'reminder': 'reminder2'}`} onDoubleClick={ () => onToggle(task.id)}>
            <h3>{task.name} <FaTimes onClick={ ()=> onDelete(task.id)}></FaTimes></h3>
        </div>
    )
}

export default Task

import React from 'react'
import {FaTimes} from 'react-icons/fa'

const Task = ({task, onDelete, onToggle}) => {

    return (
        <div className={`task ${task.reminder ? 'reminder': ''}`} onDoubleClick={ () => onToggle(task.id)}>
            <h3>{task.id} - {task.name} <FaTimes onClick={ ()=> onDelete(task.id)}></FaTimes></h3>
        </div>
    )
}

export default Task

import React from 'react'
import {useState} from 'react'

const AddTask = ({onAdd}) => {
    const [name, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState('false')

    const onSubmit = (e) => {
        e.preventDefault();

        if(!name) {
            alert('please add task')
            return 
        }

        onAdd({name, day, reminder})

        setText('');
        setDay('');
        setReminder(false);
    }
    
    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className='form-control'>
                <label> Task </label>
                <input type='text' placeholder='Add Task' value={name} onChange={(e) => setText(e.target.value)}/>
            </div>

            <div className='form-control'>
                <label> Day and Time </label>
                <input type='text' placeholder='Add Day and Time' value={day}  onChange={(e) => setDay(e.target.value)}/>
            </div>

            <div className='form-control form-control-check'>
                <label> Set Reminder </label> 
                <input type='checkbox' checked={reminder} placeholder='Add Task' value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>

        <input type='submit' value='Save task' className='btn btn-block'/>
        </form>
    )
}

export default AddTask

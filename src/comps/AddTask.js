import React from 'react'
import {useState} from 'react'

const AddTask = ({addTask}) => {
    const[text, setText] = useState('')
    const[day, setDay] = useState('')
    const[reminder, setReminder] = useState(false)
    
    const onSubmit = (e) => {
        e.preventDefault()
        if (!text) {
            alert('please add task name')
            return
        }
        if (!day) {
            alert('please add task date')
            return
        }
        addTask({text, day, reminder})
        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Name:</label>
                <input type='text' value={text} onChange={(e) => {setText(e.target.value)}}/>
            </div>
            <div className='form-control'>
                <label>Day:</label>
                <input type='text' value={day} onChange={(e) => {setDay(e.target.value)}}/>
            </div>
            <div className='form-control form-control-check'>
                <label>Reminder</label>
                <input type='checkbox' checked={reminder} value={reminder} onChange={(e)=>{setReminder(e.currentTarget.checked)}}/>
            </div>
            <input type='submit' value='Add Task' className='btn btn-block'/>
        </form>
    )
}

export default AddTask

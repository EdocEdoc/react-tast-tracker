import { useState } from 'react'
import Button from './Button'

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert('Please add task')
            return
        }

        onAdd({ text, day , reminder })

        setText('')
        setDay('')
        setReminder(false)
    }

    const onClear = () => {
        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <>
            <form className='add=form' onSubmit={onSubmit} >
                <div className='form-control'>
                    <label htmlFor="Task">Task</label>
                    <input type="text" name='Task' placeholder='Add Task' value={text} onChange={(e) => setText(e.target.value)} />
                </div>
                <div className='form-control'>
                    <label htmlFor="SetDay">Day and Time</label>
                    <input type="text" name='SetDay' placeholder='Add Day and Time' value={day} onChange={(e) => setDay(e.target.value)} />
                </div>
                <div className='form-control form-control-check'>
                    <label htmlFor="Reminder">Set Reminder</label>
                    <input type="checkbox" name='Reminder' checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
                </div>

                <input type="submit" value='Save Task' className='btn btn-block' />
            </form>
            <Button color='black' text='Clear' className='btn-block' onClick={onClear} marginBottom={20} />
        </>
    )
}

export default AddTask

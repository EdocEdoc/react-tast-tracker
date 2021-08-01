import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from "react"
import AddTask from './components/AddTask'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTask] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at school',
        day: 'Feb 6th at 1:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30pm',
        reminder: false,
    },
  ])

  // add task
  const addTask =(task) => {
    const id = Math.floor(Math.random() * 1000) +1
    const newTask = {id, ...task}
    setTask([...tasks, newTask])
  }

  // delete task
  const deleteTask = (id) => {
    setTask(tasks.filter((task) => task.id !== id))
  }

  // toggle Reminder
  const toggleReminder = (id) => {
    setTask(tasks.map((task)=> task.id === id ? {...task, reminder : !task.reminder } : task))
  }

  return (
    <div className="container">
      <Header title='Task Tracker' onAdd={() => setShowAddTask(!showAddTask)} buttonState={showAddTask} />
      {
        showAddTask && <AddTask onAdd={addTask} />
      }
      {
        // if there is no task then sate ...
        tasks.length > 0 ? 
        (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : 
        (<p>No task at the moment.</p>)
      }
    </div>
  );
}

export default App;
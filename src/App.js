import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState, useEffect} from "react"
import { BrowserRouter as Router, Route, useLocation } from 'react-router-dom'
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import About from './components/About'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTask] = useState([])

  useEffect(() => {
    const getTasks = async () =>{
      const taskFromServer = await fetchTasks()

      setTask(taskFromServer)
    }

    getTasks();
  }, [])
  // inside [] if the value changes use effect will run again jus like property change!

  // fetch tasks (data)
  const fetchTasks = async() => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    //console.log(data)

    return data
  }

  const fetchTask = async(id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()

    //console.log(data)

    return data
  }

  // add task
  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', 
    {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(task)
    })

    const data = await res.json()

    setTask([...tasks, data])
    //const id = Math.floor(Math.random() * 1000) +1
    //const newTask = {id, ...task}
    //setTask([...tasks, newTask])
  }

  // delete task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {method: 'DELETE'})

    setTask(tasks.filter((task) => task.id !== id))
  }

  // toggle Reminder
  const toggleReminder = async (id) => {
    const taskToggle = await fetchTask(id)
    const updatedTask = {...taskToggle, reminder: !taskToggle.reminder}

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(updatedTask)
    })

    const data = await res.json()

    setTask(tasks.map((task)=> task.id === id ? {...task, reminder : data.reminder } : task))
  }

  return (
    <Router>
      <div className="container">
        <Header title='Task Tracker' onAdd={() => setShowAddTask(!showAddTask)} buttonState={showAddTask} />
        <Route path='/' exact render={(props) => (
          <>
            { showAddTask && <AddTask onAdd={addTask} /> }
            { // if there is no task then sate ...
              tasks.length > 0 ? 
              (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : 
              (<p>No task at the moment.</p>)
            }
          </>
        )} ></Route>
        <Route path='/about' component={About}></Route>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
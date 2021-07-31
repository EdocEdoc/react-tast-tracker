import Task from './Task'

const Tasks = ({ tasks, onDelete }) => {
    return (
        <>
            {tasks.map((task) => (
            <Task key={task.id} task={task} onDelete={onDelete}/>
            ))}
        </>
    )
}

// loop to an array create a list using map - takes a function "arrow function"
// .map  = list  its parent needs should have key prop which unique
// {tasks.map((task) => (<h3 key={task.id}>{task.text}</h3>))}

export default Tasks

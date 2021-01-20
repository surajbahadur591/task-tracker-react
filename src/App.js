import Headers from './components/Headers'
import Tasks from './components/Tasks'
import {useState, useEffect} from 'react'
import AddTask from './components/AddTask'

const App = ()=> {

  const[ showAddTask, setShowAddTask] = useState(true)


  // setShowAddTask(!showAddTask)

  const [tasks, setTasks] = useState([])

  useEffect(() => {

    const getTasks = async() => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks();
  }, [])

  const fetchTasks = async() => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    return data;
  }


const addTask = async (task) => {
  
  const res =  await fetch('http://localhost:5000/tasks/', {
    method: 'POST',
    headers : {
      'Content-type': 'application/json'
    },
    body : JSON.stringify(task)
  })

  const data = await res.json();

  setTasks([...tasks, data])
  // console.log(task)
  // const id = Math.floor(Math.random() * 10000) +1 

  // const newtask = { id, ...task}
  // console.log(newtask)
  // setTasks([...tasks, newtask])
}

const deleteTask =  async (id) => {
  // console.log("delete", id)

  await fetch(`http://localhost:5000/tasks/${id}`, {
    method : 'DELETE',
  })

  setTasks(tasks.filter((task) => task.id!==id))
}

const toggleReminder = async (id) => {
  // console.log(id);

  const taskToToggle = await fetchTask(id)

  const updatedTask = {...taskToToggle, reminder : !taskToToggle.reminder}

  const res = await fetch(`http://localhost:5000/tasks/${id}`, {
    method: 'PUT',
    headers : {
      'Content-type' : 'application/json'
    },
    body : JSON.stringify(updatedTask)
  })

  const data  = await res.json();

  setTasks(tasks.map( (task) => task.id ===id ? {...task, reminder: data.reminder } : task))
}


const fetchTask = async(id) => {
  const res = await fetch(`http://localhost:5000/tasks/${id}`)
  const data = await res.json()

  return data;
}

  return (
    <div className="container">
      <Headers title="" onAdd={() => setShowAddTask(!showAddTask)}></Headers>
      {showAddTask && <AddTask onAdd={addTask}></AddTask>}
      <h2> 
          --> All your tasks to complete
        </h2>

        <h2>{tasks.length >0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}></Tasks> : "No tasks to show"}
        </h2>
    </div>
  );
}

export default App;
 
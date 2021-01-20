import Headers from './components/Headers'
import Tasks from './components/Tasks'
import {useState} from 'react'
import AddTask from './components/AddTask'

const App = ()=> {

  const[ showAddTask, setShowAddTask] = useState(true)


  // setShowAddTask(!showAddTask)

  const [tasks, setTasks] = useState([
    {id:1,
    name: 'Create a beautiful portfolio'},
    {id:2,
    name : 'Learn New Skill every week'
    },
    {id:3,
    name: 'Make your presence noticible'}
])

const addTask = (task) => { 
  console.log(task)
  const id = Math.floor(Math.random() * 10000) +1 

  const newtask = { id, ...task}
  console.log(newtask)
  setTasks([...tasks, newtask])
}

const deleteTask = (id) => {
  // console.log("delete", id)
  setTasks(tasks.filter((task) => task.id!==id))
}

const toggleReminder = (id) => {
  // console.log(id);
  setTasks(tasks.map( (task) => task.id ===id ? {...task, reminder: !task.reminder } : task))
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
 
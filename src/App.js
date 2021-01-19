import Headers from './components/Headers'
import Tasks from './components/Tasks'
import {useState} from 'react'

const App = ()=> {
  const [tasks, setTasks] = useState([
    {id:1,
    name: 'suraj'},
    {id:2,
    name : 'happy'
    },
    {id:3,
    name: 'beta'}
])

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
      <Headers title=""></Headers>
      <h2>
          Your own task tracker
        </h2>

        <h2>{tasks.length >0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}></Tasks> : "No tasks to show"}
        </h2>
    </div>
  );
}

export default App;
 
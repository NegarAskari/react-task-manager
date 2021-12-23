import Header from './comps/Header'
import Tasks from './comps/Tasks'
import AddTask from './comps/AddTask'
import {useState} from 'react'

function App() {

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Test1',
        day: 'day 1',
        reminder: true
    },
    {
        id: 2,
        text: 'Test2',
        day: 'day 2',
        reminder: false
    }
])

const [showAddTask, setShowAddTask] = useState(false)

const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id == id ? {...task, reminder:!task.reminder} : task))
}

const addTask = (task) => {
  const id = Math.floor(Math.random() * 1000) + 1 //since there is no backend
  const newTask = {id,...task}
  setTasks([...tasks, newTask])
}


  return (
    <div className="container">
      <Header onShowAddTask={()=>{setShowAddTask(!showAddTask)}} showAddTask={showAddTask}/>
      {showAddTask && <AddTask addTask={addTask}/>}        {tasks.length>0 ? <Tasks tasks={tasks} onDelete={deleteTask} toggleReminder={toggleReminder}/> : 'no tasks to show'}
    </div>
  );
}

export default App;

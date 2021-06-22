import { useState, useEffect } from 'react'
import Tasks from './components/Tasks'
import Form from './components/Form'
import Header from './components/Header'
function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])
  const url = 'http://localhost:2000/tasks'

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch(url)
    const data = await res.json()
    return data
  }

  // Add Task
  const addTask = async (task) => {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(task),
    })

    const data = await res.json()
    setTasks([...tasks, data])
  }

  // Delete Task

  const deleteTask = async (id) => {
    await fetch(url + `/${id}`, {
      method: 'DELETE',
    })
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // const colors = ['red', 'blue', 'gray', 'pink', 'green', 'yellow']
  // const bgColor = () => {
  //   const bg = colors[Math.floor(Math.random() * colors.length)]
  // }
  return (
    <div className='container mx-auto'>
      <div className='task__manager--container'>
        {/* header */}
        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
        {/* ./ header */}
        {/* Form */}
        {showAddTask && <Form onAdd={addTask} />}
        {/* ../ Form */}

        {/* Tasks */}
        <div className='tasks-container mt-6 mb-8'>
          <h4 className='text-sm'>You have {tasks.length} tasks</h4>
          <Tasks tasks={tasks} onDelete={deleteTask} />
        </div>
        {/*  ../ Tasks */}
      </div>
    </div>
  )
}

export default App

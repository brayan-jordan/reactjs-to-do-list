import Header from "./components/Header"
import Menu from "./components/Menu"
import Task from "./components/Task"
import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([])
  const [count, setCounter] = useState(1)

  const addNewTask = () => {
    setCounter(count + 1)
    setTasks((tasks) => [
      ...tasks,
      {
        id: count,
        isSelected: false,
        description: 'Task'
      },
    ]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id != taskId))
  }

  const changeStatus = (taskId) => {
    const copyTasks = [...tasks]
    const indexOfTask = copyTasks.find(task => task.id == taskId)
    indexOfTask.isSelected = !indexOfTask.isSelected;
    setTasks(copyTasks)
  }

  const editValue = (taskId, desc) => {
    const copyTasks = [...tasks]
    const indexOfTask = copyTasks.find(task => task.id == taskId)
    indexOfTask.description = desc
    setTasks(copyTasks)
  }

  return (
    <>
      <Header />
      <Menu onAddButtonClick={() => addNewTask()} />
      {tasks.map((task) =>
        <Task
          key={'key' + task.id}
          description={task.description}
          isSelected={task.isSelected}
          id={task.id}
          deleteTask={(taskId) => deleteTask(taskId)}
          changeStatus={(taskId) => changeStatus(taskId)}
          editValue={(taskId, desc) => editValue(task.id, desc)}
        />
      )}
    </>
  )
}

export default App

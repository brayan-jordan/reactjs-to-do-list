import Header from "./components/Header"
import Menu from "./components/Menu"
import Task from "./components/Task"
import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([])
  const [filterStatus, setFilterStatus] = useState(0)

  /* Apenas para gerar um ID único (simulando um auto-increment) */
  const [count, setCounter] = useState(1)

  const addNewTask = () => {
    setCounter(count + 1)
    setTasks((tasks) => [
      ...tasks,
      {
        id: count,
        isSelected: false,
        description: 'what is to be done?'
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

  const filterTasks = (status) => {
    setFilterStatus(status.value)
  }

  return (
    <>
      <Header />
      <Menu onAddButtonClick={() => addNewTask()} filterTasks={(status) => filterTasks(status)} />
      {tasks.map((task) =>
        <Task
          key={'key' + task.id}
          description={task.description}
          isSelected={task.isSelected}
          id={task.id}
          deleteTask={(taskId) => deleteTask(taskId)}
          changeStatus={(taskId) => changeStatus(taskId)}
          editValue={(taskId, desc) => editValue(taskId, desc)}
          filterStatus={filterStatus}
        />
      )}
    </>
  )
}

export default App

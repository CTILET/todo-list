import React from "react"
import "./index.css"
import TaskList from "./TaskList"
import { useState } from "react"
import { FaPencilAlt } from "react-icons/fa"
import { MdOutlineAddTask } from "react-icons/md"

export default function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Learn React",
      isComplete: false,
    },
    {
      id: 2,
      title: "Learn Vue",
      isComplete: false,
    },
    {
      id: 3,
      title: "Learn Angular",
      isComplete: false,
    },
  ])
  const [taskText, setTaskText] = useState("")

  function handleOnClick() {
    if (taskText.length > 0) {
      const lastTask = tasks[tasks.length - 1]
      const id = lastTask ? lastTask.id + 1 : 0
      setTasks([
        ...tasks,
        {
          id: id,
          title: taskText,
          isComplete: false,
        },
      ])
    }
    return setTaskText("")
  }

  const [search, setSearch] = useState("")

  return (
    <div className="App">
      <div className="container">
        <h1>TODO List</h1>
        <div className="panel-right">
          <input
            type="text"
            placeholder="введите задачу"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value.trimStart())}
          />
          <button onClick={handleOnClick}>добавить задачу</button>
        </div>
      </div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value.trimStart())}
        className="containerovoz"
        placeholder="поиск задач"
      />

      {tasks
        .filter((task) => task.title.toLowerCase().includes(search.toLowerCase()))
        .map((task, index) => (
          <TaskList
            title={task.title}
            index={task.id}
            key={task.id}
            isComplete={task.isComplete}
            onComplete={() => {
              setTasks(
                tasks.map((oldTask) => {
                  if (task.id === oldTask.id) {
                    return { ...oldTask, isComplete: !oldTask.isComplete }
                  }
                  return oldTask
                })
              )
            }}
            onRename={() => {
              const renameTask = prompt("Введите новое название задачи")

              if (renameTask) {
                setTasks(
                  tasks.map((oldTask) => {
                    if (task.id === oldTask.id) {
                      return { ...oldTask, title: renameTask }
                    }
                    return oldTask
                  })
                )
              }
            }}
            onDelete={() => {
              const isConfirmed = window.confirm(
                `Удалить задачу под №${task.id + 1}?`
              )
              if (isConfirmed) {
                setTasks(
                  tasks.filter((oldTask) => {
                    return task.id !== oldTask.id
                  })
                )
              }
            }}
          />
        ))}
    </div>
  )
}

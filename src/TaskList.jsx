import React from "react"
import "./tasklist.css"
import { useState } from "react"
import { GoTrashcan } from "react-icons/go"
import { FaPencilAlt } from "react-icons/fa"
import { MdCheckBox } from "react-icons/md"
import { MdCheckBoxOutlineBlank } from "react-icons/md"
import { BsCursorFill } from "react-icons/bs"

const TaskList = ({
  title,
  onDelete,
  onRename,
  isComplete,
  onComplete,
  index,
}) => {
  const [cheked, setCheked] = useState(false)

  return (
    <div className="taskList">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          textDecoration: isComplete ? "line-through" : "unset",
        }}
      >
        <h3>{index}</h3>
        <h2>{title}</h2>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <MdCheckBox id="cheker" className="trash" onClick={onComplete} />

        <FaPencilAlt
          className="trash"
          style={{ fontSize: "25px" }}
          onClick={onRename}
        />
        <GoTrashcan className="trash" onClick={onDelete} />
      </div>
    </div>
  )
}

export default TaskList

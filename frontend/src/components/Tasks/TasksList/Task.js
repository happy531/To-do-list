import { useState, useRef, useContext, useEffect } from "react";
import TasksListContext from "../../../store/tasks-list-context";
import TaskDoneButton from "../../UI/Buttons/TaskDoneButton";
import TaskRemoveButton from "../../UI/Buttons/TaskRemoveButton";
import axios from "../../../axios/axios";

import classes from "./Task.module.scss";

const Task = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const ctx = useContext(TasksListContext);
  const editingInputRef = useRef();
  const [taskText, setTaskText] = useState(props.text);

  const removeTaskHandler = async () => {
    //remove on backend
    await axios.delete("/tasks/" + props.id);
    //remove on front
    ctx.removeTask(props.id);
  };

  const compleateTaskHandler = async () => {
    //compleate on backend
    await axios.post("/compleated-tasks/", {
      text: taskText,
    });
    await axios.delete("/tasks/" + props.id);

    //compleate on frontend
    ctx.compleateTask(props.id);
  };

  const handleTaskEditing = async () => {
    //edit on backend
    const res = await axios.put("/tasks/" + props.id, {
      _id: props.id,
      text: editingInputRef.current.value,
    });

    //edit on front
    setIsEditing(false);
    setTaskText(res.data.text);
    ctx.editTask(res.data._id, res.data.text);

    //if edited text is empty
    if (!res.data.text.trim()) {
      //remove on backend
      await axios.delete("/tasks/" + props.id);
      //remove on front
      ctx.removeTask(props.id);
    }
  };

  //immidietly focus input after click on task text (label)
  useEffect(() => {
    if (isEditing) editingInputRef.current.focus();
  }, [isEditing]);

  return (
    <li className={classes.tasks}>
      <div>
        <TaskDoneButton onClick={compleateTaskHandler} />
      </div>
      {!isEditing ? (
        <label
          htmlFor={"task-text"}
          className={classes["task-text"]}
          onClick={() => {
            setIsEditing(true);
          }}
        >
          {taskText}
        </label>
      ) : (
        <input
          className={classes["task-editing-input"]}
          id={"task-text"}
          type="text"
          autoComplete="off"
          defaultValue={taskText}
          ref={editingInputRef}
          onBlur={handleTaskEditing}
        ></input>
      )}
      <TaskRemoveButton
        className={classes.remove}
        onClick={removeTaskHandler}
      />
    </li>
  );
};

export default Task;

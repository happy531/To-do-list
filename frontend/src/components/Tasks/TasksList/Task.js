import { useState, useRef, useContext, useEffect } from "react";
import TasksListContext from "../../../store/tasks-list-context";
import ToggleButton from "../../UI/Buttons/ToggleButton";
import RemoveButton from "../../UI/Buttons/RemoveButton";
import axios from "../../../axios/axios";

import classes from "./Task.module.scss";

const Task = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isDone, setIsDone] = useState(props.isDone);

  const ctx = useContext(TasksListContext);
  const editingInputRef = useRef();
  const [taskText, setTaskText] = useState(props.text);

  const handleRemoveTask = async () => {
    //remove on backend
    await axios.delete("/tasks/" + props.id);
    //remove on front
    ctx.removeTask(props.id);
  };

  const handleToggleTask = async () => {
    setIsDone((prev)=>!prev);
    //do on backend
    await axios.put("/tasks/" + props.id + "/toggle-do", {
      isDone: !isDone,
    });

    //do on frontend
    ctx.doTask(props.id);
  };

  const handleTaskEdit = async () => {
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

  //immediately focus input after click on task text (label)
  useEffect(() => {
    if (isEditing) editingInputRef.current.focus();
  }, [isEditing]);

  return (
    <li className={`${classes.task} ${props.isDone ? classes.done : ""}`}>
      <div>
        <ToggleButton onClick={handleToggleTask} isDone={isDone} />
      </div>
      {!isEditing ? (
        <label
          htmlFor={"task-text"}
          className={classes["task-text"]}
          onClick={() => {
            if(!isDone) setIsEditing(true);
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
          onBlur={handleTaskEdit}
        ></input>
      )}
      <RemoveButton
        className={classes.remove}
        onClick={handleRemoveTask}
      />
    </li>
  );
};

export default Task;

import { useState, useRef, useContext, useEffect } from "react";
import TasksListContext from "../../store/tasks-list-context";
import TaskDoneButton from "../../UI/Buttons/TaskDoneButton";
import TaskRemoveButton from "../../UI/Buttons/TaskRemoveButton";

import classes from "./Task.module.scss";

const Task = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const ctx = useContext(TasksListContext);
  const editingInputRef = useRef();
  const [taskText, setTaskText] = useState(props.text);

  const removeTaskHandler = () => {
    ctx.removeTask(props.id);
  };

  const compleateTaskHandler = () => {
    if (!isEditing) ctx.compleateTask(props.id);
  };

  const handleTaskEditing = () => {
    setIsEditing((prev) => !prev);
    setTaskText(editingInputRef.current.value);
    ctx.editTask(props.id, editingInputRef.current.value);
    if (editingInputRef.current.value.trim().length === 0)
      ctx.removeTask(props.id);
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
            setIsEditing((prev) => !prev);
          }}
        >
          {taskText}
        </label>
      ) : (
        <input
          className={classes["task-editing-input"]}
          id={"task-text"}
          type="text"
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

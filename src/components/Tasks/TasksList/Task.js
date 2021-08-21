import { Fragment, useState, useRef, useContext, useEffect } from "react";
import TasksListContext from "../../store/tasks-list-context";
import TaskDoneButton from "../../UI/Buttons/TaskDoneButton";
import TaskOptionsButton from "../../UI/Buttons/TaskOptionsButton";
import Card from "../../UI/Card/Card";

import classes from "./Task.module.css";

const Task = (props) => {
  const [showOptionsButton, setShowOptionsButton] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const ctx = useContext(TasksListContext);
  const editingInputRef = useRef();
  const [taskText, setTaskText] = useState(props.text);

  const removeTaskHandler = () => {
    ctx.removeTask(props.id);
  };
  const compleateTaskHandler = () => {
    if (!isEditing) ctx.compleateTask(props.id);
    console.log(isEditing);
  };
  const showOptionsHandler = () => {
    setShowOptions((prev) => !prev);
  };

  const handleTaskEditing = () => {
    setIsEditing((prev) => !prev);
    setTaskText(editingInputRef.current.value);
    ctx.editTask(props.id, editingInputRef.current.value);
  };

  //immidietly focus input after clink on task text (label)
  useEffect(() => {
    if (isEditing) editingInputRef.current.focus();
  }, [isEditing]);

  return (
    <Fragment>
      <li
        onMouseOver={() => setShowOptionsButton(true)}
        onMouseLeave={() =>
          showOptions ? setShowOptionsButton(true) : setShowOptionsButton(false)
        }
      >
        <div>
          <TaskDoneButton disabled={isEditing} onClick={compleateTaskHandler} />
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
        <div>
          {showOptionsButton && (
            <TaskOptionsButton
              className={classes.options}
              onClick={showOptionsHandler}
            />
          )}
        </div>
        {showOptions && (
          <Card className={classes.menu}>
            <button onClick={removeTaskHandler}>Delete</button>
            <button>Sub task(inc)</button>
          </Card>
        )}
      </li>
    </Fragment>
  );
};

export default Task;

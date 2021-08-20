import { Fragment, useState, useRef, useContext } from "react";
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
    ctx.compleateTask(props.id);
  };
  const showOptionsHandler = () => {
    setShowOptions((prev) => !prev);
  };
  return (
    <Fragment>
      <li
        onMouseOver={() => setShowOptionsButton(true)}
        onMouseLeave={() =>
          showOptions ? setShowOptionsButton(true) : setShowOptionsButton(false)
        }
      >
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
            defaultValue={taskText}
            ref={editingInputRef}
            onBlur={() => {
              setIsEditing(false);
              setTaskText(editingInputRef.current.value);
              ctx.editTask(props.id, editingInputRef.current.value);
            }}
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

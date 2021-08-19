import { Fragment, useState } from "react";
import TaskDoneButton from "../../UI/Buttons/TaskDoneButton";
import TaskOptionsButton from "../../UI/Buttons/TaskOptionsButton";
import Card from "../../UI/Card/Card";

import classes from "./Task.module.css";

const Task = (props) => {
  const [showOptionsButton, setShowOptionsButton] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  const removeTaskHandler = () => {
    props.onRemoveTask(props.id);
  };
  const compleateTaskHandler = () => {
    props.onCompleateTask(props.id);
  };
  const showOptionsHandler = () => {
    setShowOptions((prev) => !prev);
  };
  return (
    <Fragment>
      <li
        onMouseEnter={() => setShowOptionsButton(true)}
        onMouseLeave={() =>
          showOptions ? setShowOptionsButton(true) : setShowOptionsButton(false)
        }
      >
        <div>
          <TaskDoneButton onClick={compleateTaskHandler} />
        </div>
        <label className={classes["task-text"]}>{props.text}</label>
        <div>
          {showOptionsButton && (
            <TaskOptionsButton onClick={showOptionsHandler} />
          )}
        </div>
        {showOptions && (
          <Card className={classes.menu}>
            <button onClick={removeTaskHandler}>Delete</button>
            <button>Sub task</button>
          </Card>
        )}
      </li>
    </Fragment>
  );
};

export default Task;

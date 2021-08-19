import TaskDoneButton from "../../UI/Buttons/TaskDoneButton";
import TaskRemoveButton from "../../UI/Buttons/TaskRemoveButton";

import classes from "./Task.module.css";

const Task = (props) => {
  const removeTaskHandler = () => {
    props.onRemoveTask(props.id);
  };
  const compleateTaskHandler = () => {
    props.onCompleateTask(props.id);
  };
  return (
    <li>
      <div className={classes["accept-btn"]}>
        <TaskDoneButton onClick={compleateTaskHandler} />
      </div>
      <label className={classes["task-text"]}>{props.text}</label>
      <div className={classes["delete-btn"]}>
        <TaskRemoveButton onClick={removeTaskHandler} />
      </div>
    </li>
  );
};

export default Task;

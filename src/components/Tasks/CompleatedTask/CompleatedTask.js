import TaskDoneButton from "../../UI/Buttons/TaskDoneButton";
import TaskRemoveButton from "../../UI/Buttons/TaskRemoveButton";
import classes from "./CompleatedTask.module.scss";

const CompleatedTask = (props) => {
  return (
    <li className={classes["compleated-tasks"]}>
      <div>
        <TaskDoneButton className={classes.undo} />
      </div>
      <label className={classes["task-text"]}>{props.text}</label>
      <TaskRemoveButton className={classes.remove} />
    </li>
  );
};

export default CompleatedTask;

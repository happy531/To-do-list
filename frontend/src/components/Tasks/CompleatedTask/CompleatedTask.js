import { useContext } from "react";
import TasksListContext from "../../../store/tasks-list-context";
import TaskDoneButton from "../../UI/Buttons/TaskDoneButton";
import TaskRemoveButton from "../../UI/Buttons/TaskRemoveButton";

import classes from "./CompleatedTask.module.scss";

const CompleatedTask = (props) => {
  const ctx = useContext(TasksListContext);

  const removeTaskHandler = () => {
    ctx.removeTask(props.id);
  };

  const handleUndoTaskCompleation = () => {
    ctx.undoCompleateTask(props.id);
  };

  return (
    <li className={classes["compleated-tasks"]}>
      <div>
        <TaskDoneButton
          className={classes.undo}
          onClick={handleUndoTaskCompleation}
        />
      </div>
      <label className={classes["task-text"]}>{props.text}</label>
      <TaskRemoveButton
        className={classes.remove}
        onClick={removeTaskHandler}
      />
    </li>
  );
};

export default CompleatedTask;

import { useContext } from "react";
import TasksListContext from "../../../store/tasks-list-context";
import TaskDoneButton from "../../UI/Buttons/TaskDoneButton";
import TaskRemoveButton from "../../UI/Buttons/TaskRemoveButton";
import axios from "../../../axios/axios";

import classes from "./CompleatedTask.module.scss";

const CompleatedTask = (props) => {
  const ctx = useContext(TasksListContext);

  const removeTaskHandler = async () => {
    //remove on backend
    await axios.delete("/compleated-tasks/" + props.id);
    //remove on front
    ctx.removeTask(props.id);
  };

  const handleUndoTaskCompleation = async () => {
    //undo on back
    // await axios.post("/tasks/" + props.id);
    // await axios.delete("/compleated-tasks/" + props.id);

    //undo on front
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

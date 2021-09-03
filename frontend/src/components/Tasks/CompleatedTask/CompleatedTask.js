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
    const res = await axios.post("/tasks/", {
      text: props.text,
    });
    await axios.delete("/compleated-tasks/" + props.id);

    const undoTask = res.data;

    //undo on front
    ctx.undoCompleateTask(undoTask);
  };

  return (
    <li className={classes["compleated-task"]}>
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

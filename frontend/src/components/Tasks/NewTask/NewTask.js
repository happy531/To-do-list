import { useRef, useContext } from "react";
import TasksListContext from "../../../store/tasks-list-context";
import Card from "../../UI/Card/Card";
import axios from "../../../axios/axios";

import classes from "./NewTask.module.scss";

const NewTask = (props) => {
  const ctx = useContext(TasksListContext);
  const inputRef = useRef();

  const addNewTaskHandler = async (event) => {
    event.preventDefault();

    const taskText = inputRef.current.value;
    if (taskText.trim().length === 0) return;

    //add to backend
    const res = await axios.post("/tasks/", {
      text: taskText,
      isDone: false,
    });
    const newTask = res.data;

    //add to front
    ctx.addTask(newTask);

    inputRef.current.value = "";
  };

  return (
    <Card className={classes.input}>
      <form
        className={classes["input-form"]}
        onSubmit={addNewTaskHandler}
        autoComplete="off"
      >
        <input
          className={classes["user-input"]}
          id="taskname"
          type="text"
          placeholder="What's your new task?"
          ref={inputRef}
        ></input>
      </form>
    </Card>
  );
};

export default NewTask;

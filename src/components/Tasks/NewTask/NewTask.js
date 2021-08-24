import { useState, useRef, useContext } from "react";
import TasksListContext from "../../store/tasks-list-context";
import Card from "../../UI/Card/Card";

import classes from "./NewTask.module.scss";

const NewTask = (props) => {
  const [inputIsValid, setInputIsValid] = useState(true);
  const ctx = useContext(TasksListContext);
  const inputRef = useRef();

  const addNewTaskHandler = (event) => {
    event.preventDefault();

    const taskText = inputRef.current.value;
    if (taskText.trim().length === 0) {
      setInputIsValid(false);
      setTimeout(() => {
        setInputIsValid(true);
      }, 1250);
      return;
    }
    ctx.addTask(taskText);

    inputRef.current.value = "";
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addNewTaskHandler}>
        <input
          id="taskname"
          type="text"
          placeholder={
            inputIsValid
              ? "What's your new task?"
              : "You're trying to add an empty task"
          }
          ref={inputRef}
        ></input>
      </form>
    </Card>
  );
};

export default NewTask;

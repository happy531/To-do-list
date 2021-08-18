import { useState, useRef } from "react";
import Card from "../../UI/Card/Card";
import classes from "./NewTask.module.css";

const NewTask = (props) => {
  const [inputIsValid, setInputIsValid] = useState(true);
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
    props.onAddNewTask(taskText);

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
          // value={}
          ref={inputRef}
        ></input>
      </form>
    </Card>
  );
};

export default NewTask;

import { useState, useContext, useLayoutEffect, useRef } from "react";
import TasksListContext from "../../../store/tasks-list-context";
import Card from "../../UI/Card/Card";
import CompleatedTask from "./CompleatedTask";

import classes from "./CompleatedTasksList.module.scss";

const CompleatedTasksList = (props) => {
  const ctx = useContext(TasksListContext);

  const [showCompleated, setShowCompleated] = useState(false);
  const [svgAnimation, setSvgAnimation] = useState("bi bi-caret-down-fill");

  const showCompleatedTasks = () => {
    setShowCompleated((prevState) => !prevState);
  };

  const firstUpdate = useRef(true);
  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    setSvgAnimation(
      `bi bi-caret-down-fill ${
        showCompleated ? classes.rotate : classes["rotate-back"]
      }`
    );
  }, [showCompleated]);

  return (
    <Card className={classes["compleated-tasks"]}>
      <div
        className={classes["compleated-tasks-content"]}
        onClick={showCompleatedTasks}
      >
        <p>Compleated tasks</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className={svgAnimation}
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </div>
      {showCompleated && (
        <ul>
          {ctx.compleatedTasksList.map((task) => (
            <CompleatedTask key={task.id} id={task.id} text={task.text} />
          ))}
        </ul>
      )}
    </Card>
  );
};

export default CompleatedTasksList;

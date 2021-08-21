import { useState, useContext, useLayoutEffect, useRef } from "react";
import TasksListContext from "../../store/tasks-list-context";
import Card from "../../UI/Card/Card";
import CompleatedTask from "./CompleatedTask";
import classes from "./CompleatedTaskStorage.module.css";

const CompleatedTaskStorage = (props) => {
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
    <Card className={classes.storage}>
      <div className={classes["storage-content"]} onClick={showCompleatedTasks}>
        <p>Compleated tasks</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className={svgAnimation}
          viewBox="0 0 16 16"
        >
          <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
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

export default CompleatedTaskStorage;

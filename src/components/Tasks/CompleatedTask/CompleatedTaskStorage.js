import { useState } from "react";
import Card from "../../UI/Card/Card";
import CompleatedTask from "./CompleatedTask";
import classes from "./CompleatedTaskStorage.module.css";

const CompleatedTaskStorage = (props) => {
  const [showCompleated, setShowCompleated] = useState(false);

  const showCompleatedTasks = () => {
    setShowCompleated((prevState) => !prevState);
  };

  return (
    <Card className={classes.storage}>
      <div className={classes["storage-content"]} onClick={showCompleatedTasks}>
        <p>Compleated tasks</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-caret-down-fill"
          viewBox="0 0 16 16"
        >
          <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
        </svg>
      </div>
      {showCompleated && (
        <ul>
          {props.compleatedTasks.map((task) => (
            <CompleatedTask key={task.id} id={task.id} text={task.text} />
          ))}
        </ul>
      )}
    </Card>
  );
};

export default CompleatedTaskStorage;

import { useContext } from "react";
import Task from "./Task";
import Card from "../../UI/Card/Card";
import TasksListContext from "../../../store/tasks-list-context";

import classes from "./TasksList.module.scss";

const TasksList = (props) => {
  const ctx = useContext(TasksListContext);

  return (
    <Card className={classes.tasks}>
      <ul className={classes["tasks-list"]}>
        {ctx.tasksList.map((task, index) => (
          <Task key={`${task.id}${index}`} id={task.id} text={task.text} isDone={task.isDone} />
        ))}
      </ul>
    </Card>
  );
};

export default TasksList;

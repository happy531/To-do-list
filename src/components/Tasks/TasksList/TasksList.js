import { useContext } from "react";
import Task from "./Task";
import Card from "../../UI/Card/Card";
import TasksListContext from "../../store/tasks-list-context";

import classes from "./TasksList.module.css";

const TasksList = (props) => {
  const ctx = useContext(TasksListContext);

  return (
    <Card className={classes.tasks}>
      <ul>
        {ctx.tasksList.map((task) => (
          <Task key={task.id} id={task.id} text={task.text} />
        ))}
      </ul>
    </Card>
  );
};

export default TasksList;

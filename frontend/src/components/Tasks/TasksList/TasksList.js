import { useContext, useEffect, useCallback } from "react";
import Task from "./Task";
import Card from "../../UI/Card/Card";
import TasksListContext from "../../../store/tasks-list-context";
import axios from "../../../axios/axios";

import classes from "./TasksList.module.scss";

const TasksList = (props) => {
  const ctx = useContext(TasksListContext);

  const handleTaskFetch = useCallback(
    (tasks) => {
      ctx.fetchTasks(tasks);
    },
    [ctx]
  );

  useEffect(() => {
    async function fetchTasks() {
      const res = await axios.get("/tasks");
      const tasks = res.data;
      handleTaskFetch(tasks);
    }
    fetchTasks();
  }, [handleTaskFetch]);

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

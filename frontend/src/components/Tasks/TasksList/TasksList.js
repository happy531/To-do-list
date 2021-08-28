import { useContext, useEffect } from "react";
import Task from "./Task";
import Card from "../../UI/Card/Card";
import TasksListContext from "../../store/tasks-list-context";
import axios from "axios";

import classes from "./TasksList.module.scss";

const TasksList = (props) => {
  const ctx = useContext(TasksListContext);

  useEffect(() => {
    async function fetchTasks() {
      const res = await axios.get("http://localhost:3001/api/tasks");
      console.log(res);
      const tasks = res.data;
      ctx.fetchTasks(tasks);
    }
    fetchTasks();
  }, []);

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

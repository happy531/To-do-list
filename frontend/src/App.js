import { Fragment, useContext, useCallback, useEffect } from "react";
import CompleatedTasksList from "./components/Tasks/CompleatedTask/CompleatedTasksList";
import NewTask from "./components/Tasks/NewTask/NewTask";
import TasksList from "./components/Tasks/TasksList/TasksList";
import TasksListContext from "./store/tasks-list-context";
import axios from "./axios/axios";

function App() {
  const ctx = useContext(TasksListContext);

  // fetch tasks and compleated tasks
  const handleTaskFetch = useCallback(
    (tasks, compleatedTasks) => {
      ctx.fetchTasks(tasks, compleatedTasks);
    },
    [ctx]
  );
  useEffect(() => {
    async function fetchTasks() {
      const res = await axios.get("/tasks");
      const tasks = res.data;

      const res2 = await axios.get("/compleated-tasks");
      const compleatedTasks = res2.data;

      handleTaskFetch(tasks, compleatedTasks);
    }
    fetchTasks();
  }, [handleTaskFetch]);

  return (
    <Fragment>
      <NewTask />
      <TasksList />
      <CompleatedTasksList />
    </Fragment>
  );
}

export default App;

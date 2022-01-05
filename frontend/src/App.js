import { useContext, useEffect } from "react";
import NewTask from "./components/Tasks/NewTask/NewTask";
import TasksList from "./components/Tasks/TasksList/TasksList";
import TasksListContext from "./store/tasks-list-context";
import axios from "./axios/axios";

function App() {
  const ctx = useContext(TasksListContext);

  // fetch tasks
  useEffect(() => {
    async function fetchTasks() {
      const res = await axios.get("/tasks");
      const tasks = res.data;
      ctx.fetchTasks(tasks);
    }
    fetchTasks();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <NewTask />
      <TasksList />
    </>
  );
}

export default App;

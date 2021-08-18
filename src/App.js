import { useState, Fragment } from "react";
import NewTask from "./components/Tasks/NewTask";
import TasksList from "./components/Tasks/TasksList";

function App() {
  const [tasks, setTasks] = useState([
    { id: Math.random().toString(), text: "do the dishes" },
  ]);

  return (
    <Fragment>
      <NewTask />
      <TasksList tasks={tasks} />
    </Fragment>
  );
}

export default App;

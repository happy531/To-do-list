import { useState, Fragment } from "react";
import NewTask from "./components/Tasks/NewTask";
import TasksList from "./components/Tasks/TasksList";

function App() {
  const [tasks, setTasks] = useState([
    { id: Math.random().toString(), text: "Your first task" },
    { id: Math.random().toString(), text: "Your second task" },
  ]);

  const addNewTaskHandler = (text) => {
    setTasks((prevTasksState) => {
      return [...prevTasksState, { id: Math.random().toString(), text: text }];
    });
  };

  const removeTaskHandler = (id) => {
    const newList = tasks.filter((task) => task.id !== id);
    setTasks(newList);
  };

  return (
    <Fragment>
      <NewTask onAddNewTask={addNewTaskHandler} />
      <TasksList onRemoveTask={removeTaskHandler} tasks={tasks} />
    </Fragment>
  );
}

export default App;

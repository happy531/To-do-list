import { useState, Fragment } from "react";
import CompleatedTaskStorage from "./components/Tasks/CompleatedTask/CompleatedTaskStorage";
import NewTask from "./components/Tasks/NewTask/NewTask";
import TasksList from "./components/Tasks/TasksList/TasksList";

function App() {
  const [tasks, setTasks] = useState([
    { id: Math.random().toString(), text: "Your first task" },
    { id: Math.random().toString(), text: "Your second task" },
  ]);

  const [compleatedTasks, setCompleatedTasks] = useState([
    { id: Math.random().toString(), text: "Your first compleated task" },
    { id: Math.random().toString(), text: "Your second compleated task" },
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
      <CompleatedTaskStorage />
    </Fragment>
  );
}

export default App;

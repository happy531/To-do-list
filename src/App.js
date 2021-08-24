import TasksListProvider from "./components/store/TasksListProvider";
import CompleatedTasksList from "./components/Tasks/CompleatedTask/CompleatedTasksList";
import NewTask from "./components/Tasks/NewTask/NewTask";
import TasksList from "./components/Tasks/TasksList/TasksList";

function App() {
  return (
    <TasksListProvider>
      <NewTask />
      <TasksList />
      <CompleatedTasksList />
    </TasksListProvider>
  );
}

export default App;

import TasksListProvider from "./components/store/TasksListProvider";
import CompleatedTaskStorage from "./components/Tasks/CompleatedTask/CompleatedTaskStorage";
import NewTask from "./components/Tasks/NewTask/NewTask";
import TasksList from "./components/Tasks/TasksList/TasksList";

function App() {
  return (
    <TasksListProvider>
      <NewTask />
      <TasksList />
      <CompleatedTaskStorage />
    </TasksListProvider>
  );
}

export default App;

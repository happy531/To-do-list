import { useReducer } from "react";
import TasksListContext from "./tasks-list-context";

const defaultTasksListState = {
  tasksList: [],
};

const tasksListReducer = (state, action) => {
  if (action.type === "ADD") {
    // return {
    //   tasksList:
    // };
  }
  if (action.type === "COMPLEATE") {
  }
  if (action.type === "REMOVE") {
  }

  return defaultTasksListState;
};

const TasksListProvider = (props) => {
  const [tasksListState, dispatch] = useReducer(
    tasksListReducer,
    defaultTasksListState
  );

  const addTaskToListHandler = (item) => {
    dispatch({ type: "ADD", item: item });
  };
  const compleateTaskFromListHandler = (id) => {
    dispatch({ type: "COMPLEATE", id: id });
  };
  const removeTaskFromListHandler = (id) => {
    dispatch({ type: "REMOVE", id: id });
  };

  const tasksListContext = {
    items: tasksListState.tasksList,
    addTask: addTaskToListHandler,
    compleateTask: compleateTaskFromListHandler,
    removeTask: removeTaskFromListHandler,
  };

  return (
    <TasksListContext.Provider value={tasksListContext}>
      {props.children}
    </TasksListContext.Provider>
  );
};

export default TasksListProvider;

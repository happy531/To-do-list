import { useReducer } from "react";
import TasksListContext from "./tasks-list-context";

const defaultTasksListState = {
  tasksList: [
    { id: Math.random().toString(), text: "Your first task" },
    { id: Math.random().toString(), text: "Your second task" },
  ],
  compleatedTasksList: [
    { id: Math.random().toString(), text: "Your first compleated task" },
    { id: Math.random().toString(), text: "Your second compleated task" },
  ],
};

const tasksListReducer = (state, action) => {
  if (action.type === "ADD") {
    const newList = [
      ...state.tasksList,
      { id: Math.random().toString(), text: action.text },
    ];

    return {
      tasksList: newList,
      compleatedTasksList: [...state.compleatedTasksList],
    };
  }
  if (action.type === "COMPLEATE") {
    const newList = state.tasksList.filter((task) => task.id !== action.id);
    const [compleatedTask] = state.tasksList.filter(
      (task) => task.id === action.id
    );
    return {
      tasksList: newList,
      compleatedTasksList: [...state.compleatedTasksList, compleatedTask],
    };
  }
  if (action.type === "REMOVE") {
    const newList = state.tasksList.filter((task) => task.id !== action.id);
    return {
      tasksList: newList,
      compleatedTasksList: [...state.compleatedTasksList],
    };
  }
  if (action.type === "EDIT") {
    const newList = state.tasksList;
    for (var i in newList) {
      if (newList[i].id === action.id) {
        newList[i].text = action.text;
        break;
      }
    }
    return {
      tasksList: newList,
      compleatedTasksList: [...state.compleatedTasksList],
    };
  }

  return defaultTasksListState;
};

const TasksListProvider = (props) => {
  const [tasksListState, dispatch] = useReducer(
    tasksListReducer,
    defaultTasksListState
  );

  const addTaskToListHandler = (text) => {
    dispatch({ type: "ADD", text: text });
  };
  const compleateTaskFromListHandler = (id) => {
    dispatch({ type: "COMPLEATE", id: id });
  };
  const removeTaskFromListHandler = (id) => {
    dispatch({ type: "REMOVE", id: id });
  };
  const editTaskHandler = (id, text) => {
    dispatch({ type: "EDIT", id: id, text: text });
  };

  const tasksListContext = {
    tasksList: tasksListState.tasksList,
    compleatedTasksList: tasksListState.compleatedTasksList,
    addTask: addTaskToListHandler,
    compleateTask: compleateTaskFromListHandler,
    removeTask: removeTaskFromListHandler,
    editTask: editTaskHandler,
  };

  return (
    <TasksListContext.Provider value={tasksListContext}>
      {props.children}
    </TasksListContext.Provider>
  );
};

export default TasksListProvider;

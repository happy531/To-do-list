import { useReducer } from "react";
import TasksListContext from "./tasks-list-context";

const defaultTasksListState = {
  tasksList: [],
  compleatedTasksList: [
    { id: Math.random().toString(), text: "buy a milk" },
    { id: Math.random().toString(), text: "finish the frontend" },
  ],
};

const tasksListReducer = (state, action) => {
  if (action.type === "FETCH-TASKS") {
    const newList = [];

    action.tasks.forEach((task) =>
      newList.push({ id: task._id, text: task.text })
    );

    return {
      tasksList: newList,
      compleatedTasksList: [...state.compleatedTasksList],
    };
  }

  if (action.type === "ADD") {
    const newList = [
      ...state.tasksList,
      { id: action.task._id, text: action.task.text },
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
    const newCompleatedList = state.compleatedTasksList.filter(
      (task) => task.id !== action.id
    );
    return {
      tasksList: newList,
      compleatedTasksList: newCompleatedList,
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
  if (action.type === "UNDO") {
    const newCompleatedList = state.compleatedTasksList.filter(
      (task) => task.id !== action.id
    );
    const [undoTask] = state.compleatedTasksList.filter(
      (task) => task.id === action.id
    );
    const newList = [
      ...state.tasksList,
      { id: undoTask.id, text: undoTask.text },
    ];
    return {
      tasksList: newList,
      compleatedTasksList: newCompleatedList,
    };
  }

  return defaultTasksListState;
};

const TasksListProvider = (props) => {
  const [tasksListState, dispatch] = useReducer(
    tasksListReducer,
    defaultTasksListState
  );

  const addTaskToListHandler = (task) => {
    dispatch({ type: "ADD", task: task });
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
  const undoTaskCompleateHandler = (id) => {
    dispatch({ type: "UNDO", id: id });
  };
  const fetchTasks = (tasks) => {
    dispatch({ type: "FETCH-TASKS", tasks: tasks });
  };

  const tasksListContext = {
    tasksList: tasksListState.tasksList,
    compleatedTasksList: tasksListState.compleatedTasksList,
    addTask: addTaskToListHandler,
    compleateTask: compleateTaskFromListHandler,
    removeTask: removeTaskFromListHandler,
    editTask: editTaskHandler,
    undoCompleateTask: undoTaskCompleateHandler,
    fetchTasks: fetchTasks,
  };

  return (
    <TasksListContext.Provider value={tasksListContext}>
      {props.children}
    </TasksListContext.Provider>
  );
};

export default TasksListProvider;

import { useReducer } from "react";
import TasksListContext from "./tasks-list-context";

const defaultTasksListState = {
  tasksList: [],
};

const tasksListReducer = (state, action) => {
  if (action.type === "FETCH-TASKS") {
    const newList = [];

    action.tasks.forEach((task) =>
      newList.push({ id: task._id, text: task.text, isDone: task.isDone })
    );

    console.log(newList);

    return {
      tasksList: newList,
    };
  }

  if (action.type === "ADD") {
    const newList = [
      ...state.tasksList,
      { id: action.task._id, text: action.task.text },
    ];
    return {
      tasksList: newList,
    };
  }
  if (action.type === "TOGGLE-DO") {
    const index = state.tasksList.findIndex((task) => task.id === action.id);
    const list = state.tasksList;
    list[index].isDone = !list[index].isDone;

    return {
      tasksList: list,
    };
  }
  if (action.type === "REMOVE") {
    const newList = state.tasksList.filter((task) => task.id !== action.id);

    return {
      tasksList: newList,
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
    };
  }

  return defaultTasksListState;
};

const TasksListProvider = (props) => {
  const [tasksListState, dispatch] = useReducer(
    tasksListReducer,
    defaultTasksListState
  );

  const handleAddTask = (task) => {
    dispatch({ type: "ADD", task: task });
  };
  const handleToggleTask = (id) => {
    dispatch({ type: "TOGGLE-DO", id: id });
  };
  const handleRemoveTask = (id) => {
    dispatch({ type: "REMOVE", id: id });
  };
  const handleEditTask = (id, text) => {
    dispatch({ type: "EDIT", id: id, text: text });
  };
  const handleFetchTasks = (tasks) => {
    dispatch({
      type: "FETCH-TASKS",
      tasks: tasks,
    });
  };

  const context = {
    tasksList: tasksListState.tasksList,
    addTask: handleAddTask,
    doTask: handleToggleTask,
    removeTask: handleRemoveTask,
    editTask: handleEditTask,
    fetchTasks: handleFetchTasks,
  };

  return (
    <TasksListContext.Provider value={context}>
      {props.children}
    </TasksListContext.Provider>
  );
};

export default TasksListProvider;

import React from "react";

const TasksListContext = React.createContext({
  tasksList: [],
  compleatedTasksList: [],
  addTask: (task) => {},
  compleateTask: (id) => {},
  removeTask: (id) => {},
  editTask: (id, text) => {},
  undoCompleateTask: (id) => {},
  fetchTasks: (tasks, compleatedTasks) => {},
});

export default TasksListContext;

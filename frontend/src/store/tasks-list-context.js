import React from "react";

const TasksListContext = React.createContext({
  tasksList: [],
  addTask: (task) => {},
  toggleDoTask: (id) => {},
  removeTask: (id) => {},
  editTask: (id, text) => {},
  fetchTasks: (tasks) => {},
});

export default TasksListContext;

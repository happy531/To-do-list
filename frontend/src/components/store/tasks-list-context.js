import React from "react";

const TasksListContext = React.createContext({
  tasksList: [],
  compleatedTasksList: [],
  addTask: (item) => {},
  compleateTask: (id) => {},
  removeTask: (id) => {},
  editTask: (id, text) => {},
  undoCompleateTask: (id) => {},
});

export default TasksListContext;

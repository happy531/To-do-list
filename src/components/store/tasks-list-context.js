import React from "react";

const TasksListContext = React.createContext({
  tasksList: [],
  compleatedTasksList: [],
  addTask: (item) => {},
  compleateTask: (id) => {},
  removeTask: (id) => {},
  editTask: (id, text) => {},
});

export default TasksListContext;

import React from "react";

const TasksListContext = React.createContext({
  tasksList: [],
  addTask: (item) => {},
  compleateTask: (id) => {},
  removeTask: (id) => {},
});

export default TasksListContext;

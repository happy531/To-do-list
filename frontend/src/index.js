import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import TasksListProvider from "./store/TasksListProvider";

ReactDOM.render(
  <React.StrictMode>
    <TasksListProvider>
      <App />
    </TasksListProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

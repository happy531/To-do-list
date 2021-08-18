import Task from "./Task";
import Card from "../UI/Card";
import classes from "./TasksList.module.css";

const TasksList = (props) => {
  const removeTaskHandler = (id) => {
    props.onRemoveTask(id);
  };

  return (
    <Card
      className={`${classes.tasks} ${
        props.tasks.length === 0 ? classes.empty : ""
      }`}
    >
      <ul>
        {props.tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            text={task.text}
            onRemoveTask={removeTaskHandler}
          />
        ))}
      </ul>
    </Card>
  );
};

export default TasksList;

import Task from "./Task";
import Card from "../../UI/Card/Card";
import classes from "./TasksList.module.css";

const TasksList = (props) => {
  return (
    <Card className={classes.tasks}>
      <ul>
        {props.tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            text={task.text}
            onRemoveTask={props.onRemoveTask}
            onCompleateTask={props.onCompleateTask}
          />
        ))}
      </ul>
    </Card>
  );
};

export default TasksList;

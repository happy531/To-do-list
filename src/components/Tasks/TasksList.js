import Card from "../UI/Card";
import Task from "./Task";
import classes from "./TasksList.module.css";

const TasksList = (props) => {
  return (
    <Card className={classes.tasks}>
      <ul>
        {props.tasks.map((task) => (
          <Task key={task.id} id={task.id} text={task.text} />
        ))}
      </ul>
    </Card>
  );
};

export default TasksList;

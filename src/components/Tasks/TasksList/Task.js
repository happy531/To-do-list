import TaskDoneButton from "../../UI/Buttons/TaskDoneButton";
import TaskRemoveButton from "../../UI/Buttons/TaskRemoveButton";

const Task = (props) => {
  const removeTaskHandler = () => {
    props.onRemoveTask(props.id);
  };
  const compleateTaskHandler = () => {
    props.onCompleateTask(props.id);
  };
  return (
    <li>
      <p>{props.text}</p>
      <div>
        <TaskDoneButton onClick={compleateTaskHandler} />
        <TaskRemoveButton className={"btn-end"} onClick={removeTaskHandler} />
      </div>
    </li>
  );
};

export default Task;

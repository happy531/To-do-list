import TaskDoneButton from "../../UI/Buttons/TaskDoneButton";
import TaskRemoveButton from "../../UI/Buttons/TaskRemoveButton";

const Task = (props) => {
  const removeTaskHandler = () => {
    props.onRemoveTask(props.id);
  };
  return (
    <li>
      {props.text}
      <div>
        <TaskDoneButton />
        <TaskRemoveButton onClick={removeTaskHandler} />
      </div>
    </li>
  );
};

export default Task;

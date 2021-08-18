const Task = (props) => {
  const removeTaskHandler = () => {
    props.onRemoveTask(props.id);
  };
  return (
    <li>
      {props.text}
      <button onClick={removeTaskHandler}>Delete</button>
    </li>
  );
};

export default Task;

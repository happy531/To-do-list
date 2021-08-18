const Task = (props) => {
  return (
    <li>
      {props.text}
      <button>Delete</button>
    </li>
  );
};

export default Task;

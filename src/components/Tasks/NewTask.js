import Card from "../UI/Card";
import classes from "./NewTask.module.css";

const NewTask = (props) => {
  return (
    <Card className={classes.input}>
      <form>
        <input
          id="taskname"
          type="text"
          placeholder="What's your new goal?"
        ></input>
      </form>
    </Card>
  );
};

export default NewTask;

import Button from "../Ui/Button";
import { useState } from "react";

function Todo(props) {
  let { title, completed } = props;
  // const [detail, setDetail] = useState{
  //   title: title,
  //   completed: false,
  // });

  // let dolistToogled = () => {
  //   completed
  //     ? (this.completed = false)
  //     : !completed
  //     ? (this.completed = true)
  //     : false;
  // };
  return (
    <li
      className={`list-group-item d-flex align-items-center p-2 bd-callout bd-callout-${
        completed ? "success" : "warning"
      } `}
    >
      <span className="flex-grow-1" role={"button"}>
        {title}
      </span>{" "}
      <div className="btn-group">
        <Button color="outline-info">
          <i className={`fas fa-toggle-${completed ? "on" : "off"}`}></i>
        </Button>
        <Button onClick={(event) => props.deleteTodo(props.id)} color="danger">
          {/* <Button onClick={(event) => console.log(props.id)} color="danger"> */}
          <i className="far fa-trash-can"></i>
        </Button>
      </div>
    </li>
  );
}
export default Todo;

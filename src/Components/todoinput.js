import Button from "./Ui/Button";
import { useState } from "react";

function TodoInput(props) {
  //   function CheckshowInpValue() {}
  const [todoTextINP, SettodoTextINP] = useState("");
  console.log(todoTextINP);

  return (
    //React Fragment
    <>
      <div className="input-group shadow">
        <input
          type="text"
          className="form-control "
          placeholder="Enter new todo"
          value={todoTextINP}
          onChange={(event) => SettodoTextINP(event.target.value)}
        />
        <Button onClick={() => props.createTodo(todoTextINP)} color="success">
          <i
            // onClick={() => props.createTodo(todoTextINP)}

            className="fa-solid fa-plus"
          ></i>
        </Button>

        <Button onClick={() => SettodoTextINP("")} color="outline-secondary">
          <i className="fa-solid fa-xmark"></i>
        </Button>
      </div>
      <small className="text-danger"> Title is Require</small>
    </>
  );
}

export default TodoInput;

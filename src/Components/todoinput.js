import Button from "./Ui/Button";
import { useState } from "react";

function TodoInput(props) {
  //   function CheckshowInpValue() {}
  const [todoTextINP, SettodoTextINP] = useState("");
  const [todoEror, SettodoEror] = useState("");
  console.log(todoTextINP);

  return (
    //React Fragment
    <>
      <div className="input-group shadow">
        <input
          type="text"
          className={`form-control ${todoEror ? "is-invalid" : ""}`}
          placeholder="Enter new todo"
          value={todoTextINP}
          onChange={(event) => SettodoTextINP(event.target.value)}
        />
        <Button
          onClick={() => {
            if (!todoTextINP) {
              SettodoEror("Title is Required");
            } else {
              props.createTodo(todoTextINP);
              SettodoTextINP("");
              SettodoEror("");
            }
          }}
          color="success"
        >
          <i className="fa-solid fa-plus"></i>
        </Button>

        <Button onClick={() => SettodoTextINP("")} color="outline-secondary">
          <i className="fa-solid fa-xmark"></i>
        </Button>
      </div>
      {todoEror && <small className="text-danger"> {todoEror}</small>}
      {/* example to more inp */}
      <input
        type="text"
        className={`form-control ${todoEror ? "is-invalid" : ""}`}
        placeholder="Enter new todo"
        value={todoTextINP}
        onChange={(event) => SettodoTextINP(event.target.value)}
      />
      <Button
        onClick={() => {
          if (!todoTextINP) {
            SettodoEror("Title is Required");
          } else {
            props.createTodo(todoTextINP);
            SettodoTextINP("");
            SettodoEror("");
          }
        }}
        color="success"
      >
        <i
          // onClick={() => props.createTodo(todoTextINP)}

          className="fa-solid fa-plus"
        ></i>
      </Button>
      <Button onClick={() => SettodoTextINP("")} color="outline-secondary">
        <i className="fa-solid fa-xmark"></i>
      </Button>
      {todoEror && <small className="text-danger"> {todoEror}</small>}
      //example for more INP//
      <div>
        <input
          type="text"
          className={`form-control ${todoEror ? "is-invalid" : ""}`}
          placeholder="Enter new todo"
          value={todoTextINP}
          onChange={(event) => SettodoTextINP(event.target.value)}
        />
        <Button
          onClick={() => {
            if (!todoTextINP) {
              SettodoEror("Title is Required");
            } else {
              props.createTodo(todoTextINP);
              SettodoTextINP("");
              SettodoEror("");
            }
          }}
          color="success"
        >
          <i className="fa-solid fa-plus"></i>
        </Button>

        <Button onClick={() => SettodoTextINP("")} color="outline-secondary">
          <i className="fa-solid fa-xmark"></i>
        </Button>

        {todoEror && <small className="text-danger"> {todoEror}</small>}
      </div>
    </>
  );
}

export default TodoInput;

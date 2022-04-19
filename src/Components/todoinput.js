import Button from "./Ui/Button";

function TodoInput() {
  //React Fragment
  function CheckshowInpValue() {}
  return (
    <>
      <div className="input-group shadow">
        <input
          type="text"
          className="form-control "
          placeholder="Enter new todo"
          onChange={(event) => event.target.value}
        />
        <Button color="success">
          <i
            onClick={(event) => CheckshowInpValue()}
            className="fa-solid fa-plus"
          ></i>
        </Button>

        <Button color="outline-secondary">
          <i className="fa-solid fa-xmark"></i>
        </Button>
      </div>
      <small className="text-danger"> Title is Require</small>
    </>
  );
}

export default TodoInput;

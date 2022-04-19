import Button from "../Ui/Button";
function Todo(props) {
  let { title, completed } = props;
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
        <Button color="danger">
          <i className="far fa-trash-can"></i>
        </Button>
      </div>
    </li>
  );
}
export default Todo;

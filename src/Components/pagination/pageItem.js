import Button from "../Ui/Button";

function Pageitem(props) {
  return (
    <li
      className={`page-item ${props.active ? "active " : ""} ${
        props.disable ? "disabled" : ""
      }`}
    >
      <button className="page-link shadow-none">{props.children}</button>{" "}
    </li>
  );
}
export default Pageitem;

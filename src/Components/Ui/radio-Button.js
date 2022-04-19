function Radiobut(props) {
  return (
    <>
      <input
        type="radio"
        className="btn-check "
        name={props.name}
        id={props.id}
      />
      <label
        onClick={props.Onclick}
        className={`btn btn-${props.color || "outline-primary"} shadow-none`}
        htmlFor={props.id}
      >
        {props.children}
      </label>
    </>
  );
}
export default Radiobut;

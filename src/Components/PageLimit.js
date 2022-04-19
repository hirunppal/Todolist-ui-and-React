function Pagelim(props) {
  return (
    <div className="d-flex align-items-center mt-4">
      <small style={{ fontSize: "1.2rem" }}>show</small>
      <select className="form-select form sm-2 ms-2" style={{ width: "5rem" }}>
        <option>10</option>
        <option>25</option>
        <option>50</option>
      </select>
    </div>
  );
}
export default Pagelim;

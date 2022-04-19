//เขียนแบบ arrow ก้ได้
import Button from "../Ui/Button";
function FilterSearch() {
  return (
    <div>
      <div className="input-group shadow">
        <input
          placeholder="search"
          type={"text"}
          className="form-control"
        ></input>
        <Button color="dark">
          <i className="fa-solid fa-xmark"></i>
        </Button>
      </div>
    </div>
  );
}
export default FilterSearch;

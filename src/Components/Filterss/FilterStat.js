//เขียนแบบ arrow ก้ได้
import Radiobut from "../Ui/radio-Button";
function FilterStat() {
  return (
    <div className="btn-group ms-1">
      <Radiobut name="status" id="all" color="outline-dark">
        <i className="fa-solid fa-list"></i>
      </Radiobut>
      <Radiobut name="status" id="complete" color="outline-dark">
        <i className="fa-solid fa-clipboard-check"></i>
      </Radiobut>
      <Radiobut name="status" id="nope" color="outline-dark">
        <i className="fa-regular fa-clipboard"></i>
      </Radiobut>
    </div>
  );
}
export default FilterStat;

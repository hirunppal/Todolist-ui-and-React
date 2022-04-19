import Button from "../Ui/Button";
import Filsearch from "./FilterSerch.js";
import FilterStat from "./FilterStat";
//เขียนแบบ arrow ก้ได้
function Filter() {
  return (
    <div>
      <div className="btn-group">
        <Filsearch />
        <FilterStat />
      </div>
    </div>
  );
}
export default Filter;

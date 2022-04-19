import logo from "./logo.svg";
import "./App.css";
import TodoInput from "./Components/todoinput";
import Filter from "./Components/Filterss/Filter.js";
import Pagelim from "./Components/PageLimit";
import Lists from "./Components/todolist/list";
import Peginate from "./Components/pagination/pagination";

const tolo = {
  tittle: "homework",
  completed: true,
};
const todolist = [
  { tittle: "homework", completed: true, id: 1 },
  { tittle: "homework", completed: true, id: 2 },
  { tittle: "homework", completed: true, id: 3 },
];
function App() {
  return (
    <div className="container max-w-xs pt-5">
      <TodoInput />
      <Filter />
      <Pagelim />
      <Lists />
      <Peginate />
    </div>
  );
}

export default App;

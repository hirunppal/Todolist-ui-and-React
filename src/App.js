import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import TodoInput from "./Components/todoinput";
import Filter from "./Components/Filterss/Filter.js";
import Pagelim from "./Components/PageLimit";
import Lists from "./Components/todolist/list";
import Peginate from "./Components/pagination/pagination";
import { v4 as uuidv4 } from "uuid";

const initialtodo = [
  { title: "homework", completed: true, id: uuidv4() },
  { title: "sport", completed: false, id: uuidv4() },
  { title: "gaming", completed: true, id: uuidv4() },
];
// const ThemeContext = React.createContext(themes.light);

function App() {
  const [tololist, Settodolist] = useState(initialtodo);
  // console.log(initialtodo);
  // สร้าง list todo ใหม่
  const createTodo = function (newtitle) {
    const newTodo = { title: newtitle, completed: false, id: uuidv4() };
    const clonetodolistForAdd = [...tololist];
    clonetodolistForAdd.unshift(newTodo);
    Settodolist(clonetodolistForAdd);
    console.log(clonetodolistForAdd);
  };
  // Reset ข้อมูล Text
  // const clearValueinINP = function () {
  //   Settodolist("");
  // }; เอาไปใส่ ใน โค้ต กากระบาทเลย

  return (
    // <ThemeContext.Provider value={anyvalu}>
    <div className="container max-w-xs pt-5">
      <TodoInput createTodo={createTodo} />
      <Filter />
      <Pagelim />
      <Lists tololist={tololist} />
      <Peginate />
    </div>
    // </ThemeContext.Provider>
  );
}

export default App;

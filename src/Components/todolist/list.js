import Todo from "./todo.js";

function Lists() {
  return (
    <div>
      <ul className="list-group mt-4">
        <li class="list-group-item">Morbi leo risus</li>
        <Todo title="Hola" completed={true} />
        <Todo title="Nages" completed={false} />
        <Todo title="ฆwr242sวย" completed={true} />
        <Todo title="ครุม" completed={true} />
      </ul>
    </div>
  );
}
export default Lists;

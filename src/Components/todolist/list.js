import Todo from "./todo.js";

function Lists(props) {
  console.log(props.tololist);
  return (
    <div>
      <ul className="list-group mt-4">
        {props.tololist.map((el) => (
          <Todo
            deleteTodo={props.deleteTodo}
            tololist={props.tololist}
            key={el.id}
            title={el.title}
            completed={el.completed}
            id={el.id}
          />
        ))}
        {/* <li className="list-group-item">Morbi leo risus</li>
        <Todo title="Hola" completed={true} />
        <Todo title="Nages" completed={false} />
        <Todo title="ฆwr242sวย" completed={true} />
        <Todo title="ครุม" completed={true} /> */}
      </ul>
    </div>
  );
}
export default Lists;

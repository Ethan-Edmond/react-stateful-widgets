import React, { useState } from 'react';


const initialList = [
  {
    crossed: false,
    todo: "Walk Dog"
  },
  {
    crossed: false,
    todo: "Fix Washer"
  },
  {
    crossed: true,
    todo: "Finish Todos.js"
  }
];

export default function Todos(props){
  const [todos, setTodos] = useState(initialList);

  const removeTodo = (index) => {
    const first = todos.slice(0,index);
    const last = todos.slice(index + 1);
    setTodos(first.concat(last));
  };

  const crossTodo = (index) => {
    const tempTodos = [...todos];
    tempTodos[index].crossed = true;
    setTodos(tempTodos);
  };

  return (
    <div className='widget-todos container'>
      <h2>Todos</h2>
      <div className='todos'>
      {
        todos.map((todoObj, index) =>
            <div className={(todoObj.crossed) ? "todo crossed" : "todo"} key={index}>
            {todoObj.todo}
            <button onClick={() => removeTodo(index)}>Remove Todo</button>
            <button onClick={() => crossTodo(index)}>Cross Todo</button>
          </div>
        )
      }
      </div>
    </div>
  );
}

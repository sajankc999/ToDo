import React, { useState } from 'react'
import ToDoItem from './ToDoItem';
import style from "./Form.module.css"
export default function Form() {
  const [data, setdata] = useState({ name: '', is_completed: false });
  const [todos, settodos] = useState([]);
  const sortedTodos = todos.slice().sort((a,b)=>Number(a.is_completed)-Number(b.is_completed));
  const total = todos.length
  const completed = todos.filter((todo)=>todo.is_completed).length;
  function handleChange(e) {
    e.preventDefault();
    settodos([...todos, data])
    console.log(todos);
    setdata({ name: '', is_completed: false });
  }
  return (
    <>
      <h1 className={style.header} >ToDO</h1>
      <form onSubmit={handleChange} className={style.Form}>
        <div className={style.inputcontainer}>
          <input type="text" value={data.name} onChange={(e) => setdata({name:e.target.value})}
            className={style.input1}
            placeholder='Enter your Todos here...' />
          <button className={style.button1}>Add</button>
        </div>
      </form>
      <div className={style.todobox}>
        {sortedTodos.map((item) => (<ToDoItem item={item} key={item.name} todos={todos} settodos={settodos} />

        ))}
      </div>
       <div style={{position:'fixed',fontSize:"1.5em",backgroundColor:'white',color:'black',fontWeight:'bold',textAlign:'center',marginTop:'80px',bottom:'0'}}>
        Total:{total} <br />
        Completed:{completed}
        </div> 
    </>
  )
}
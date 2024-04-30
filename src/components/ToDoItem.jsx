import React from 'react'
import style from "./Form.module.css"
export default function ToDoItem({item,todos,settodos}) {
  function Deletefunc(item){
    console.log(item)
    settodos(todos.filter((todo)=>todo.name!==item));
  }
  function markFunc(item){
    console.log(item)
    const NewArray=todos.map((todo)=>todo.name===item?{...todo,is_completed:!todo.is_completed}:todo);
    settodos(NewArray)
  }
  const classname=item.is_completed?style.marked:'';
  return (
    
    <>
    <div className= {style.item}>
      <div className={style.itemname}>
        <span className={classname} onClick={()=>markFunc(item.name)}  >
        {item.name}
        </span>
      <span>
      <button className={style.button2} onClick={()=>Deletefunc(item.name)}>X</button>
      </span>
      </div>

      <hr />
    </div>
    </>
  )
}

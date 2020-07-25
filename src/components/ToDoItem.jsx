import React from "react";

function ToDoItem(props){
    


   return <li onClick={()=>{
      props.onClicked(props.id)}}> {props.todoitem}</li>

}
export default ToDoItem;
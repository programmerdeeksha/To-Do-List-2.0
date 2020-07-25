import React from "react";
import ToDoItem from "./ToDoItem"
function App() {
  
  const[input, setInput]= React.useState("");
  const[items, setItems] = React.useState([]);
  
  function handleChange(event){
   const newValue= event.target.value;
   setInput(newValue);
   
  }

  function addItem(){
     setItems((prevItems)=>{
     return [ ...prevItems,input];
       

     
     
     }
     );
     setInput("");
  }

function deleteItem(id){
   setItems(prevItems=>{
     return prevItems.filter((item,index)=>{
       return index!== id;
     }
     );
   }

   );  
}


  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange}type="text" value={input}  />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item,index)=> (
            <ToDoItem todoitem={item}
            key={index}
            id={index}
              onClicked={deleteItem}
            />))}
        </ul>
      </div>
    </div>
  );
}

export default App;

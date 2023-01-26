
import { useState } from 'react';
import '../styles/App.css';
import AppUI from './AppUI';
//Customhook con instrucciones
function useLocalStorage (itemName, initialValue){

let dato = localStorage.getItem(itemName)
let value = dato === null ? initialValue : JSON.parse(dato)

 
 const [item, setItem] = useState(value);

 
 const saveItem = (newItem) => {
   localStorage.setItem(itemName, JSON.stringify(newItem));
   setItem(newItem);
 };

 return [
  item,
  saveItem,
];
}


function App() {   
const [search, setSearch] = useState("")
const[todos,saveTodos]=useLocalStorage("values-v1",[])



// el counter
const completedTodos = todos.filter(todo => todo.completed === true).length
const totalTodos = todos.length 

//logica del search
let todoSearch
if(search ===""){
  todoSearch = todos
}else{
const dataFiltrada= todos.filter(todo => (
  todo.text.toLocaleLowerCase().includes(search.toLocaleLowerCase())

))
 todoSearch = dataFiltrada  
}


// marcar un todo como realizado
const completeTodo = (identificador) =>{
let index = todos.findIndex(todo => todo.text === identificador)
let newArray = [...todos]
newArray[index].completed = true
saveTodos(newArray)
}

 //eliminando un todo
const deleteTodo = (identificador) =>{
  let deleteElement = todos.filter(todo => todo.text !== identificador)
  saveTodos(deleteElement)
  
  }

  return (

<AppUI
 totalTodos={totalTodos}
 completedTodos={completedTodos}
 search={search}
 setSearch={setSearch}
 todoSearch={todoSearch}
 completeTodo={completeTodo}
 deleteTodo={deleteTodo}

/>

  );
}

export default App;

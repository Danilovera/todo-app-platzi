
import { useState } from 'react';
import './App.css';
import TodoCounter from './TodoCounter';
import TodoItem from './TodoItem';
import { TodoList } from './TodoList';
import TodoSearch from './TodoSearch';

function App() {

  const defaultTodos=[
    {text:'Cortar cebolla', completed:true},
    {text:'Tormar el curso de intro a react', completed:false},
    {text:'Llorar con la llorona', completed:false}

  ];
const [todos, setTodos] = useState(defaultTodos)
const [search, setSearch] = useState("")

const completedTodos = todos.filter(todo => todo.completed === true).length
const totalTodos = todos.length 

let todoSearch


if(search ===""){
  todoSearch = todos
}else{

const dataFiltrada= defaultTodos.filter(todo => (
  todo.text.toLocaleLowerCase().includes(search.toLocaleLowerCase())
))

 todoSearch = dataFiltrada
  
}

  return (

<>
<TodoCounter
total={totalTodos}
completados={completedTodos}
/>
<TodoSearch
search={search}
setSearch={setSearch}
/>
<TodoList>
  {
    todoSearch.map(todo => (
      <TodoItem text ={todo.text} completed={todo.completed} />
    ))
   
  }
</TodoList>
</>

  );
}

export default App;

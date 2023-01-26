import React from 'react'
import { ButtonAgg } from '../components/ButtonAgg'
import TodoItem from '../components/TodoItem'
import { TodoList } from '../components/TodoList'
import TodoSearch from '../components/TodoSearch'
import TodoCounter from '../components/TodoCounter'

const AppUI = ({
    totalTodos,
    completedTodos,
    search,
    setSearch,
    todoSearch,
    completeTodo,
    deleteTodo
}) => {
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
      <TodoItem
       text ={todo.text} 
      completed={todo.completed}
      estadoTarea={()=> completeTodo(todo.text)}
      delete={()=>{deleteTodo(todo.text)}}
      />
    ))
   
  }
</TodoList>
<ButtonAgg />
</>
  )
}

export default AppUI
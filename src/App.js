import TodoList from "./Todo/TodoList";
import {useEffect, useState} from "react";
import Context from "./Context";
import AddTodo from "./Todo/AddTodo";
import data from './data.json'
import Tag from "./Todo/Tag";
import './style/style.css'

function App() {
    const [todos, setTodos] = useState(data)

    function toggleTodo(id){
       setTodos( todos.map(todo=>{
            if(todo.id === id){
                todo.completed = !todo.completed
            }
            return todo
        }))
    }

    function removeTodo(id){
        setTodos(todos.filter(todo => todo.id !== id))
    }

    function addTodo(title){
        setTodos((todos.concat([{title, id: Date.now(), completed: false, }])))
    }
  return (
      <Context.Provider value={{ removeTodo }}>
      <div className='wrapper'>
          <h1 className='title'>todo list</h1>
          <AddTodo onCreate={addTodo} />
          {todos.length ? <TodoList todos = {todos} onToggle={toggleTodo}/> : <p>NO TODOS</p> }
          <Tag todos={todos}/>
      </div>
      </Context.Provider>
  );
}

export default App;

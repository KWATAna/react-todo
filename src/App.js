import './App.css';
import Form  from './components/Form';
import React, {useState, useEffect} from 'react'
import TodoList from './components/TodoList';





function App() {
  
const [inputText, setInputText] = useState("")
const [todos, setTodos] = useState([]);
const [filtered, setFiltered] = useState([]);
const [category, setCategory] = useState("all")

useEffect(() => {
  setFiltered(todos.filter((todo)=>{
    if(category === 'all'){
      return todo
    }
    else if(category === 'completed'){
      if(todo.completed){
        return todo
      }
    }
    else {
      if(!todo.completed){
        return todo
      }
    }
  }))
}, [category, todos])

  console.log(filtered)
  return (
    <div className="App">
     <header>
      <h1>Vlad's Todo List</h1>
    </header>
    <Form todos={todos} setTodos={setTodos} setInputText={setInputText} inputText={inputText} setCategory={setCategory}/>
    <TodoList setTodos={setTodos} todos={todos} filtered={filtered}/>
    </div>
  );
}

export default App;

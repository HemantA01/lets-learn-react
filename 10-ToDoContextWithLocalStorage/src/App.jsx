import { useEffect, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { ToDoProvider } from './context/todocontext'
import ToDoForm from './components/ToDoForm'
import TodoItem from './components/ToDoItem'

function App() {
  const [todos, setToDos] = useState([])  // 1)
  
  const addTodo = (todo) => {
    //setToDos(todo)   // 2)
    setToDos((prev) => [...prev, {id: Date.now(), ...todo}]) // 3)
  }        // 4)

  const updateTodo = (id, todo) => {
    console.log('For update, id: ', id);
    console.log('For update, todo: ', todo);
    setToDos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo )))  // 5)
  }

  const deleteTodo = (id) => {
    setToDos((prev) => prev.filter((todo) => todo.id != id))  // 6)
  }

  const toggleChecked = (id) => {
    debugger;
    console.log('id: ', id);
    setToDos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? {...prevTodo, checked: !prevTodo.checked} : prevTodo)))
  } // 7)

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todoslist'))
    if(todos && todos.length > 0){
      setToDos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('todoslist',JSON.stringify(todos))
  }, [todos])

  return (
    <ToDoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleChecked}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <ToDoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div  key={todo.id} className='w-full'>       
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </ToDoProvider>
  )
}

export default App

/*
1) By default, empty array
2) Old values get deleted and one new value get added. Instead, add the new value without deleting old values.
3) Firstly store the previous values, then add the new todo value. Similary, we can add as '[todo, ...prev]' to add new 'todo' first
4) 'todo' passed as input is not coming from 'useState', but is from the element inside div
5) 'prevTodo.id' is the id of every element in array & 'id' is the id of element to be updated as passed in input. If prevTodo.id matches
the id of element to be updated then new 'todo' element is passed. else previous 'todo' remains. Loop is used using 'prev.map'. It is 
told to go to every element and find its 'id'. In order to expand and understand clearly, we can expand as:
prev.map((eachVal) => {
    if(eachval.id === id) {
      todo
    } else {
        prevTodo
      }
  })
6) In 'deleteTodo', we've used to reset the array with all the elements except that one which matches the id passed as input.
7) In 'toggleChecked', If prevTodo.id matches the id of element to be toggled/updated then 'prevTodo' is called & its 'checked'
property is changed keeping remaining property unchanged, else previous 'prevTodo' remains as is. Loop is used using 'prev.map'.
8) <div  key={todo.id}>: key is used inside div to assign each div with unique id and make them separate from each other, as the div 
element is inside the loop. If we don't assign key's warning will appear and application degrade. Avoid using 'index' instead of 'todo'
here as it has its own disadvantages and pitfalls.
*/

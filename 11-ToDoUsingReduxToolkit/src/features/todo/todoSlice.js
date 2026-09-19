import { createSlice, nanoid } from "@reduxjs/toolkit"; //'nanoid' generates unique id.

const initialState = {
    todos: [{id: 1, text: 'Hello World'}]
}

function sayHello() {
    console.log('Hello World')
}

export const todoSlice = createSlice({
    name: 'Slices with todo',
    initialState,
    reducers: {
        //addTodo: sayHello,
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            //debugger;
            console.log('During Remove, Todos: ', state.todos)
            console.log('During Remove: ', action.payload)
            state.todos = state.todos.filter((todo) => todo.id != action.payload)     //filters the 'todo' list & removes the particular todo value on base of 'id'
        },
        //updateTodo
        updateTodo: (state, action) => {
            debugger;
            const {id, text} = action.payload
            const existingTodo = state.todos.find((todo) => todo.id === id)
            if(existingTodo){
                existingTodo.text = text
            }
        }
        //deleteTodo
    }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions
export default todoSlice.reducer
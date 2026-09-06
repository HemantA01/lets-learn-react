import { createContext, useContext } from "react";

export const ToDoContext = createContext({
    todos: [    //Array is expected to send as input to the context
        {
            id: 10,
            todo: 'Message 10',
            checked: false,
        }
    ],
    addTodo: (todo) => {},  //Pt1     
    updateTodo: (id, todo) => {},   //Pt2
    deleteTodo: (id) => {},      //Pt3 
    toggleChecked: (id) => {}   //Pt4
})

//Provider
export const ToDoProvider = ToDoContext.Provider

//Hook
export const useToDo = () => {
    return useContext(ToDoContext)
}

/*Functionality covered:
1) Add Todo
2) Toggle added elements
3) Edit and change particular Todo element
4) Delete particular element
5) List all Todo elements
*/

/*
Pt1: 'addTodo' function created with 'todo' details as input. We decide its functionality outside in App.jsx or any other component
Pt2: 'updateTodo' function created with 'todo' & 'id' as input. We decide its functionality outside in App.jsx or any other component
Pt3: 'deleteTodo' function created with 'id' as input. We decide its functionality outside in App.jsx or any other component
Pt4: 'toggleChecked' function created with 'id' as input. Here, one field is updated with css.
*/

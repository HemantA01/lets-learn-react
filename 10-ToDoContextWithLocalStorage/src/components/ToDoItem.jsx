import React, { useState } from 'react'
import { useToDo } from '../context/todocontext';

function TodoItem({ todo }) {
    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const [todoMsg, setTodoMsg] = useState(todo.todo)       //Pt1
    const {updateTodo, deleteTodo, toggleChecked} = useToDo()     //Pt4

    const editTodo = () => {
        debugger;
        console.log('id: ', todo.id)
        console.log('todoMsg: ', todoMsg)
        console.log('todo: ', todo.todo)
        updateTodo(todo.id, {...todo, todo: todoMsg})   //Pt2
        setIsTodoEditable(false)    //Pt3
    }

    const toggleCheckFn = () => {
         toggleChecked(todo.id)
    }
    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.checked ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input type="checkbox" className="cursor-pointer" checked={todo.checked} onChange={toggleCheckFn} />
            <input type="text" className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent" } ${todo.checked ? "line-through" : ""}`}
                value={todoMsg} onChange={(e) => setTodoMsg(e.target.value)} readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    debugger;
                    if (todo.checked) 
                        return;
                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.checked}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;

/*
Pt1) 'todo' message property inside 'todo'
Pt2) updateTodo(todo.id, {...todo, todo: todoMsg}) : '...todo' calls the entire todo property while 'todo: todo.todoMsg' tells to update
the message
Pt3) to remove the editable functionality from the Todo item
Pt4) Values should be same as in the context
*/

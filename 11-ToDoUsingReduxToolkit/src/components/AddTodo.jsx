import {React, useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'
import { addTodo, updateTodo } from '../features/todo/todoSlice'

function AddTodo({editTodo, setEditTodo}) {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    // Populate input when an edit todo is selected
    useEffect(() => {
      if(editTodo){
        setInput(editTodo.text)
      } else {
        setInput('')
      }
    }, [editTodo])

    const handleSubmit = (e) => {
      debugger;
        e.preventDefault()
        if(!input.trim())
          return;
        if(editTodo) {
          //'dispatch' make changes in the store with using a reducer
          dispatch(updateTodo({id: editTodo.id, text: input}))
          setEditTodo(null)   //Reset edit state back to insert mode
        } else {
          //'dispatch' make changes in the store with using a reducer
          dispatch(addTodo(input))
        }
        setInput('')        //To clean the input values after using it.                       
    }
    return (
        <>
        <form onSubmit={handleSubmit} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className={`text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg ${
          editTodo ? 'bg-green-500 hover:bg-green-600' : 'bg-indigo-500 hover:bg-indigo-600' 
        }`}
      > {editTodo ? 'Update Todo' : 'Add Todo'}
      </button>
      {editTodo && (
        <button
        type="button" onClick={() => setEditTodo(null)}
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >Cancel</button>
      )}
    </form>
        </>
    )
}

export default AddTodo

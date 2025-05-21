import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../features/todo/todoSlice';
function AddTodos() {
    const [input,setInput]=useState('');
    const dispatch=useDispatch();
    const addTodoHandler=(e)=>{
        e.preventDefault()
         if (!input.trim()) {
      alert('Please enter a todo.');
      return;
    }
        dispatch(addTodo(input))
        setInput('')
    }
  return (
       <form onSubmit={addTodoHandler} className="flex items-center gap-4 bg-white p-4 rounded-xl max-w-md mx-auto mt-6">
  <input
    type="text"
    value={input}
    onChange={(e) => setInput(e.target.value)}
    placeholder="Enter a todo..."
    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
  <button
    type="submit"
    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-all duration-200"
  >
    Add Todo
  </button>
</form>

  )
}

export default AddTodos
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'
function Todos() {
     const todos =useSelector(state => state.todos)
     const dispatch= useDispatch()
  return (
    <>
    
  <div className="max-w-md mx-auto mt-4 space-y-2">
  <ul className="bg-white rounded-xl p-4 space-y-2">
    {todos.map((todo) => (
      <li
        key={todo.id}
        className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
      >
        <span className="text-gray-800">{todo.text}</span>
        <button
          onClick={() => dispatch(removeTodo(todo.id))}
          className="text-red-500 hover:text-white hover:bg-red-500 border border-red-500 px-2 py-1 rounded-md text-sm transition-all duration-200"
        >
          ✕
        </button>
      </li>
    ))}
  </ul>
</div>

    
    </>

  )
}

export default Todos
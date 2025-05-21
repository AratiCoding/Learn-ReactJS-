
import './App.css'
import AddTodos from './components/AddTodos'
import Todos from './components/Todos'

function App() {
 

  return (
  
    <div className=''>
       <h1 className='text-3xl font-bold text-white'>Use of redux toolkit</h1>
   <AddTodos/>
   <Todos/>
    </div>
   
  
  )
}

export default App

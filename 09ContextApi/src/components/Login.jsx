import React,{useState,useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const {setUser}=useContext(UserContext)
    const handleSubmit=(e)=>{
      e.preventDefault();
      setUser({username,password})
    }
    
  return (
    <div>
        <h2>Login</h2>
        <div className='flex flex-col gap-2 mt-3'>
        <input type="text"
         placeholder='username'
         value={username}
         onChange={(e)=>setUsername(e.target.value)}
         />
         {" "}
        <input type="text" 
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        placeholder='password' />
        <button onClick={handleSubmit}>Submit</button>
        </div>
    </div>
  )
}

export default Login
import {useDispatch} from "react-redux"
import React, { useState } from 'react'
import "./Login.css"
import { login } from "../features/userSlice";


const Login = () => {
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false)
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(name.length==0||email.length==0||password.length==0){
            setError(true)
        }

       dispatch(
        login({
            name:name,
            email:email,
            password:password,
            loggedIn:true,
       })
       );
    };


  return (
    <div className="login">
        <form className="login_form" onSubmit={(e) => handleSubmit(e)}>
            <h1>Login Here</h1>
            <input type="name" 
            placeholder='Name' 
            value={name} 
            onChange={(e) => setName(e.target.value)}
           
            />
             {error&&name.length<=0? 
            <label style={{color: "red"}}>Name Can't be empty</label>:""}
            <input 
            type="email" 
            placeholder='Email'  
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
             {error&&email.length<=0? 
            <label style={{color: "red"}}>Email Can't be empty</label>:""}
           
            <input 
            type="password" 
            placeholder='Password'  
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            {error&&password.length<=0? 
            <label style={{color: "red"}}>Password Can't be empty</label>:""}
            <button type='submit' className='submit_btn'>LOG-IN</button>
        </form>
    </div>
  )
}

export default Login
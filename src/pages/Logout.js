import React from 'react'
import { useDispatch } from 'react-redux';
import { logout } from '../features/userSlice';
import "./Login.css"

const Logout = () => {
   const dispatch = useDispatch();
   const handleLogout = (e) => {
    e.preventDefault();

    
    dispatch(logout());
   }

  return (
    <div className='logout'>
        <h1>Welcome <span className='user_name'>Arber</span></h1>
        <button className='logout_button' onClick={(e) => handleLogout(e)}>LOGOUT</button>
    </div>
  )
}

export default Logout
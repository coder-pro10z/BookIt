import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
const [name,setName]=useState('');
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');

function registerUser(ev){
ev.preventDefault();
axios.post('/register',{
    name,
    email,
    password,
});

}
  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className='mb-64'>
      <h1 className="text-4xl text-center mb-4">Register</h1>
      <form className="max-w-md mx-auto" onSubmit={registerUser}>
      <input type="text" placeholder="john doe" value={name} onChange={ev=>setName(ev.target.value)}></input>
        <input type="email" placeholder="your@email.com" value={email} onChange={ev=>setEmail(ev.target.value)}></input>
        <input type="password" placeholder="password" value={password} onChange={ev=>setPassword(ev.target.value)}></input>
        <button className="primary">Register</button>
        <div className='py-2 text-center text-gray-500'>Already have an account? <Link className='underline text-black' to="/login">Register Now</Link>
        </div>
      </form>
    
    </div>
  </div>
  )
}

export default RegisterPage

import React from 'react'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className='mb-64'>
      <h1 className="text-4xl text-center mb-4">Register</h1>
      <form className="max-w-md mx-auto">
        <input type="email" placeholder="your@email.com"></input>
        <input type="password" placeholder="password"></input>
        <button className="primary">Register</button>
        <div className='py-2 text-center text-gray-500'>Already have an account yet? <Link className='underline text-black' to="/login">Register Now</Link>
        </div>
      </form>
    
    </div>
  </div>
  )
}

export default RegisterPage

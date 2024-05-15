import React from 'react'
import './Login.css'

export const Login = () => {
  return (
    <div className='background_color flex justify-center items-center'>
      <div className=' rounded-xl h-128 shadow-lg w-96 bg-white py-9 px-5'>
        <div className='flex justify-center text-6xl font-serif text-blue-700 mb-12 '>
          Login
        </div>
        <form action='/dashboard'>
          <div className='inputs'>
            <div className='input'>
              <input type='text' placeholder='Email' className='input-field'/>
              <label htmlFor='input-field' className='input-label'>Email</label>
              <span className='input-highlight'></span>
            </div>
            <div className='input'>
              <input type='text' placeholder='Password' className='input-field'/>
              <label htmlFor='input-field' className='input-label'>Password</label>
              <span className='input-highlight'></span>
            </div>
          </div>
          <a href='/dashboard'><button className='form_buttons'>Login</button></a>
        </form>
        <a href='/forgot-password'><button className='form_buttons'>Forgot Password</button></a>
        <a href='/sign-up'><button className='form_buttons'>Create an account</button></a>
      </div>
    </div>
  )
}

export default Login

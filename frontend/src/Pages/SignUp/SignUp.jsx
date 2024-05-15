import React from 'react'
import './SignUp.css'

export const SignUp = () => {
  return (
    <div className='background_color flex justify-center items-center'>
      <div className=' rounded-xl h-200 shadow-lg w-120 bg-white py-9 px-5'>
        <div className='flex justify-center text-6xl font-serif text-blue-700 mb-9 '>
          Sign Up
        </div>
        <form action='/login'>
          <div className='inputs'>
          <div className='w-full'>
            <div className='flex'>
              <div className='input'>
                <input type='text' placeholder='First name' className='input-field'/>
                <label htmlFor='input-field' className='input-label'>First name <p className=' text-red-600'>*</p></label>
                <span className='input-highlight'></span>
              </div>
              <div className='input'>
                <input type='text' placeholder='Last name' className='input-field'/>
                <label htmlFor='input-field' className='input-label'>Last name<p className=' text-red-600'>*</p></label>
                <span className='input-highlight'></span>
              </div>
            </div>
          </div>
            <div className='input'>
              <input type='text' placeholder='Email' className='input-field'/>
              <label htmlFor='input-field' className='input-label'>Email<p className=' text-red-600'>*</p></label>
              <span className='input-highlight'></span>
            </div>
            <div className='input'>
              <input type='text' placeholder='Password' className='input-field'/>
              <label htmlFor='input-field' className='input-label'>Password<p className=' text-red-600'>*</p></label>
              <span className='input-highlight'></span>
            </div>
            <div className='input'>
              <input type='text' placeholder='Phone #' className='input-field'/>
              <label htmlFor='input-field' className='input-label'>Phone #</label>
              <span className='input-highlight'></span>
            </div>
          </div>
          <div className='flex'>
          <a href='/dashboard'><button className='form_buttons'>Sign Up</button></a>
          <p className='text-red-600 mt-2 ml-20'>* = required</p>
          </div>
        </form>
        <a href='/login'><button className='form_buttons'>Already have an account? Login</button></a>
      </div>
    </div>
  )
}

export default SignUp

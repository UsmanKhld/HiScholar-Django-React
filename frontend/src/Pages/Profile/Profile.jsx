import React from 'react'
import './Profile.css'
import { Navbar } from '../../Components/index'

export const Profile = () => {
  return (
    <div>
      <Navbar /> 
      <main>
        <div className="text-4xl text-blue-900 mb-16">
          My Profile
        </div>
        <div className='profile-pic_card border border-red-500'>

        </div>

      </main>
    </div>
  )
}

import React from 'react'
import './Profile.css'
import { Navbar } from '../../Components/index'

export const Profile = ({favorites, clearFavorites}) => {

  console.log("Favorites in Profile:", favorites);

  return (
    <div>
      <Navbar /> 
      <main className='p-0'>
        <div className='profile_container'>
          <p className="profile_title text-4xl text-blue-900" >My Profile</p>
          <div className='pic_container'></div>
          <div className='info_card'>
            <h1 className=' font-semibold'>Usman Khalid</h1>
            <p className=' self-start mt-16 text-xl'>Email: usmanexample@gmail.com</p>
          </div>
          <div className='fav_sch p-2 bg-blue-100 shadow-lg hover:shadow-2xl hover:outline hover:outline-1'>
            <p className='text-xl text-blue-800 ml-2 '>Favorited scholarships</p>
            <button className=' self-end mb-5' onClick={clearFavorites}>clear</button>
            <ul className=' overflow-y-auto p-2'>
             {favorites.map((fav, index) => (
                <li className=' flex items-center w-full h-10 bg-gray-100 outline outline-1 p-2 mb-1' key={index}>
                  <p className='flex-1'>{fav.title}</p>
                  <a href={fav.apply}><button className=' h-8 w-16 text-xs bg-blue-200 '>Apply</button></a>
                </li>
              ))}
            </ul>
            
          </div>
          <div className='fav_colleges'></div>
        </div>
      </main>
    </div>
  )
}

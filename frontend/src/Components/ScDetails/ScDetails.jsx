import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart} from '@fortawesome/free-regular-svg-icons'
import { faHeartCircleCheck } from '@fortawesome/free-solid-svg-icons'

export const ScDetails = (props) => {

  const { sch, isFav, onToggleFavorite, onClick } = props;

  return (
    <div>
      <ol>
        <li className='sc_item text-lg bg-gray-100 outline outline-1 rounded-md py-4 mb-2 flex items-center mt-2 ml-2'>
          <div className=' w-12 h-14 ml-12 flex items-center'>
            <FontAwesomeIcon onClick={onToggleFavorite} icon={isFav ? faHeartCircleCheck : faHeart}  className=' text-blue-800 fa-2x hover:cursor-pointer' />
          </div>
          <span className=' ml-28' >{sch.due}</span>                  
          <span className='flex-1 ml-20' >{sch.title}</span>
          <span className='mr-16' >{sch.amount}</span>
          <span className='mr-10 text-base hover:underline hover:text-blue-700 hover:cursor-pointer' onClick={onClick}>Details...</span>
          <a href={sch.apply}><button className='mr-10 bg-blue-200 '>Apply</button></a>
        </li>
      </ol>
    </div>
  )
}

export default ScDetails
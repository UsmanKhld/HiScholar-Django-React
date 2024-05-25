import React, { useState } from 'react'
import { faCircleArrowUp, faCircleArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Dropdown.css'

export const Dropdown = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const data = props.data;

  return (
    <div className='relative'>
        <div className='dropdown_container ' onClick={() => setIsOpen(!isOpen)}>
            {props.title}
            <FontAwesomeIcon className='flex justify-end mr-2 mt-1' icon={isOpen ? faCircleArrowUp : faCircleArrowDown} />
            
        </div>
        { isOpen && (
            <div className='dropdown_menu scrollbar-thin overflow-y-auto'>
                {data.map((item, i) => (
                    <div key={i}>
                        <div>{item.filter}</div>
                    </div>
                ))}
            </div>
        )}
    </div>
  )
}

export default Dropdown
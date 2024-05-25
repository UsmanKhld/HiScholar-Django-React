import React, { useState } from 'react'
import { Navbar } from '../../Components/index'
import { faCircleArrowUp, faCircleArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { GPA, SAT, ACT, Race, Major, State, Age } from './filters'
import './Scholarships.css'
import Dropdown from '../../Components/Dropdown/Dropdown'

export const Scholarships = () => {

  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdownToggle = (dropdown) => {
    setOpenDropdown(prevState => (prevState === dropdown ? null : dropdown));
  };

  return (
    <div>
      <Navbar />
      <main >
        <div className="text-4xl text-blue-900 ">
          Scholarships
        </div>
        
        <div className='filters_container flex justify-between '>
          <Dropdown title="GPA" data={GPA} />
          <Dropdown title="SAT" data={SAT} />
          <Dropdown title="ACT" data={ACT} />
          <Dropdown title="Race" data={Race} />
          <Dropdown title="Major" data={Major} />
          <Dropdown title="State" data={State} />
          <button className='h-8 flex items-center'>Apply filters</button>
        </div>

        <div className='scholarships_container'>
          
        </div>
        
        
      </main>
    </div>
  );
};

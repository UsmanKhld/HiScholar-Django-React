import React, { useState } from 'react'
import {ScDetails} from '../../Components/ScDetails/ScDetails'
import { Navbar } from '../../Components/index'
import { faCircleArrowUp, faCircleArrowDown, faArrowUpWideShort } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { GPA, SAT, ACT, Race, Major, State, Age } from './filters'
import './Scholarships.css'
import Dropdown from '../../Components/Dropdown/Dropdown'
import { ScLists } from './ScholarshipLists'

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

        <div className='scholarships_sort-container'>
          <button className='h-8 flex items-center justify-between w-28'>Sort <FontAwesomeIcon className='flex justify-end' icon={faArrowUpWideShort} /> </button>
          <p className=' ml-16 text-lg'>Due Date</p>
          <p className='flex-1 ml-24 text-lg'>Scolarship Name</p>
          <p className='flex-1 ml-20 text-lg'>Amount</p>
        </div>

        <hr className="border-t-2 border-gray-300 w-full mb-5" />

        <div className='w-full h-110 overflow-y-scroll hide_scrollbar'>
          {ScLists.map((sc, i) => (
            <ScDetails sch={sc} key={i}/>
          ))}
        </div>
        
        
      </main>
    </div>
  );
};

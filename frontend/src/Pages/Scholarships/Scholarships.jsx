import React, { useState } from 'react'
import { Navbar } from '../../Components/index'
import { faCircleArrowUp, faCircleArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {GPA, SAT, ACT, Race, Major, State, Age} from './filters'
import './Scholarships.css'

export const Scholarships = () => {

  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdownToggle = (dropdown) => {
    setOpenDropdown(prevState => (prevState === dropdown ? null : dropdown));
  };

  return (
    <div>
      <Navbar />
      <main>
        <div className="text-4xl text-blue-900 flex justify-center">
          Scholarships
        </div>
        <div className="flex flex-col px-9 mt-11 h-screen w-120 border rounded-lg bg-blue-100 shadow-lg">
          <p className="text-4xl text-blue-900 flex justify-start mt-10 mb-10">Filters</p>
          <div className="flex mb-6 absolute top-52">
            <div>
              <button
                onClick={() => handleDropdownToggle('GPA')}
                className="bg-white h-9 flex justify-between items-center border rounded-none border-black w-40"
              >
                GPA
                <div className="flex justify-end">
                  {openDropdown !== 'GPA' ? (
                    <FontAwesomeIcon icon={faCircleArrowDown} />
                  ) : (
                    <FontAwesomeIcon icon={faCircleArrowUp} />
                  )}
                </div>
              </button>

              {openDropdown === 'GPA' && (
                <div className="scrollbar-thin bg-white max-h-20 w-40 overflow-y-auto border border-gray-300 mt-2">
                  {GPA.map((item, i) => (
                    <div key={i}>
                      <p>{item.filter}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className='ml-5'>
              <button
                onClick={() => handleDropdownToggle('SAT')}
                className="bg-white h-9 flex justify-between items-center border rounded-none border-black w-40"
              >
                SAT
                <div className="flex justify-end">
                  {openDropdown !== 'SAT' ? (
                    <FontAwesomeIcon icon={faCircleArrowDown} />
                  ) : (
                    <FontAwesomeIcon icon={faCircleArrowUp} />
                  )}
                </div>
              </button>

              {openDropdown === 'SAT' && (
                <div className="scrollbar-thin bg-white max-h-20 w-40 overflow-y-auto border border-gray-300 mt-2">
                  {SAT.map((item, i) => (
                    <div key={i}>
                      <p>{item.filter}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="flex relative top-32 ">
            <div>
              <button
                onClick={() => handleDropdownToggle('ACT')}
                className="bg-white h-9 flex justify-between items-center border rounded-none border-black w-40"
              >
                ACT
                <div className="flex justify-end">
                  {openDropdown !== 'ACT' ? (
                    <FontAwesomeIcon icon={faCircleArrowDown} />
                  ) : (
                    <FontAwesomeIcon icon={faCircleArrowUp} />
                  )}
                </div>
              </button>

              {openDropdown === 'ACT' && (
                <div className="scrollbar-thin bg-white max-h-20 w-40 overflow-y-auto border border-gray-300 mt-2">
                  {ACT.map((item, i) => (
                    <div key={i}>
                      <p>{item.filter}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className='ml-5'>
              <button
                onClick={() => handleDropdownToggle('Race')}
                className="bg-white h-9 flex justify-between items-center border rounded-none border-black w-40"
              >
                Race
                <div className="flex justify-end">
                  {openDropdown !== 'Race' ? (
                    <FontAwesomeIcon icon={faCircleArrowDown} />
                  ) : (
                    <FontAwesomeIcon icon={faCircleArrowUp} />
                  )}
                </div>
              </button>

              {openDropdown === 'Race' && (
                <div className="scrollbar-thin bg-white max-h-20 w-40 overflow-y-auto border border-gray-300 mt-2">
                  {Race.map((item, i) => (
                    <div key={i}>
                      <p>{item.filter}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="flex relative top-64 ">
            <div>
              <button
                onClick={() => handleDropdownToggle('Major')}
                className="bg-white h-9 flex justify-between items-center border rounded-none border-black w-40"
              >
                Major
                <div className="flex justify-end">
                  {openDropdown !== 'Major' ? (
                    <FontAwesomeIcon icon={faCircleArrowDown} />
                  ) : (
                    <FontAwesomeIcon icon={faCircleArrowUp} />
                  )}
                </div>
              </button>

              {openDropdown === 'Major' && (
                <div className="scrollbar-thin bg-white max-h-20 w-40 overflow-y-auto border border-gray-300 mt-2">
                  {Major.map((item, i) => (
                    <div key={i}>
                      <p>{item.filter}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className='ml-5'>
              <button
                onClick={() => handleDropdownToggle('State')}
                className="bg-white h-9 flex justify-between items-center border rounded-none border-black w-40"
              >
                State
                <div className="flex justify-end">
                  {openDropdown !== 'State' ? (
                    <FontAwesomeIcon icon={faCircleArrowDown} />
                  ) : (
                    <FontAwesomeIcon icon={faCircleArrowUp} />
                  )}
                </div>
              </button>

              {openDropdown === 'State' && (
                <div className="scrollbar-thin bg-white max-h-20 w-40 overflow-y-auto border border-gray-300 mt-2">
                  {State.map((item, i) => (
                    <div key={i}>
                      <p>{item.filter}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="flex relative top-96">
            <div>
              <button
                onClick={() => handleDropdownToggle('Age')}
                className="bg-white h-9 flex justify-between items-center border rounded-none border-black w-40 "
              >
                Age
                <div className="flex justify-end">
                  {openDropdown !== 'Age' ? (
                    <FontAwesomeIcon icon={faCircleArrowDown} />
                  ) : (
                    <FontAwesomeIcon icon={faCircleArrowUp} />
                  )}
                </div>
              </button>

              {openDropdown === 'Age' && (
                <div className="scrollbar-thin bg-white max-h-20 w-40 overflow-y-auto border border-gray-300 mt-2">
                  {Age.map((item, i) => (
                    <div key={i}>
                      <p>{item.filter}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

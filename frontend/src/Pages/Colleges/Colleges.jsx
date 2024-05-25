import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Navbar } from '../../Components/index'
import './Colleges.css'

export const Colleges = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div className="topnav grid grid-cols-3 border-solid border-b-4 border-black pb-2 ">
          <div className="bold justify-self-end pr-3">
            <h1>
              College Search
            </h1>
          </div>
          <div className="pl-10">
            <button className="search_input border-solid border-4 border-black rounded-full w-full h-18 bg-white">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="absolute fa-2x" />
              <span className="pl-12 text-xl">Search by college name</span>
            </button>
          </div>
          <div className="pl-20 self-center">
            <FontAwesomeIcon icon={faThumbsUp} className="fa-3x mr-3" />
          </div>
        </div>
      </main >
    </div >
  )
}

export default Colleges
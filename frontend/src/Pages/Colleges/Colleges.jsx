import React from "react";
import { Navbar } from '../../Components/index'
import './Colleges.css'

export const Colleges = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div className="topnav grid grid-cols-2">
          <div className="underline bold">
            <h1>
              College Search
            </h1>
          </div>
          <div className="pl-10">
            <input type="text" placeholder="Search by college name" className="h-full w-full pl-5 rounded-lg"></input>
          </div>
        </div>
      </main>
    </div >
  )
}

export default Colleges
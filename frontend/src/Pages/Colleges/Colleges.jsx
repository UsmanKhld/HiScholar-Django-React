import React from "react";
import { Navbar } from '../../Components/index'
import './Colleges.css'

export const Colleges = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div className="container mx-2 px-2 columns-2 box">
          <div className="search">
            <h1 class="font-bold underline mx-auto">
              College Search
            </h1>
            <form>
              <input type="text" placeholder="Search by college name" class="w-full h-full"></input>
            </form>
          </div>
        </div>
      </main >
    </div >
  )
}

export default Colleges
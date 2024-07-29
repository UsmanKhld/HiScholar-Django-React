import React, { useState } from "react";
import { Dropdown, Navbar } from "../../Components/index";
import "./Majors.css";

export const Majors = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div className="w-full flex justify-center items-center space-x-32 mb-10">
          <a href="/careers">
            <p className="text-4xl text-blue-200 hover:cursor-pointer hover:text-blue-500 transition-all">
              Careers
            </p>
          </a>
          <p className="text-4xl text-blue-900 hover:cursor-pointer ">Majors</p>
        </div>
        <div className="majors-content">
          <div className="filters-favorites">
            <div className="major-filters">
              <Dropdown />
            </div>
          </div>
          <div className="majors-list p-5">
            <div className="major-category">
              <p className="text-2xl">Major</p>
              <p className="text-2xl">Category</p>
            </div>
            <hr className="border-t-2 border-gray-300 w-full mb-5" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Majors;

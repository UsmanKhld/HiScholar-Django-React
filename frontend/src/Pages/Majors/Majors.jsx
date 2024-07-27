import React from "react";
import { Navbar } from "../../Components/index";

export const Majors = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div className="w-full flex justify-center items-center space-x-32">
          <a href="/careers">
            <p className="text-4xl text-blue-200 hover:cursor-pointer hover:text-blue-500 transition-all">
              Careers
            </p>
          </a>
          <p className="text-4xl text-blue-900 hover:cursor-pointer ">Majors</p>
        </div>
      </main>
    </div>
  );
};

export default Majors;

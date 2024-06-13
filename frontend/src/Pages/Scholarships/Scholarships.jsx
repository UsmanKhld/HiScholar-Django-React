import React, { useState, useEffect } from "react";
import { Navbar, ScDetails, Dropdown, ScItem } from "../../Components/index";
import {
  faCircleArrowUp,
  faCircleArrowDown,
  faArrowUpWideShort,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GPA, SAT, ACT, Race, Major, State, Age } from "./filters";
import "./Scholarships.css";

export const Scholarships = ({ scholarships, favorites, onToggleFavorite }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isSorted, setIsSorted] = useState(false);
  const [sortedScholarships, setSortedScholarships] = useState([]);
  const [gpaFilter, setGpaFilter] = useState(4);

  useEffect(() => {
    let filteredScholarships = [...scholarships];

    // Apply GPA filter if gpaFilter is set
    if (gpaFilter !== "") {
      const filterValue = parseFloat(gpaFilter);
      filteredScholarships = filteredScholarships.filter(
        (scholarship) => scholarship.gpa <= filterValue
      );
    }

    // Apply sorting if isSorted is true
    if (isSorted) {
      filteredScholarships.sort((a, b) => (a.title > b.title ? 1 : -1));
    }

    // Update sortedScholarships state
    setSortedScholarships(filteredScholarships);
  }, [scholarships, gpaFilter, isSorted]);

  useEffect(() => {
    console.log(sortedScholarships);
  }, [sortedScholarships]);

  const alphaSort = () => {
    setIsSorted(!isSorted);
  };

  const handleItemClick = (sc) => {
    setIsModalOpen(true);
    setSelectedItem(sc);
  };

  const handleFilterClick = () => {
    console.log(gpaFilter);
  };

  return (
    <div>
      <Navbar />
      <main>
        <div className="text-4xl text-blue-900 ">Scholarships</div>

        <div className="filters_container flex justify-between ">
          <Dropdown title="GPA" data={GPA} setGpaFilter={setGpaFilter} />
          <Dropdown title="SAT" data={SAT} />
          <Dropdown title="ACT" data={ACT} />
          <Dropdown title="Race" data={Race} />
          <Dropdown title="Major" data={Major} />
          <Dropdown title="State" data={State} />
          <button className="h-8 flex items-center">Apply filters</button>
        </div>

        <div className="scholarships_sort-container">
          <button
            className={
              isSorted
                ? "h-8 flex items-center justify-between w-28 bg-blue-300"
                : "h-8 flex items-center justify-between w-28"
            }
            onClick={alphaSort}
          >
            Sort{" "}
            <FontAwesomeIcon
              className="flex justify-end"
              icon={faArrowUpWideShort}
            />{" "}
          </button>
          <p className=" ml-16 text-lg">Due Date</p>
          <p className="flex-1 ml-24 text-lg">Scolarship Name</p>
          <p className="flex-1 ml-80 text-lg">Amount</p>
        </div>

        <hr className="border-t-2 border-gray-300 w-full mb-5" />

        <div className="w-full h-200 overflow-y-scroll hide_scrollbar">
          {sortedScholarships.map((sc, i) => (
            <ScDetails
              isFav={favorites.some((fav) => fav.id === sc.id)}
              onToggleFavorite={() => onToggleFavorite(sc)}
              sch={sc}
              key={i}
              onClick={() => handleItemClick(sc)}
            />
          ))}
        </div>

        {selectedItem && isModalOpen && (
          <ScItem sch={selectedItem} onClose={() => setIsModalOpen(false)} />
        )}
      </main>
    </div>
  );
};

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
  const [isAmounttSorted, setIsAmountSorted] = useState(false);
  const [sortedScholarships, setSortedScholarships] = useState([]);
  const [gpaFilter, setGpaFilter] = useState(4);
  const [isDropOpen, setIsDropOpen] = useState(false);
  const [satFilter, setSatFilter] = useState(1600);
  const [actFilter, setActFilter] = useState(34);

  useEffect(() => {
    let filteredScholarships = [...scholarships];

    if (actFilter !== "") {
      const filterValue = parseFloat(actFilter);
      filteredScholarships = filteredScholarships.filter(
        (scholarship) => scholarship.act <= filterValue
      );
    }

    if (satFilter !== "") {
      const filterValue = parseFloat(satFilter);
      filteredScholarships = filteredScholarships.filter(
        (scholarship) => scholarship.sat <= filterValue
      );
    }
    // Apply GPA filter if gpaFilter is set
    if (gpaFilter !== "") {
      const filterValue = parseFloat(gpaFilter);
      filteredScholarships = filteredScholarships.filter(
        (scholarship) => scholarship.gpa <= filterValue
      );
    }

    if (satFilter !== "") {
      const filterValue = parseFloat(gpaFilter);
      filteredScholarships = filteredScholarships.filter(
        (scholarship) => scholarship.gpa <= filterValue
      );
    }

    // Apply sorting if isSorted is true
    if (isSorted) {
      filteredScholarships.sort((a, b) => (a.title > b.title ? 1 : -1));
    }

    if (isAmounttSorted) {
      filteredScholarships.sort((a, b) => (a.amount < b.amount ? 1 : -1));
    }

    // Update sortedScholarships state
    setSortedScholarships(filteredScholarships);
  }, [
    scholarships,
    gpaFilter,
    isSorted,
    isAmounttSorted,
    satFilter,
    actFilter,
  ]);

  useEffect(() => {
    console.log(sortedScholarships);
  }, [sortedScholarships]);

  const handleDropOpen = () => {
    setIsDropOpen(!isDropOpen);
  };

  const alphaSort = () => {
    setIsSorted(!isSorted);
  };

  const amountSort = () => {
    setIsAmountSorted(!isAmounttSorted);
  };

  const handleItemClick = (sc) => {
    setIsModalOpen(true);
    setSelectedItem(sc);
  };

  return (
    <div>
      <Navbar />
      <main>
        <div className="text-4xl text-blue-900 ">Scholarships</div>

        <div className="filters_container flex justify-between ">
          <Dropdown title="GPA" data={GPA} setFilter={setGpaFilter} />
          <Dropdown title="SAT" data={SAT} setFilter={setSatFilter} />
          <Dropdown title="ACT" data={ACT} setFilter={setActFilter} />
          <Dropdown title="Race" data={Race} />
          <Dropdown title="Major" data={Major} />
          <Dropdown title="State" data={State} />
          <button className="h-8 flex items-center">Apply filters</button>
        </div>

        <div className="scholarships_sort-container">
          <div>
            <button
              className={
                isSorted || isAmounttSorted
                  ? "h-8 flex items-center justify-between w-40 bg-blue-300"
                  : "h-8 flex items-center justify-between w-40"
              }
              onClick={handleDropOpen}
            >
              Sort
              <FontAwesomeIcon
                className="flex justify-end"
                icon={faArrowUpWideShort}
              />{" "}
            </button>
            {isDropOpen && (
              <div className="bg-blue-100 border border-black w-40 rounded-lg z-50">
                <p
                  className={
                    isSorted
                      ? "p-2 hover:outline hover:rounded-lg hover:outline-blue-800 hover:cursor-pointer transition-all bg-blue-300"
                      : "p-2 hover:outline hover:rounded-lg hover:outline-blue-800 hover:cursor-pointer transition-all"
                  }
                  onClick={alphaSort}
                >
                  A - Z
                </p>
                <p
                  className={
                    isAmounttSorted
                      ? "p-2 hover:outline hover:rounded-lg hover:outline-blue-800 hover:cursor-pointer transition-all bg-blue-300 z-50"
                      : "p-2 hover:outline hover:rounded-lg hover:outline-blue-800 hover:cursor-pointer transition-all z-50"
                  }
                  onClick={amountSort}
                >
                  Amount
                </p>
              </div>
            )}
          </div>

          <p className=" col-span-1 text-lg">Due Date</p>
          <p className=" col-span-3 text-lg">Scolarship Name</p>
          <p className="text-lg">Amount</p>
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

import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { Navbar } from "../../Components/index";
import "./Colleges.css";

export const Colleges = () => {
  const [college, setCollege] = React.useState([]);
  const [searchedTerm, setSearchedTerm] = React.useState("");

  const fetchData = async () => {
    try {
      const result = await fetch(
        "https://parseapi.back4app.com/classes/Usuniversitieslist_University?limit=15",
        {
          headers: {
            "X-Parse-Application-Id":
              "6OHco8JSQp4s4FjxgA2JeoI0BOpEW01nhmLfGg9v", // This is your app's application id
            "X-Parse-REST-API-Key": "r3a509OxXqRPfaXMQcs3fGQm9pE1NjJIcaKFVly2", // This is your app's REST API key
          },
        }
      );
      const json = await result.json();
      if (Array.isArray(json.results)) {
        setCollege(json.results); // Set the state with the array of college objects
      } else {
        console.error("Unexpected data format:", json.results);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (searchedTerm.length > 0) {
    college.filter((c) => {
      return c.name.match(searchedTerm);
    });
  }

  return (
    <>
      <Navbar />
      <main>
        <div className="text-4xl text-blue-900 ">Colleges</div>

        <button className="mt-14 ml-10 search_input border-solid border-2 border-black rounded-full w-2/5 h-13 bg-white focus:outline-none cursor-text">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="absolute fa-lg pt-0.5"
          />
          <input
            placeholder="Search by college name"
            className="pl-10 w-full h-full text-lge bg-white focus:outline-none"
            value={searchedTerm}
            onChange={(e) => setSearchedTerm(e.target.value)}
          />
        </button>
        {searchedTerm != "" && <p>{searchedTerm}</p>}
        <div>
          <div className="colleges p-5 pl-10">
            <div className="text-xl text-black">
              {college.length} Colleges Found
            </div>
          </div>

          <div className="h-200 w-full overflow-y-scroll px-10">
            {college.map((c) => (
              <div
                key={c.objectId}
                className="college-card justify-self-center mb-10"
              >
                <button className="grid grid-cols-3 w-full border-solid border-2 border-black focus:outline-none">
                  <div className="pl-20 self-center">
                    <FontAwesomeIcon
                      icon={faThumbsUp}
                      className="fa-3x mr-3 text-blue-800"
                    />
                  </div>
                  <div className="p-1 col-span-2 self-center text-xl">
                    {c.name}
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Colleges;

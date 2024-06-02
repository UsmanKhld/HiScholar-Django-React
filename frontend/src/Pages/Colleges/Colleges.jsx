import React, { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { Navbar } from '../../Components/index'
import './Colleges.css'

export const Colleges = () => {
  const [college, setCollege] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
      const result = await fetch(
        'https://parseapi.back4app.com/classes/Usuniversitieslist_University?limit=15',
        {
          headers: {
            'X-Parse-Application-Id': '6OHco8JSQp4s4FjxgA2JeoI0BOpEW01nhmLfGg9v', // This is your app's application id
            'X-Parse-REST-API-Key': 'r3a509OxXqRPfaXMQcs3fGQm9pE1NjJIcaKFVly2', // This is your app's REST API key
          }
        }
      );
      const json = await result.json();
        console.log("Fetched data:", json); // Log the fetched data
        if (Array.isArray(json.results)) {
          setCollege(json.results); // Set the state with the array of college objects
        } else {
          console.error("Unexpected data format:", json.results);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);
  return (
    <div>
      <Navbar />
      <main>
        <div className="topnav grid grid-cols-3 border-solid border-b-4 border-black pb-2 ">
          <div className="bold pr-3">
            <div className="text-4xl text-blue-900">
              College Search
            </div>
          </div>
          <div className="pl-10 pb-2 truncate">
            <button className="search_input border-solid border-4 border-black rounded-full w-full h-13 bg-white">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="absolute fa-lg pt-0.5" />
              <span className="pl-10 text-lge">Search by college name</span>
            </button>
          </div>
          <div className="pl-20 self-center justify-self-center">
            <FontAwesomeIcon icon={faThumbsUp} className="fa-3x mr-3" />
          </div>
        </div>
        <div className="content grid grid-rows-2">
          <div className="colleges p-5 pl-10">
            <div className="text-xl text-black">{college.length} Colleges Found</div>
          </div>
          {college.map((c) => (
              <div key={c.objectId} className="college-card w-11/12 justify-self-center mb-5">
                <button className="grid grid-cols-3 w-full">
                  <div className="justify-self-center self-center">
                    <FontAwesomeIcon icon={faThumbsUp} className="fa-2x mr-3" />
                  </div>
                  <div className="p-1 col-span-2">
                    {c.name} {/* Access the 'name' property of each college object */}
                  </div>
                </button>
              </div>
            ))}
        </div>
      </main>
    </div>
  )
}

export default Colleges
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { Navbar } from "../../Components/index";
import "./Colleges.css";

export const Colleges = () => {
	const [college, setCollege] = React.useState([]);
	const [searchedTerm, setSearchedTerm] = React.useState("");
	const [page, setPage] = useState(0);
	const [loading, setLoading] = useState(false);
	const [searchQuery, setSearchQuery] = useState("");
	const [searching, setSearching] = useState(false);

	const fetchData = async (pageNum, query) => {
		try {
			const url = `https://parseapi.back4app.com/classes/Usuniversitieslist_University?limit=15&skip=${
				pageNum * 10
			}${
				query
					? `&where={"name":{"$regex":"${query}","$options":"i"}}`
					: ""
			}`;
			const result = await fetch(url, {
				headers: {
					"X-Parse-Application-Id":
						"6OHco8JSQp4s4FjxgA2JeoI0BOpEW01nhmLfGg9v", // This is your app's application id
					"X-Parse-REST-API-Key":
						"r3a509OxXqRPfaXMQcs3fGQm9pE1NjJIcaKFVly2", // This is your app's REST API key
				},
			});
			const json = await result.json();
			if (Array.isArray(json.results)) {
				setCollege((prev) =>
					pageNum === 0 ? json.results : [...prev, ...json.results]
				);
			} else {
				console.error("Unexpected data format:", json.results);
			}
		} catch (error) {
			console.error("Error fetching data:", error);
		} finally {
			setLoading(false);
			setSearching(false);
		}
	};

	useEffect(() => {
		fetchData(page, searchQuery);
	}, [page, searchQuery]);

	const loadMore = () => {
		setPage((prev) => prev + 1);
	};

	const handleSearchChange = (e) => {
		setSearchQuery(e.target.value);
		setPage(0);
		setSearching(true);
	};

	return (
		<>
			<Navbar />
			<main>
				<div className="text-4xl text-blue-900 ">Colleges</div>

				<button className="mt-10 ml-10 search_input border-solid border-2 border-black rounded-full w-2/5 h-13 bg-white focus:outline-none cursor-text">
					<FontAwesomeIcon
						icon={faMagnifyingGlass}
						className="absolute fa-lg pt-0.5"
					/>
					<input
						type="text"
						placeholder="Search by college name"
						className="pl-10 w-full h-full text-lge bg-white focus:outline-none"
						value={searchQuery}
						onChange={handleSearchChange}
					/>
				</button>

				<div>
					<div className="colleges p-5 pl-10">
						<div className="text-xl text-black">
							{college.length} Colleges Found
						</div>
					</div>

					<div className="h-128 w-full overflow-y-scroll px-10">
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
						<div className="text-center pb-10">
							{loading ? (
								<p>Loading...</p>
							) : (
								<button
									onClick={loadMore}
									className="load-more-button"
								>
									Load More
								</button>
							)}
						</div>
					</div>
				</div>
			</main>
		</>
	);
};

export default Colleges;

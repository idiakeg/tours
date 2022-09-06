import { useEffect, useState } from "react";
import "./App.css";
import Loading from "./Loading";
import NoTours from "./NoTours";
import Tours from "./Tours";

function App() {
	const [tours, setTours] = useState([]);
	const [loading, setLoading] = useState(true);
	const url = "https://course-api.com/react-tours-project";

	const fetchTours = async () => {
		setLoading(true);
		try {
			const response = await fetch(url);
			const data = await response.json();
			setTours(data);
			setLoading(false);
		} catch (error) {
			setLoading(false);
			console.log(error);
		}
	};
	useEffect(() => {
		fetchTours();
	}, []);

	const handleDelete = (id) => {
		const filteredTours = tours.filter((tour) => tour.id !== id);

		setTours(filteredTours);
	};

	const handleRefresh = () => {
		fetchTours();
	};

	return (
		<div className="app">
			{loading ? (
				<Loading />
			) : tours.length > 0 ? (
				<Tours handleDelete={handleDelete} tours={tours} />
			) : (
				<NoTours handleRefresh={handleRefresh} />
			)}
		</div>
	);
}

export default App;

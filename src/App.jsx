import { useEffect, useState } from "react";
import "./index.css";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://www.course-api.com/react-tours-project";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(url);
      const result = await response.json();

      setTours(result);
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

  const removeTour = (id) => {
    const updatedTours = tours.filter((item) => item.id !== id);

    return setTours(updatedTours);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <h1>No tours left to show</h1>
        <button className='btn' type='button' onClick={() => fetchTours()}>
          Refresh
        </button>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;

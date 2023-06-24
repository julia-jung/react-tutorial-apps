import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project';
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error();
      }
      const tours = await response.json();
      setTours(tours);
      console.log(tours);
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  return (
    <main>
      {isLoading && <Loading />}
      {tours.length ? (
        <div>
          <Tours tours={tours} removeTour={removeTour} />
          <button className='btn' onClick={() => setTours([])}>
            clear all
          </button>
        </div>
      ) : (
        <div className='title'>
          <h2>Tours are empty!</h2>
          <button className='btn' onClick={fetchTours}>
            Refresh
          </button>
        </div>
      )}
    </main>
  );
}

export default App;

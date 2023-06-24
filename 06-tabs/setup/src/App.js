import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project';
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const fetchJobs = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        return new Error();
      }
      const jobs = await response.json();
      setJobs(jobs);
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (isLoading) {
    return (
      <main>
        <section className='section loading'>
          <h1>Loading...</h1>
        </section>
      </main>
    );
  }

  const { company, dates, duties, title } = jobs[selectedIndex];

  return (
    <main>
      <section className='section'>
        <div className='title'>
          <h2>Expierence</h2>
          <div className='underline'></div>
        </div>
        <div className='jobs-center'>
          <div className='btn-container'>
            {jobs.map((job, index) => {
              return (
                <button
                  key={job.id}
                  onClick={() => setSelectedIndex(index)}
                  className={`job-btn ${
                    index === selectedIndex && 'active-btn'
                  }`}
                >
                  {job.company}
                </button>
              );
            })}
          </div>
          <article className='job-info'>
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className='job-date'>{dates}</p>
            {duties.map((duty, index) => {
              return (
                <div key={index} classNamee='job-desc'>
                  <FaAngleDoubleRight className='job-icon' />
                  <p>{duty}</p>
                </div>
              );
            })}
          </article>
        </div>
      </section>
    </main>
  );
}

export default App;

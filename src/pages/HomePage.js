// src/pages/HomePage.js
import React from 'react';
import './HomePage.css'; 
import logo from '../components/newkazi-ni-kazi-image.jpeg'
import { Link } from 'react-router-dom';

const featuredJobs = [
    { id: 1, title: 'Front-End Developer', company: 'Company A', type: 'Full Time' },
    { id: 2, title: 'Data Analyst', company: 'Company B', type: 'Part Time' },
    { id: 3, title: 'Project Manager', company: 'Company C', type: 'Remote' },
  ];

function HomePage() {
  return (
    <div className="home">
      <header className="header">
        <nav>
          <ul className="nav-list">
            <li><a href="/jobs">Find Jobs</a></li>
            <li><a href="/resources">Career Resources</a></li>
            <li><a href="/companies">Company Profiles</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/post">Post a job</a></li>
          </ul>
        </nav>
        {/*<button className="resume-btn">Upload Resume</button>*/}
      </header>

      <main className="main-content">
      <div id="demoFont">Kazi Ni Kazi</div>
        {/*<div id="gtx-trans" >&nbsp;</div>*/}
        <h1>Get your dream Job Today</h1>
        <p>Welcome to Kazi ni Kazi - your hub for finding exciting job opportunities and taking the next step in your career.</p>
        {/*<div className="search-bar">
          <input type="text" placeholder="Location" />
          <button type="submit">Search</button>
        </div>*/}
        <section className="job-categories">
          <div className="my-image" > <img src={logo} alt="Logo" /></div>
        
          </section>
        <section className="featured-jobs">
          <h2>Featured Jobs</h2>
          <div className="job-listings">
            {featuredJobs.map((job) => (
              <div className="job" key={job.id}>
                <Link to={`/jobs/${job.id}`}>{job.title}</Link>
                <p>{job.company} - {job.type}</p>
              </div>
            ))}
          </div>
        </section>
        {/*}
        <section className="featured-jobs">
          <h2>Featured Jobs</h2>
          <div className="job-listings">
            <div className="job">
              <h3>Front-End Developer</h3>
              <p>Company A - Full Time</p>
            </div>
            <div className="job">
              <h3>Data Analyst</h3>
              <p>Company B - Part Time</p>
            </div>
            <div className="job">
              <h3>Project Manager</h3>
              <p>Company C - Remote</p>
            </div>
          </div>
            </section>*/}
      </main>
    </div>
  );
}

export default HomePage;

//dynamic data
/*import React, { useEffect, useState } from 'react';

function HomePage() {
  const [featuredJobs, setFeaturedJobs] = useState([]);

  useEffect(() => {
    // Replace with your actual API endpoint
    fetch('https://api.yoursite.com/featured-jobs')
      .then((response) => response.json())
      .then((data) => setFeaturedJobs(data))
      .catch((error) => console.error('Error fetching featured jobs:', error));
  }, []);

  // Rest of your component
}
*/
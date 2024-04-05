import React, { useState } from 'react';
import './JobListingsPage.css';
import mockJobs from '../components/mock_jobs_database.json'; 



function JobListingsPage() {
  // State to hold the search term for filtering
  const [searchTerm, setSearchTerm] = useState('');

  // State to hold the selected minimum price (as a number)
  const [minPrice, setMinPrice] = useState('');

  // State to hold the selected maximum price (as a number)
  const [maxPrice, setMaxPrice] = useState('');

  // State to hold the selected duration
  const [selectedDuration, setSelectedDuration] = useState('');

  // Function to handle the search term change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Function to handle minimum price change
  const handleMinPriceChange = (e) => {
    setMinPrice(parseInt(e.target.value)); // Convert to number
  };

  // Function to handle maximum price change
  const handleMaxPriceChange = (e) => {
    setMaxPrice(parseInt(e.target.value)); // Convert to number
  };

  // Function to handle duration change
  const handleDurationChange = (e) => {
    setSelectedDuration(e.target.value);
  };

  // Filter jobs based on search term, price range (as numbers), and duration
  const filteredJobs = mockJobs.filter((job) => {
    const titleMatch = job.title.toLowerCase().includes(searchTerm.toLowerCase());
    const price = parseInt(job.price.slice(1)); // Remove '$' symbol and convert to number
    const priceMatch =
      (minPrice === '' || price >= minPrice) && (maxPrice === '' || price <= maxPrice);
    const durationMatch = selectedDuration === '' || job.duration === selectedDuration;
    return titleMatch && priceMatch && durationMatch;

    
  });

  


  return (
    <div>
      <header className="header">
        <nav>
          <ul className="nav-list">
            <li><a href="/">Home</a></li>
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
      <div className="job-listings-page">
        <input
          type="text"
          placeholder="Search jobs..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
        <div className="filters">
          <label htmlFor="min-price">Min Price:</label>
          <input
            type="number"
            id="min-price"
            value={minPrice}
            onChange={handleMinPriceChange}
          />
          <label htmlFor="max-price">Max Price:</label>
          <input
            type="number"
            id="max-price"
            value={maxPrice}
            onChange={handleMaxPriceChange}
          />
          <label htmlFor="duration">Duration:</label>
          <select id="duration" value={selectedDuration} onChange={handleDurationChange}>
            <option value="">All</option>
            {/* Add options for different durations based on your data */}
            <option value="Full Time">Full Time</option>
            <option value="Part Time">Part Time</option>
            <option value="Contract">Contract</option>
          </select>
        </div>
        <div className="job-listings">
          {filteredJobs.length > 0 ? (
            
            filteredJobs.map((job) => (
              
              <div className="job-card" key={job.id}>
                <h3>{job.title}</h3>
                <p>Client: {job.client}</p>
                <p>Duration: {job.duration}</p>
                <p>Price: {job.price}</p>
              </div>
            ))
          ) : (
            <p>No jobs found</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default JobListingsPage;


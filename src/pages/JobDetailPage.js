// src/pages/JobDetailPage.js
import React from 'react';
import './JobDetailPage.css';

const JobDetailPage = () => {
  // Placeholder job data. In a real app, you'd fetch this data based on the job's ID.
  const job = {
    id: 1,
    title: 'Full Stack Developer',
    company: 'Tech Company',
    location: 'Remote',
    description: 'Full Stack Developer with experience in React and Node.js...',
    // More job details here...
  };

  const applyForJob = () => {
    // Logic for applying to the job
    alert('Applied for the job successfully!');
  };

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
    <div className="job-detail-container">
      <h1>{job.title}</h1>
      <h2>{job.company}</h2>
      <p>{job.location}</p>
      <p className="job-description">{job.description}</p>
      <button onClick={applyForJob} className="apply-btn">Apply Now</button>
      {/* Placeholder for Related Jobs */}
      <div className="related-jobs">
        {/* In a real app, this would be dynamic */}
        <h3>Related Jobs:</h3>
        <p>Other jobs listed by Tech Company...</p>
      </div>
    </div> </div>
  );
};

export default JobDetailPage;

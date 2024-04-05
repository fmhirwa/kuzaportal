import React, { useState } from 'react';
import './PostJobPage.css';

const PostJobPage = () => {
  const [jobDetails, setJobDetails] = useState({
    title: '',
    description: '',
    category: '',
    location: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobDetails({ ...jobDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, submit these details to the server
    console.log('Job Details:', jobDetails);
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
    <form className="post-job-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Job Title"
        required
        onChange={handleChange}
      />
      <textarea
        name="description"
        placeholder="Job Description"
        required
        onChange={handleChange}
      ></textarea>
      <input
        type="text"
        name="category"
        placeholder="Category"
        required
        onChange={handleChange}
      />
      <input
        type="text"
        name="location"
        placeholder="Location"
        required
        onChange={handleChange}
      />
      <button type="submit" className="submit-btn">Post Job</button>
    </form> </div>
  );
};

export default PostJobPage;

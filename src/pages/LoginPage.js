

import React, { useState } from 'react';
import './LoginPage.css';
import './HomePage.css';

function LoginPage() {
  const [activeTab, setActiveTab] = useState('login');
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [signupData, setSignupData] = useState({ name: '', email: '', password: '' });

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSignupChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      // Implement login logic here, typically involving a fetch/axios request to your backend
      console.log('Login data:', loginData);
      // Upon successful login, redirect to a new page or change the component state
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    try {
      // Implement signup logic here, typically involving a fetch/axios request to your backend
      console.log('Signup data:', signupData);
      // Upon successful signup, you may want to automatically log the user in or confirm their email
    } catch (error) {
      console.error('Error during signup:', error);
    }
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
          </ul>
        </nav>
        {/*<button className="resume-btn">Upload Resume</button>*/}
      </header>
    <div className="login-page">
      <div className="tab">
        <button
          className={activeTab === 'login' ? 'active' : ''}
          onClick={() => setActiveTab('login')}
        >
          Login
        </button>
        <button
          className={activeTab === 'signup' ? 'active' : ''}
          onClick={() => setActiveTab('signup')}
        >
          Sign Up
        </button>
      </div>
      <div className="form-container">
        {activeTab === 'login' ? (
          <form className="login-form" onSubmit={handleLoginSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              onChange={handleLoginChange}
              value={loginData.email}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              onChange={handleLoginChange}
              value={loginData.password}
            />
            <button type="submit">Log In</button>
          </form>
        ) : (
          <form className="signup-form" onSubmit={handleSignupSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              onChange={handleSignupChange}
              value={signupData.name}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              onChange={handleSignupChange}
              value={signupData.email}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              onChange={handleSignupChange}
              value={signupData.password}
            />
            <button type="submit">Sign Up</button>
          </form>
        )}
      </div>
    </div> </div>
  );
}

export default LoginPage;

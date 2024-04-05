// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'; // Ensure correct import paths
import LoginPage from './pages/LoginPage';
import JobListingsPage from './pages/JobListingsPage';
import JobDetailPage from './pages/JobDetailPage';
import PostJobPage from './pages/PostJobPage';

function App() {
  return (
    <Router>
      <div>
          <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/jobs" element={<JobListingsPage />} />
          <Route path="/jobs/:id" element={<JobDetailPage />} />
          <Route path="/post" element={<PostJobPage />} />
          {/* Adjust other routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}


export default App;
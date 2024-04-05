This document includes the project summary, and quick set up instructions.

## Quick Setup Instructions for Kazi ni Kazi Job Portal

Follow these steps to set up the Kazi ni Kazi job portal for development on your local machine. This guide assumes you have basic knowledge of JavaScript, Node.js, and React.

#### Prerequisites

- Node.js installed on your machine (v14 or later recommended).
- MongoDB set up locally or a MongoDB Atlas account for database management.
- Git for version control.

#### Setting Up the Backend

1. **Clone the Repository**

   - Clone the project repository from GitHub: https://github.com/fmhirwa/kuzaportal/

     ```bash
     git clone <repository-url>
     cd <repository-directory>/backend
     ```

2. **Install Dependencies**

   - Inside the backend directory, install the required Node.js dependencies.

     ```bash
     npm install
     ```

3. **Configure Environment Variables**

   - Create a `.env` file in the backend root directory. Configure your MongoDB connection string and other environment-specific variables.

     ```
     MONGODB_URI=<your_mongodb_connection_uri>
     PORT=5000
     ```

4. **Start the Backend Server**

   - Run the following command to start the server:

     ```bash
     npm start
     ```

   - Ensure no errors in the console, and the server is running on the specified port.

#### Setting Up the Frontend

1. **Navigate to the Frontend Directory**

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Environment Configuration**

   - Create a `.env` file in the frontend root directory. Set the backend server URL if it differs from the default configuration.

     ```
     REACT_APP_BACKEND_URL=http://localhost:5000
     ```

4. **Start the React Development Server**

   ```bash
   npm start
   ```

   - This will open the application in your default web browser. If it doesn’t automatically open, visit `http://localhost:3000`.

#### Deployment

The Kazi ni Kazi job portal is hosted at `https://kaziportal2.web.app/`. For deployment, the application uses Firebase Hosting, providing a secure, fast hosting for the web app with CDN, SSL, and automatic scaling.

1. **Build the Frontend for Production**

   - Before deployment, build your React app to optimize it for production.

     ```bash
     npm run build
     ```
  Make sure the firebase deploy does not overwrite the `index.html` file.
2. **Deploy to Firebase**

   - Ensure you have the Firebase CLI installed and are logged in.
   - Initialize Firebase in your project directory (if not done already) and follow the prompts.

     ```bash
     firebase init
     ```

   - Deploy your application to Firebase Hosting.

     ```bash
     firebase deploy
     ```



## Project Summary: Kazi ni Kazi Job Portal

The Kazi ni Kazi project aims to develop a comprehensive job portal specifically designed to bridge the gap between job seekers and employers. The platform facilitates the discovery of employment opportunities, submission of job applications, and posting of new job openings by employers. It targets a wide range of users, including recent graduates, experienced professionals, and companies across various industries.

### System Design Overview

#### Frontend

- **Framework:** The frontend is built using React, leveraging its component-based architecture for a modular and interactive user interface.
- **Pages and Components:**
  - **HomePage:** Serves as the landing page, highlighting the platform's features, showcasing featured jobs, and providing navigation to other sections.
  - **JobListingsPage:** Displays a list of available jobs which users can filter based on parameters like job title, salary range, and job type. It fetches job listings dynamically from the backend.
  - **JobDetailPage:** Provides detailed information about a specific job posting, including the job description, company overview, and an "Apply" button.
  - **PostJobPage:** Available for employers to submit new job postings through a form specifying job details such as title, description, salary, and duration.
- **Styling:** CSS modules are used for styling components, ensuring a responsive and visually appealing layout across devices.

#### Backend

- **Technology:** Node.js with the Express framework is used to create RESTful APIs that handle requests from the frontend.
- **Database:** MongoDB, a NoSQL database, stores job listings, user profiles, and application details. Mongoose ODM is utilized for database schema definition and data management.
- **Authentication:** Future implementations will include user authentication and authorization mechanisms to support secure access to specific functionalities, such as job posting and application submission.

#### Features

- **Dynamic Job Listings:** Users can search and filter jobs based on various criteria. The backend supports these operations by querying the MongoDB database.
- **Job Application:** Job seekers can apply for jobs directly through the platform. Applied jobs and the status of applications can be tracked in the user's profile.
- **Job Posting:** Employers can create and manage their job postings, including editing and removing listings as needed.

#### Deployment

- The application is deployed to a firebase for dynamic scaling to accommodate varying loads.

### Future Enhancements

- **User Profiles:** Implementing comprehensive profiles for job seekers to include resumes, skills, experience, and education.
- **Employer Profiles:** Allowing companies to create profiles showcasing their culture, values, and all job openings.
- **Notifications:** Email notifications for job seekers about new job postings that match their profiles and updates on their application statuses.
- **Analytics:** Providing analytics for employers on the number of applications received, views on job postings, and the effectiveness of their listings.

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './component/Navbar/Navbar';
import Login from './component/Auth/LogIn';
import Courses from './component/Courses/Courses';
import SignUp from './component/Auth/SignUp';
import ErrorBoundary from './component/Error';

function App() {
  return (
    <ErrorBoundary>
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Courses />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
    </ErrorBoundary>
  );
}

export default App;

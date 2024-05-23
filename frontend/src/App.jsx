import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Careers, Checklist, Colleges, Dashboard, FinancialAid, ForgotPass, Landing, Login, MyCounselor, MyPoints, Profile, Scholarships, SignUp, Volunteering } from './Pages/index';
import './App.css'
import ProtectedRoute from './Components/ProtectedRoute';

function Logout() {
  localStorage.clear();
  return <Navigate to="/login" />
}

function SignUpAndLogout() {
  localStorage.clear();
  return <SignUp />
}

function App() {

  return (
    <Router>
        <div>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignUpAndLogout />} />
            <Route path='/forgot-password' element={<ForgotPass />} />
            <Route path="/dashboard" element={<ProtectedRoute> <Dashboard  /> </ProtectedRoute>} />
            {/* <Route path="/dashboard" element={ <Dashboard  />} /> */}
            <Route path="/checklist" element={<Checklist  />} />
            <Route path="/counselor" element={<MyCounselor />} />
            <Route path="/points" element={<MyPoints />} />
            <Route path="/financial-aid" element={<FinancialAid/>} />
            <Route path="/scholarships" element={<Scholarships/>} />
            <Route path="/colleges" element={<Colleges/>} />
            <Route path="/careers" element={<Careers/>} />
            <Route path="/volunteering" element={<Volunteering/>} />
            <Route path="/profile" element={<Profile/>} />
          </Routes>
        </div>
      </Router>
  )
}

export default App

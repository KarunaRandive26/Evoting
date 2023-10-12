import React from "react";
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Welcome from "./pages/Welcome";
import AuthPage from "./pages/AuthPage";
import OtpPage from "./pages/OtpPage";
import UserPage from "./pages/UserPage";
import Home from "./components/Home";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/userauthentication" element={<AuthPage />} />
        <Route path="/otpVerification" element={<OtpPage />} />
        <Route path="/userpage" element={<UserPage />}>
          <Route path="home"/>
          <Route path="guidelines"/>
          <Route path="vote"/>
          <Route path="contact"/>
        </Route>

      </Routes>
    </div>
  );
}

export default App;

import React from "react";
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Welcome from "./pages/Welcome";
import AuthPage from "./pages/AuthPage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element = {<Welcome/>}/>
        <Route path="/userauthentication" element = {<AuthPage/>}/>
        
      </Routes>
    </div>
  );
}

export default App;

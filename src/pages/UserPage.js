import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Sidebar from "../components/Sidebar";
import Contact from "../components/Contact";
const UserPage = () => {
    return (
        <>
            <div className="userpage d-flex">
                <Sidebar />
                <div className="mainpage col-10">
                    <div className="content">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/guidelines" element={<Home/>}/>
                        <Route path="/vote" element={<Home/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                        <Route path="/result" element={<Home/>}/>
                    </Routes>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserPage;
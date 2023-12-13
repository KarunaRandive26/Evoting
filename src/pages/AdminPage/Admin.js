import React from "react";
import { Route, Routes } from "react-router-dom";

import Sidebar from "../../components/AdminPage/Sidebar";
import Home from "../../components/AdminPage/Home";
import Candidate from "../../components/AdminPage/Candidate";
import Elections from "../../components/AdminPage/Elections";
import Result from "../../components/AdminPage/Result";

const AdminPage = () => {
    return (
        <>
            <div className="userpage d-flex">
                <Sidebar/>
                <div className="mainpage col-10">
                    <div className="content">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/Home" element={<Home/>} />
                        <Route path="/Elections" element={<Elections/>} />
                        <Route path="/addCandidate" element={<Candidate/>} />
                        <Route path="/result" element={<Result/>}/>
                    </Routes>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminPage;
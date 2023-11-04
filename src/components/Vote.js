import React from "react";
import "./Sidebar.css";
import "./Vote.css";
import {NavLink } from "react-router-dom";
const Vote = () => {
    return (
        <>
            <div className="userpage votepage">
                <div className="voteL-1">1. Choose the Election Assembly</div>
                
                <hr className="vline-1 col-11 m-auto"></hr>
                <div class='walkthrough-pagination'>
                    <NavLink to="/userpage/vote" className='dot'></NavLink>
                    <NavLink to="/userpage/submit" className='dot'></NavLink>
                </div>
            </div>
        </>
    );
};

export default Vote;
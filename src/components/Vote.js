import React from "react";
import "./Sidebar.css";
import "./Vote.css";
import { NavLink } from "react-router-dom";
const Vote = () => {
    return (
        <>
            <div className="userpage votepage">
                <div className="voteL-1">1. Choose the Election Assembly</div>
                <a className="consti p-3" href="/userpage/submit">
                    <div className="asmb col-10 d-flex m-auto p-3">
                        <div className="asmb-name col-11">Gram Panchayat</div>
                        <div className="next-btn m-auto"><img className="sec-icon p-1" src="../images/next1.png" height="40px" width="40px"></img></div>
                    </div>
                </a>
                <a className="consti p-3" href="/userpage/submit">
                    <div className="asmb col-10 d-flex m-auto p-3">
                        <div className="asmb-name col-11">Gram Panchayat</div>
                        <div className="next-btn m-auto"><img className="sec-icon p-1" src="../images/next1.png" height="40px" width="40px"></img></div>
                    </div>
                </a>
                <a className="consti p-3" href="/userpage/submit">
                    <div className="asmb col-10 d-flex m-auto p-3">
                        <div className="asmb-name col-11">Gram Panchayat</div>
                        <div className="next-btn m-auto"><img className="sec-icon p-1" src="../images/next1.png" height="40px" width="40px"></img></div>
                    </div>
                </a>
                <hr cla ssName="vline-1 col-11 m-auto"></hr>
                <div class='walkthrough-pagination'>
                    <NavLink to="/userpage/vote" className='dot'></NavLink>
                    <NavLink to="/userpage/submit" className='dot'></NavLink>
                </div>
            </div>
        </>
    );
};

export default Vote;
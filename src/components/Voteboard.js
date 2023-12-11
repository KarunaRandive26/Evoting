import React, { useEffect } from "react";
import "./Sidebar.css";
import "./Voteboard.css";
import { NavLink } from "react-router-dom";
const Voteboard = () => {
    useEffect(() => {
        const asmbElements = document.querySelectorAll(".vote-sec");
        const colors = ['#0dcaf0','#799eff','blue','#320398']
        asmbElements.forEach((element, idx) => {
            element.style.backgroundColor = colors[idx%4];
        });
      }, []);
    return (
        <>
            <div className="userpage votepage">
                <div className="board-title">Dashboard</div>
                <div className="consti-info">
                    <div className="Consti-Sec d-flex">
                        Election Type: <div className="consti-info">GramPanchayat</div>
                    </div>
                    <div className="Consti-Sec d-flex">
                        District: <div className="consti-info">Ratnagiri</div>
                    </div>
                    <div className="Consti-Sec d-flex">
                        Tehsil: <div className="consti-info">Khed</div>
                    </div>
                    <div className="Consti-Sec d-flex">
                        Village: <div className="consti-info">Bhadgaon</div>
                    </div>
                </div>
                <div className="row v-dash p-2">
                    <div className="vote-sec col-md-3">
                        <div className="mx-1 vote-sec-a p-2 d-flex">
                            <div>
                                <div className="v-count">3</div>
                                <div className="v-sec-name">No. Of Positions</div>
                            </div>
                            <img className="v-sec-ic p-1" src="../images/slide.png" height="50%" width="50%" ></img>
                        </div>
                        <div className="mx-1 v-info p-2">more info</div>
                    </div>
                    <div className="vote-sec col-md-3 p-2">
                        <div className="mx-1 vote-sec-a p-2 d-flex">
                            <div>
                                <div className="v-count">3</div>
                                <div className="v-sec-name">No. Of Candidates</div>
                            </div>
                            <img className="v-sec-ic p-1" src="../images/avatar.png" height="50%" width="50%" ></img>
                        </div>
                        <div className="mx-1 v-info p-2">more info</div>
                    </div>
                    <div className="vote-sec col-md-3">
                        <div className="mx-1 vote-sec-a p-2 d-flex">
                            <div>
                                <div className="v-count">3</div>
                                <div className="v-sec-name">Total No. Of Voters</div>
                            </div>
                            <img className="v-sec-ic p-1" src="../images/candidate.png" height="50%" width="50%" ></img>
                        </div>
                        <div className="mx-1 v-info p-2">more info</div>
                    </div>
                    <div className="vote-sec col-md-3">
                        <div className="mx-1 vote-sec-a p-2 d-flex">
                            <div>
                                <div className="v-count">3</div>
                                <div className="v-sec-name">Voters Voted</div>
                            </div>
                            <img className="v-sec-ic p-1" src="../images/edit.png" height="50%" width="50%" ></img>
                        </div>
                        <div className="mx-1 v-info p-2">more info</div>
                    </div>
                </div>
                <a href="/userpage/submit"><div className="btn-a"><button>Go to the Vote</button></div></a>
                <div class='walkthrough-pagination'>
                    <NavLink to="/userpage/vote" className='dot'></NavLink>
                    <NavLink to="/userpage/voteboard" className='dot'></NavLink>
                    <NavLink to="/userpage/submit" className='dot'></NavLink>
                </div>
            </div>
        </>
    );
};

export default Voteboard;
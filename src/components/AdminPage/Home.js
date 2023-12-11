import React from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div className="d-flex">
                <div className="Home backimage p-2">
                    <div className="h1 home-title m-3">Create Election</div>
                    <div className="createpage d-flex">
                        <form className="ele-form mx-auto p-3 m-3">
                            <div className="ele-type d-flex ele-sec">
                                <label className="mx-2 px-3" for="">Election Type :</label>
                                <div className=" mx-2"><input className="check" type="checkbox" name="name" placeholder="Username" />Gram panchayat</div>
                                <div className=" mx-2"><input className="check" type="checkbox" name="name" placeholder="Username" />Municipality</div>
                                <div className=" mx-2"><input className="check" type="checkbox" name="name" placeholder="Username" />State Legislative Assembly</div>
                                <div className=" mx-2"><input className="check" type="checkbox" name="name" placeholder="Username" />President</div>
                            </div>
                            <hr className="line-b"></hr>
                            <div className="ele-date light d-flex ele-sec">
                                <label className="mx-2 px-3" for="">Date :</label>
                                <input type="date"></input>
                            </div>
                            <hr className="line-b"></hr>
                            <div className="ele-stime ele-time d-flex ele-sec">
                                <label className="mx-2 px-3" for="">Start Time :</label>
                                <input type="time"></input>
                            </div>
                            <hr className="line-b"></hr>
                            <div className="ele-etime  ele-time d-flex ele-sec">
                                <label className="mx-2 px-3" for="">End Time :</label>
                                <input type="time"></input>
                            </div>
                            <hr className="line-b"></hr>
                            <div className="candidate">
                                <NavLink to="/admin/addCandidate"><button className="btn-sm btn-c p-2">Add Candidates</button></NavLink>
                            </div>
                        </form>

                    </div>
                    <img src="../images/ashok.png" height="200px" ></img>
                </div>
            </div>
        </>
    );
};

export default Home;
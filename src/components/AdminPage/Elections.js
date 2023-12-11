import React from "react";
import { NavLink } from "react-router-dom";
import "./Elections.css";

const Elections = () => {
    return (
        <>
            <div className="elect-page p-3">
                {/* <div class="card col-4" >
                    <div class="card-body">
                        <h5 class="card-title elect-name">GramPanchayat</h5>
                        <div className="d-flex">
                        <p class="card-text py-1 px-2 m-1">start time</p>
                        <p class="card-text py-1 px-2 m-1">end time</p>
                        </div>
                        
                        <NavLink to="/admin/addCandidate" class="btn-sm card-btn p-2">Add Candidates</NavLink>
                    </div>
                </div> */}
                <div class="col-xl-6 col-sm-6 col-12">
                    <div class="card">
                        <div class="card-content">
                            <div class="card-body">
                                <div class="media d-flex">
                                    <div class="align-self-center">
                                        <i class="fa-solid fa-user-check danger font-large-2 float-left"></i>
                                    </div>
                                    <div class="media-body text-right">
                                        <h2>Gram Panchayat</h2>
                                        <h4>26 Oct 2023</h4>
                                        <p class="card-text py-1 px-2 m-1">10:00 AM</p>
                                        <p class="card-text py-1 px-2 m-1">TO</p>
                                        <p class="card-text py-1 px-2 m-1">5:00 PM</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Elections;
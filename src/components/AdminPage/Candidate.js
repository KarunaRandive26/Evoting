import React from "react";
import "./Candidate.css";

const Candidate = () => {
    return (
        <>
            <div className="d-flex">
                <div className="Home backimage p-2">
                    <div className="h1 home-title">Create Election</div>
                    <div className="createpage">
                        <div className="voteL-1">Add the Candidates </div>
                        <div className="table-header d-flex my-2">
                            <div className="col-2">Name Of the candidate</div>
                            <div className="col-5">Party</div>
                            <div className="col-2">Symbol</div>
                            <div className="col-3">Vote</div>
                        </div>
                        <div className="table-data d-flex ">
                            <div className="col-2 m-auto">
                                <div className="cad-name">Narendra Modi</div>
                            </div>
                            <div className="col-5 m-auto">Bharatiya Janata Party</div>
                            <div className="col-2 m-auto"><img className="" src="../images/logo1.png" ></img></div>
                            <div className="col-3 "><a className="vote-btn-a" href="/submitvote"><div className="btn-sm add-btn col-4 m-auto">Add</div></a></div>
                        </div>
                        <hr className="vline-1 col-11 m-auto"></hr>
                        <div className="table-data d-flex ">
                            <div className="col-2 m-auto">
                                <div className="cad-name">Narendra Modi</div>
                            </div>
                            <div className="col-5 m-auto">Bharatiya Janata Party</div>
                            <div className="col-2 m-auto"><img className="" src="../images/logo1.png" ></img></div>
                            <div className="col-3 m-auto"><a className="vote-btn-a" href="/submitvote"><div className="btn-sm add-btn col-4 m-auto">Add</div></a></div>
                        </div>
                        <hr className="vline-1 col-11 m-auto"></hr>
                        <div className="table-data d-flex ">
                            <div className="col-2 m-auto">
                                <div className="cad-name">Narendra Modi</div>
                            </div>
                            <div className="col-5 m-auto">Bharatiya Janata Party</div>
                            <div className="col-2 m-auto"><img className="" src="../images/logo1.png" ></img></div>
                            <div className="col-3 m-auto"><a className="vote-btn-a" href="/submitvote"><div className="btn-sm add-btn col-4 m-auto">Add</div></a></div>
                        </div>
                        <hr className="vline-1 col-11 m-auto"></hr>
                        <div className="table-data d-flex ">
                            <div className="col-2 m-auto">
                                <div className="cad-name">Narendra Modi</div>
                            </div>
                            <div className="col-5 m-auto">Bharatiya Janata Party</div>
                            <div className="col-2 m-auto"><img className="" src="../images/logo1.png" ></img></div>
                            <div className="col-3 m-auto"><a className="vote-btn-a" href="/submitvote"><div className="btn-sm add-btn col-4 m-auto">Add</div></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Candidate;
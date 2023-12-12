import React from "react";
import "./Sidebar.css";
import "./Voteboard.css";
import { NavLink } from "react-router-dom";
const Voteboard = () => {
    
    return (
        <>
            

<div class="grey-bg container-fluid">
  <section id="minimal-statistics">
    <div class="row">
      <div class="col-12 mt-3 mb-1">
        <h4 class="text-uppercase">Election Analysis</h4>
        <p>Statistics of Election.</p>
      </div>
    </div>
    <div class="row">
      <div class="col-xl-6 col-sm-6 col-12 py-3"> 
        <div class="card">
          <div class="card-content">
            <div class="card-body">
              <div class="media d-flex">
                <div class="align-self-center">
                  <i class="fa-solid fa-user-tie icon-primary"></i>
                </div>
                <div class="media-body text-right">
                  <h3>50</h3>
                  <span>Number of Positions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-6 col-sm-6 col-12 py-3">
        <div class="card">
          <div class="card-content">
            <div class="card-body">
              <div class="media d-flex">
                <div class="align-self-center">
                  <i class="fa-solid fa-users icon-warning"></i>
                </div>
                <div class="media-body text-right">
                  <h3>156</h3>
                  <span>Number of Candidates</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-6 col-sm-6 col-12 py-3">
        <div class="card">
          <div class="card-content">
            <div class="card-body">
              <div class="media d-flex">
                <div class="align-self-center">
                  <i className="fa-solid fa-user icon-success"></i>
                </div>
                <div class="media-body text-right">
                  <h3>273992</h3>
                  <span>Number of voters</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-6 col-sm-6 col-12 py-3">
        <div class="card">
          <div class="card-content">
            <div class="card-body">
              <div class="media d-flex">
                <div class="align-self-center">
                  <i class="fa-solid fa-user-check icon-danger"></i>
                </div>
                <div class="media-body text-right">
                  <h3>252904</h3>
                  <span>Voters Voted</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-6 col-sm-6 col-12 py-3">
        <div class="card">
          <div class="card-content">
            <div class="card-body">
              <div class="media d-flex">
                <div class="align-self-center">
                  <i class="fa-solid fa-percent icon-skyBlue"></i>
                </div>
                <div class="media-body text-right">
                  <h3>92.30%</h3>
                  <span >Voting Percentage</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </section>
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
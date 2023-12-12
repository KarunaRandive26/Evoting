import React from "react";
import "./Candidate.css";
import { NavLink } from "react-router-dom";

const Candidate = () => {
    return (
        <>
            <div className="adminpage">
                <div className="voteL-1">Add Candidates</div>
                <div className="table-header d-flex my-2">
                    <div className="col-2">Select</div>
                    <div className="col-3">Name Of the candidate</div>
                    <div className="col-5">Party</div>
                    <div className="col-2">Symbol</div>
                </div>
                <div className="table-data d-flex ">
                    <div className="col-2"><input className="cad-check" type="checkbox"></input></div>
                    <div className="col-3 m-auto">
                        <div className="cad-name">Narendra Modi</div>
                    </div>
                    <div className="col-5 m-auto">Bharatiya Janata Party</div>
                    <div className="col-2 m-auto"><img className="" src="../images/logo1.png" ></img></div>
                </div>
                <hr className="vline-1 col-11 m-auto"></hr>
                <div className="table-data d-flex ">
                <div className="col-2"><input className="cad-check" type="checkbox"></input></div>
                    <div className="col-3 m-auto">
                        <div className="cad-name">Narendra Modi</div>
                    </div>
                    <div className="col-5 m-auto">Bharatiya Janata Party</div>
                    <div className="col-2 m-auto"><img className="" src="../images/logo1.png" ></img></div>
                </div>
                <hr className="vline-1 col-11 m-auto"></hr>
                <div className="table-data d-flex ">
                <div className="col-2"><input className="cad-check" type="checkbox"></input></div>
                    <div className="col-3 m-auto">
                        <div className="cad-name">Narendra Modi</div>
                    </div>
                    <div className="col-5 m-auto">Bharatiya Janata Party</div>
                    <div className="col-2 m-auto"><img className="" src="../images/logo1.png" ></img></div>
                </div>
                <hr className="vline-1 col-11 m-auto"></hr>
                <div className="table-data d-flex ">
                <div className="col-2"><input className="cad-check" type="checkbox"></input></div>
                    <div className="col-3 m-auto">
                        <div className="cad-name">Narendra Modi</div>
                    </div>
                    <div className="col-5 m-auto">Bharatiya Janata Party</div>
                    <div className="col-2 m-auto"><img className="" src="../images/logo1.png" ></img></div>
                </div>
                <hr className="vline-1 col-11 m-auto"></hr>
                <div class='walkthrough-pagination'>
                    <NavLink to="/userpage/vote" className='dot'></NavLink>
                    <NavLink to="/userpage/voteboard" className='dot'></NavLink>
                    <NavLink to="/userpage/submit" className='dot'></NavLink>
                </div>
            </div>
        </>
    );
};

export default Candidate;


// import React from "react";
// import "./Candidate.css"; // Import your custom styles


// const Candidate = () => {
//   // Sample candidate data
//   const candidates = [
//     {
//       id: 1,
//       name: "John Doe",
//       party: "Unity Party",
//       position: "President",
//       imageUrl: "path/to/image1.jpg",
//     },
//     {
//       id: 2,
//       name: "Jane Smith",
//       party: "Liberty Party",
//       position: "Vice President",
//       imageUrl: "path/to/image2.jpg",
//     },
//     // Add more candidates as needed
//   ];

//   return (
//     <div className="container mt-5">
//       <h2 className="text-center mb-4">Candidate List</h2>
//       <div className="row">
//         <div className="col-lg-4 mb-4">
//           <div className="card candidate-card shadow">
//             <img
//               src={candidates[0].imageUrl}
//               alt={candidates[0].name}
//               className="card-img-top"
//             />
//             <div className="card-body">
//               <h5 className="card-title">{candidates[0].name}</h5>
//               <p className="card-text">{candidates[0].party}</p>
//               <p className="card-text">{candidates[0].position}</p>
//               <div className="d-flex justify-content-between align-items-center mt-3">
//                 <button className="btn btn-info btn-sm">
                  
//                   Details
//                 </button>
//                 <button className="btn btn-success btn-sm">
                 
//                   Vote
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Repeat the above card structure for each candidate */}
        
//       </div>
//     </div>
//   );
// };

// export default Candidate;

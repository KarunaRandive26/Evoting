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

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ViewCrew = ({ crew }) => {
  return (
    <>
      <h1>View Crew</h1>
      <h3>Crew Members: {crew.length}</h3>

      {/*display the crew members*/}
      <div className="crew-container">
        {crew.map((crewMember) => {
          return (
            <div key={crewMember.id} className="crew-card">
              {/* <img src={crewMember.image} alt={crewMember.name} /> */}
              <h3>Name: {crewMember.Name}</h3>
              <h4>Speed: {crewMember.Speed}</h4>
              <h4>Color: {crewMember.Color}</h4>

              <Link to={`/edit/${crewMember.id}`}>Edit Crewmate</Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ViewCrew;

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../client";
import "./ViewTeams.css";

const ViewTeams = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    async function getTeams() {
      const { data } = await supabase
        .from("Teams")
        .select()
        .order("created_at", { ascending: true });
      setTeams(data);
    }
    getTeams();
  }, []);

  return (
    <>
      <h1>View Teams</h1>
      <h3>Total Teams: {teams.length}</h3>

      <div className="team-container">
        {teams.map((team) => {
          return (
            <>
              <Link to={`/view/${team.id}`} key={team.id}>
                <div key={team.id} className="team-card">
                  <h3>Team Name: {team.TeamName}</h3>
                  <h4>Home City: {team.HomeCity}</h4>
                  <h4>Team Color: {team.TeamColor}</h4>
                <Link to={`/edit/${team.id}`}>Edit Team</Link>
                </div>
              </Link>

            </>
          );
        })}
      </div>
    </>
  );
};

export default ViewTeams;

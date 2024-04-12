import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "../client";
// this will have a detailed page about the specific team
const ViewTeam = () => {
  const { id } = useParams();
  const [team, setTeam] = useState({});

  // fetch the team data from the database
  // use the teamId to get the specific team

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("Teams")
        .select()
        .eq("id", id);
      if (error) {
        console.error("Error fetching team:", error);
      } else if (data.length > 0) {
        console.log("Team fetched:", data[0]);
        setTeam(data[0]);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <h1>View Team</h1>
        <h3>Team Name: {team.TeamName}</h3>
        <h4>Home City: {team.HomeCity}</h4>
        <h4>Team Color: {team.TeamColor}</h4>
    </div>
  );
};

export default ViewTeam;

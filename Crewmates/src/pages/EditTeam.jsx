import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "../client";

const EditTeam = () => {
  // State variables
  const { id } = useParams();
  const navigate = useNavigate();
  const [team, setTeam] = useState({
    TeamName: "",
    HomeCity: "",
    TeamColor: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from('Teams')
        .select()
        .eq('id', id);
      if (error) {
        console.error('Error fetching team:', error);
      } else if (data.length > 0) {
        console.log('Team fetched:', data[0]);
        setTeam(data[0]);
      }
    };
  
    fetchData();
  }, [id]);

  const updateTeam = async () => {
    const { data, error } = await supabase
      .from("Teams")
      .update({
        TeamName: team.TeamName,
        HomeCity: team.HomeCity,
        TeamColor: team.TeamColor,
      })
      .eq("id", id);
    if (error) {
      console.error("Update error:", error);
    } else {
      console.log("Team updated:", data);
      navigate("/view");
    }
  };

  const deleteTeam = async () => {
    const { data, error } = await supabase.from("Teams").delete().eq("id", id);
    if (error) {
      console.error("Delete error:", error);
    } else {
      console.log("Team deleted");
      navigate("/view");
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    updateTeam();
  };

  return (
    <>
      <h1>Edit Team</h1>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <label>
            Team Name:
            <input
              type="text"
              value={team.TeamName}
              onChange={(e) =>
                setTeam({ ...team, TeamName: e.target.value })
              }
            />
          </label>
          <label>
            Home City:
            <input
              type="text"
              value={team.HomeCity}
              onChange={(e) =>
                setTeam({ ...team, HomeCity: e.target.value })
              }
            />
          </label>
          <label>
            Team Color:
            <input
              type="text"
              value={team.TeamColor}
              onChange={(e) =>
                setTeam({ ...team, TeamColor: e.target.value })
              }
            />
          </label>

          <button type="submit">Update Team</button>
        </form>
        <button onClick={deleteTeam}>Delete Team</button>
      </div>
    </>
  );
};

export default EditTeam;

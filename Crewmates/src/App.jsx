import { useState, useEffect } from "react";
import { useRoutes } from 'react-router-dom';
import "./App.css";
import { Link } from 'react-router-dom';
import Home from './pages/Home';
import EditTeam from './pages/EditTeam';
import AddTeam from './pages/AddTeam';
import ViewTeams from './pages/ViewTeams';
import { supabase } from './client';
import ViewTeam from './pages/ViewTeam';

function App() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    async function getTeams() {
      const {data} = await supabase.from("Teams").select().order('created_at', {ascending: true});
      setTeams(data);
    }
    getTeams();
  }, []);

  const element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/edit/:id", element: <EditTeam/> },
    { path: "/new", element: <AddTeam /> },
    { path: "/view", element: <ViewTeams teams={teams}/> },
    { path: "/view/:id", element: <ViewTeam/> }
  ]);

  return <>
    <div className="header">
      <h1>Fantasy Sports Manager 🏈</h1>
      <Link to="/"><button className="headerBtn"> Home </button></Link>
      <Link to="/new"><button className="headerBtn"> Add Team 🏆 </button></Link>
      <Link to="/view"><button className="headerBtn">Explore Teams 🔍</button></Link>
    </div>
    {element}
  </>;
}

export default App;




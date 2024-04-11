import { useState, useEffect } from "react";
import { useRoutes } from 'react-router-dom'
import "./App.css";
import { Link } from 'react-router-dom'
import Home from './pages/Home'
import EditCrew from './pages/EditCrew'
import AddCrew from './pages/AddCrew'
import ViewCrew from './pages/ViewCrew'
import { supabase } from './client'

function App() {


  //getting the crew data from supabase
  const [crewMembers, setCrewMembers] = useState([]);

    useEffect(() => {
        //call the supabase database to get the crew members
        async function getCrewMembers() {
            const {data} = await supabase.from("Crew").select().order('created_at', {ascending: true});
            setCrewMembers(data);
        }
        getCrewMembers();
    }, []);

  //set up routing
  const element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/edit/:id",
      element: <EditCrew/>,
    },
    {
      path: "/new",
      element: <AddCrew />,
    },
    {
      path: "/view",
      element: <ViewCrew crew={crewMembers}/>,
    }
  ]);


  return <>
    <div className="header">
      <h1>👍 Crewmates 1.0</h1>
      <Link to="/"><button className="headerBtn"> Home  </button></Link>
      <Link to="/new"><button className="headerBtn"> Add Crewmate 🏆 </button></Link>
      <Link to="/view"><button className="headerBtn">Explore Crewmates 🔍</button></Link>
    </div>
    {element}
  
  </>;
}

export default App;

import { useState } from "react";
import { useRoutes } from 'react-router-dom'
import "./App.css";
import { Link } from 'react-router-dom'
import Home from './pages/Home'
import EditCrew from './pages/EditCrew'
import AddCrew from './pages/AddCrew'

function App() {

  //set up routing
  const element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/edit/:id",
      element: <EditCrew />,
    },
    {
      path: "/new",
      element: <AddCrew />,
    }
  ]);

  return <>
    <div className="header">
      <h1>👍 Crewmates 1.0</h1>
      <Link to="/"><button className="headerBtn"> Explore Crewmates 🔍  </button></Link>
      <Link to="/new"><button className="headerBtn"> Add Crewmate 🏆 </button></Link>
    </div>
    {element}
  
  </>;
}

export default App;

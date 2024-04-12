import { Link } from 'react-router-dom';


const Home = () => {
    return (
       <div className="home-container">
           <div className="logo">
               <img src="\src\assets\logo.png" alt="Fantasy Sports" />
           </div>
           <h1>Welcome to Fantasy Sports Manager!</h1>
           <p>Build your ultimate sports team and compete against others to see who comes out on top!</p>
           <div className="home-actions">
               <Link to="/new"><button className="home-btn">Create Your Team</button></Link>
               <Link to="/view"><button className="home-btn">View Teams</button></Link>
           </div>
       </div>
    );
};

export default Home;

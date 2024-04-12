import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Using react-router's useNavigate for redirection
import { supabase } from '../client';

const AddTeam = () => {
    const [teamName, setTeamName] = useState('');
    const [homeCity, setHomeCity] = useState('');
    const [teamColor, setTeamColor] = useState('');

    const navigate = useNavigate(); // For navigation after form submission

    const handleTeamNameChange = (e) => {
        setTeamName(e.target.value);
    };

    const handleHomeCityChange = (e) => {
        setHomeCity(e.target.value);
    };

    const handleTeamColorChange = (e) => {
        setTeamColor(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        supabase.from('Teams').insert([
            { TeamName: teamName, HomeCity: homeCity, TeamColor: teamColor }
        ]).then(({ data, error }) => {
            if (error) {
                console.error('Error adding team:', error);
            } else {
                console.log('Team added successfully:', data);
                navigate('/view'); // Use navigate for redirection
            }
            // Reset form fields
            setTeamName('');
            setHomeCity('');
            setTeamColor('');
        });
    };

    return (
        <div>
            <h1>Add New Team</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Team Name:
                    <input type="text" value={teamName} onChange={handleTeamNameChange} />
                </label>
                <br />
                <label>
                    Home City:
                    <input type="text" value={homeCity} onChange={handleHomeCityChange} />
                </label>
                <br />
                <label>
                    Team Color:
                    <input type="text" value={teamColor} onChange={handleTeamColorChange} />
                </label>
                <button type="submit">Add Team</button>
            </form>
        </div>
    );
};

export default AddTeam;

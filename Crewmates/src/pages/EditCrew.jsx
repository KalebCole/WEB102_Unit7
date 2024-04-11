import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {supabase} from '../client';

const EditCrew = () => {
    // State variables
    const {id} = useParams();
    const [crewMember, setcrewMember] = useState({
        Name: '',
        Speed: 0,
        Color: '',
    });

   const updateCrewMember = async (e) => {
        e.preventDefault();
        await supabase.from('Crew').update({Name: crewMember.Name, Speed: crewMember.Speed, Color: crewMember.Color}).eq('id', id).select();
        console.log("Crew member updated");
   }

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setcrewMember({
            Name: '',
            Speed: 0,
            Color: '',
        });
    };

    return (
        <div>
            <h1>Edit Crew</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Crew Name:
                    <input
                        type="text"
                        value={crewMember.Name}
                        onChange={(e) => setcrewMember(e.target.value)}
                    />
                </label>
                <label>
                    Crew Speed:
                    <input
                        type="text"
                        value={crewMember.Name}
                        onChange={(e) => setcrewMember(e.target.value)}
                    />
                </label>
                <label>
                    Crew Color:
                    <input
                        type="text"
                        value={crewMember.Name}
                        onChange={(e) => setcrewMember(e.target.value)}
                    />
                </label>
               
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default EditCrew;
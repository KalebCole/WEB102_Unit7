import { useState } from 'react';
import { supabase } from '../client';

const AddCrew = () => {
    const [name, setName] = useState('');
    const [speed, setSpeed] = useState('');
    const [color, setColor] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleSpeedChange = (e) => {
        setSpeed(e.target.value);
    };
     
    const handleColorChange = (e) => {
        setColor(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        supabase.from('Crew').insert([
            { Name: name, Speed: speed, Color: color }
        ]).then(() => {
            setName('');
            setSpeed('');
            setColor('');
            // redirect to the view page
            window.location.href = '/view';
        })
    };

    return (
        <div>
            <h1>Add Crew</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={handleNameChange} />
                </label>
                <br />
                <label>
                    Speed:
                    <input type="number" value={speed} onChange={handleSpeedChange} />
                </label>
                <br />
                <label>
                    Color:
                    <input type="text" value={color} onChange={handleColorChange} />
                </label>
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default AddCrew;
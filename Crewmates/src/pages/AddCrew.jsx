import { useState } from 'react';

const AddCrew = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [color, setColor] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleAgeChange = (e) => {
        setAge(e.target.value);
    };
     
    const handleColorChange = (e) => {
        setColor(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your logic to handle form submission here
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
                    Age:
                    <input type="number" value={age} onChange={handleAgeChange} />
                </label>
                <br />
                <label>
                    Color:
                    <input type="number" value={color} onChange={handleColorChange} />
                </label>
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default AddCrew;
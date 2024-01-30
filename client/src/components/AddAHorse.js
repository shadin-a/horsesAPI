import React, { useState } from 'react';




function AddHorseForm() {
    const [inputValue, setInputValue] = useState('');
    console.log('um...hi?');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <form>
            <label>Input Value:
                <input type="text" value={inputValue} onChange={handleChange} />
            </label>
            <p>Input Value: {inputValue}</p>
        </form>
    )
};

export default AddHorseForm;
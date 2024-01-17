import React, { useState, useEffect } from 'react';

function ViewAllHorses() {


    const [horses, setHorses] = useState([]);

    useEffect(() => {
        fetchHorses();
    }, []);

    useEffect(() => {
        console.log(horses)
    }, [horses]);


    const fetchHorses = async () => {
        try {
            const response = await fetch('/horses');
            const data = await response.json();
            setHorses(data.horsesData);
        } catch (error) {
            console.error('Error fetching horses:', error);
        }
    };
    return (

        <div>
            {horses && horses.map((horse) => {
                return (
                    <div key={horse._id}>
                        <h3>{horse.name}</h3>
                        <p>Age: {horse.age}</p>
                        {horse.imageUrl && (
                            <img src={horse.imageURL} alt={horse.name} />
                        )}</div>
                )
            })}
        </div>
    );
}

export default ViewAllHorses;
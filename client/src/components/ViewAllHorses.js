import React, { useState, useEffect } from 'react';

import "./viewAllHorses.css"

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

        <div className='horse-tiles'>
            {horses && horses.map((horse) => {
                return (
                    <div key={horse._id} className='tile'>
                       <div className='horse-image-container'> {horse.imageURL && (
                            <img className="horse-image" src={horse.imageURL} alt={horse.name} />
                        )}
                        </div>
                        <div className='horse-info'>
                        <h3>{horse.name}</h3>
                        <p>Learn More</p>
                        </div>
                        </div>
                )
            })}
        </div>
    );
}

export default ViewAllHorses;
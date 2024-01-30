import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function HorsesByLocation() {
    let { id } = useParams();
    const [horses, setHorses] = useState([]);
    const [location, setLocation] = useState({})

    useEffect(() => {
        fetchHorsesOfLocation();
        fetchLocationData();
    }, []);

    useEffect(() => {
        console.log(horses)
    }, [horses]);

    useEffect(() => {
        console.log("location",location)
    }, [location]);

    const fetchHorsesOfLocation = async () => {
        try {
            const response = await fetch(`/horses/location/${id}`);
            const data = await response.json();
            setHorses(data);
        } catch (error) {
            console.error('Error fetching horses:', error);
        }
    };

    const fetchLocationData = async() => {
        
        try {
            const response = await fetch(`/locations/${id}`);
            const data = await response.json();
            setLocation(data);
        } catch(error) {
            console.error('Error fetching location:', error);
        }
    }


    return (
        <div>
            <h2>Horses stabled at {location.locationName}:</h2>
           
            {horses.length > 0 && horses.map((horse) => {
                return (
                    <div key={horse._id}>{horse.name}</div>
                )
            })}
        </div>
    )
}

export default HorsesByLocation;
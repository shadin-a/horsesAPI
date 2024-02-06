import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
        <div className='page-title'>
            <h2>Horses stabled at {location.locationName}:</h2>
            <div className='horse-tiles'>
            {horses.length > 0 && horses.map((horse) => {
                   return (
                    <div key={horse._id} className='tile'>
                                <div className='horse-image-container'> {horse.imageURL && (
                                    <img className="horse-image" src={horse.imageURL} alt={horse.name} />
                                )}
                                </div>
                                <div className='horse-info'>
                                    <h3>{horse.name}</h3>
                                    <Link to={`/horses/${horse._id}`}>
                                        <button type="button">Learn More</button>
                                    </Link>

                                </div>
                            </div>
                )
            })}
            
        </div>
        </div>
    )
}

export default HorsesByLocation;
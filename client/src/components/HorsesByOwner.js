import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function HorsesByOwner() {
    let { id } = useParams();
    const [horses, setHorses] = useState([]);
    const [owner, setOwner] = useState({})

    useEffect(() => {
        fetchHorsesOfOwner();
        fetchOwnerData();
    }, []);

    useEffect(() => {
        console.log(horses)
    }, [horses]);

    useEffect(() => {
        console.log(owner)
    }, [owner]);

    const fetchHorsesOfOwner = async () => {
        try {
            const response = await fetch(`/horses/owner/${id}`);
            const data = await response.json();
            setHorses(data);
        } catch (error) {
            console.error('Error fetching horses:', error);
        }
    };

    const fetchOwnerData = async() => {
        
        try {
            const response = await fetch(`/owners/${id}`);
            const data = await response.json();
            setOwner(data);
        } catch(error) {
            console.error('Error fetching owner:', error);
        }
    }


    return (
        <div className='page-title'>
            <h2>Horses belonging to {owner.name}</h2>
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

export default HorsesByOwner
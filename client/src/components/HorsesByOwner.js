import React, { useState, useEffect } from 'react';
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
        <div>
            <h2>Horses belonging to {owner.name}</h2>
            {horses.length > 0 && horses.map((horse) => {
                return (
                    <div key={horse._id}>{horse.name}</div>
                )
            })}
        </div>
    )
}

export default HorsesByOwner
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ViewOneHorse() {

    const [horse, setHorses] = useState([]);
    const [owner, setOwner] = useState({})
    const { id } = useParams();

    useEffect(() => {
        fetchOneHorse();
    }, []);

    useEffect(() => {
        console.log(horse)
    }, [horse]);

    const fetchOneHorse = async () => {
        try {
            const response = await fetch(`/horses/${id}`);
            const data = await response.json();
            setHorses(data);

            if (data && data.owner) {
                // Fetch owner details based on owner ID
                const ownerResponse = await fetch(`/owners/${data.owner}`);
                const ownerData = await ownerResponse.json();
                setOwner(ownerData);
              }
        } catch (error) {
            console.error('Error fetching horse:', error);
        }
    };




    return (

            <div>
              <h3>{horse.name}</h3>
           <p>Owner: {owner.name}</p>
              <p>Age: {horse.age}</p>
              {horse.imageURL && (
                <img src={horse.imageURL} alt={horse.name} />
              )}
            </div>
          );

}

export default ViewOneHorse;
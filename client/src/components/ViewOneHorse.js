import React, { useState, useEffect, } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ViewOneHorse.css'


function ViewOneHorse() {

  const [horse, setHorses] = useState([]);
  const [owner, setOwner] = useState({});
  const [location, setLocation] = useState({})
  const { id } = useParams();
  const navigate = useNavigate();

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

      if (data && data.location) {
        // Fetch owner details based on location ID
        const locationResponse = await fetch(`/locations/${data.location}`);
        const locationData = await locationResponse.json();
        setLocation(locationData);
      }

    } catch (error) {
      console.error('Error fetching horse:', error);
    }
  };

  function handleDeleteHorse(){
    fetch(`/horses/${horse._id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        if (response.ok) {
          alert('Horse successfully deleted!')
          navigate('/horses')
        }
        else console.log('Delete horse failed!')
         })
    
      .catch(error => {
        // Handle errors
        console.error('Error:', error);
      });
  }

  return (

    <div className='loaded-data'>
      <div className='one-horse-image-container'>{horse.imageURL && (
        <img className='horse-images' src={horse.imageURL} alt={horse.name} />
      )}</div>
      <div className='one-horse-info'>
        <div className='not-button'>
        <h3>{horse.name}</h3>
        <p>Owner: {owner.name}</p>
        <p>Age: {horse.age}</p>
        <p>Location: {location.locationName}</p>
        <p>Breed: {horse.breed}</p>
        <p>Height: {horse.height}</p>
        <p>Born: {horse.year_of_birth}</p>
        </div>
        <button onClick={handleDeleteHorse}>🗑</button>
      </div>

    </div>
  );

}

export default ViewOneHorse;
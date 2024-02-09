import React, { useState, useEffect } from 'react';
import "./addAHorse.css";


function AddHorseForm() {
    const [formState, setFormState] = useState({
        name: '',
        owner: '',
        age: '',
        location: '',
        program:'',
        breed:'',
        height: '',
        year_of_birth: '',
        imageURL: ''});


    const handleChange = (event) => {
       console.log("fix me!")
    };

    const [owners, setOwners] = useState([]);

    useEffect(() => {
      fetchOwners();
    }, []);
  
    useEffect(() => {
    }, [owners]);
  
    const [location, setLocations] = useState([]);

    useEffect(() => {
      fetchLocations();
    }, []);
  
    useEffect(() => {
    }, [location]);
  
  
    const fetchLocations = async () => {
      try {
        const response = await fetch('/locations');
        const data = await response.json();
        setLocations(data.locationData);
      } catch (error) {
        console.error('Error fetching locations:', error);
      }
    };

    const fetchOwners = async () => {
      try {
        const response = await fetch('/owners');
        const data = await response.json();
        setOwners(data.ownerData);
      } catch (error) {
        console.error('Error fetching owners:', error);
      }
    };

    const handleFormSubmit = (event) => {
      event.preventDefault();
      const formDataJSON = JSON.stringify(formState);
  
      fetch('horses/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: formDataJSON,
      })
        .then(response => response.json())
        .then(data => {
          // Handle the response from the server
          console.log('Server response:', data);
        })
        .catch(error => {
          // Handle errors
          console.error('Error:', error);
        });
    };

    return (
        <div className='add-form-bg'>
             <form onSubmit={handleFormSubmit}>
                <label>Name
                <br/>
                    <input type="text" value={formState.name} onChange={(event)=>{setFormState({...formState, name: event.target.value})}} />
                </label>
                <br/>
                <label>Owner
                <br/>
                <select value={formState.owner} onChange={(event)=>{
                  const selectedOwner = owners.find(owner => owner.name === event.target.value);
                  setFormState({...formState, owner: selectedOwner ? selectedOwner._id : event.target.value})}} >
                <option value="owner-name">Select Owner</option>
                {owners && owners.map((owner) => {
          return (
            <option key={owner.id} value={owner.name}>
            {owner.name}
          </option>
            )
        })}
          </select>
                </label>
                <br/>
                <label>Age
                <br/>
                    <input type="text" value={formState.age} onChange={(event)=>{setFormState({...formState, age: event.target.value})}} />
                </label>
                <br/>
                <label>Location
                <br/>
                <select value={formState.location} onChange={(event)=>{
                  const selectedLocation = location.find(loc => loc.locationName === event.target.value);
                  setFormState({...formState, location: selectedLocation ? selectedLocation._id : event.target.value})}} >
                <option value="location-name">Select Location</option>
                {location && location.map((location) => {
          return (
            <option key={location.id} value={location.id}>
            {location.locationName}
          </option>
            )
        })}
          </select>
                </label>
                <br/>
                <label>Breed
                    <br/>
                    <input type="text" value={formState.breed} onChange={(event)=>{setFormState({...formState, breed: event.target.value})}} />
                </label>
                <br/>
                <label>Height
                <br/>
                    <input type="text" value={formState.height} onChange={(event)=>{setFormState({...formState, height: event.target.value})}} />
                </label>
                <br/>
                <label>Year Of Birth
                <br/>
                    <input type="text" value={formState.year_of_birth} onChange={(event)=>{setFormState({...formState, year_of_birth: event.target.value})}} />
                </label>
                <br/>
                <label>Program
                <br/>
                <select value={formState.program} onChange={(event)=>{setFormState({...formState, program: event.target.value})}} >
                <option value="program">Select Program</option>
               <option value="Lease">Lease</option>
               <option value="Lesson">Lease</option>
               <option value="BoardAndTrain">Board & Train</option>
               <option value="Prospect">Prospect</option>
          </select>
                </label>
                <br/>
                <label>Image URL
                <br/>
                    <input type="text" value={formState.imageURL} onChange={(event)=>{setFormState({...formState, imageURL: event.target.value})}} />
                </label>
                <br/>
                <button> Add Horse</button>
            </form>
            
        </div>
    )
};

export default AddHorseForm;
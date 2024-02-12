import React, { useState, useEffect } from 'react';
import "./addAHorse.css";


function AddHorseForm() {
  const [formState, setFormState] = useState({
    name: '',
    owner: '',
    age: '',
    location: '',
    program: '',
    breed: '',
    height: '',
    year_of_birth: '',
    imageURL: ''
  });


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
    .then(response => {
      // Handle the response here if needed
      console.log(response);

      // Show alert regardless of response status
      alert('Horse successfully created!');
      setFormState({
        name: '',
        owner: '',
        age: '',
        location: '',
        program: '',
        breed: '',
        height: '',
        year_of_birth: '',
        imageURL: ''
      });
    })
    .catch(error => {
      // Handle errors
      console.error('Error:', error);
    });
  };

  return (

    <div>
      <div className='page-title'><h2>Add a Horse to the Database</h2></div>
      <div className='add-form-bg'>

        <form onSubmit={handleFormSubmit}>
          <label>Name
            <br />
            <input type="text" value={formState.name} onChange={(event) => { setFormState({ ...formState, name: event.target.value }) }} />
          </label>
          <br />
          <label>Owner
            <br />
            <select value={formState.owner} onChange={(event) => {
              const selectedOwner = owners.find((owner) => owner._id === event.target.value);
              setFormState({
                ...formState,
                owner: event.target.value,
                ownerName: selectedOwner ? selectedOwner.name : '', 
              });
            }}
          >
            {formState.ownerName ? (
              <option value={formState.owner}>{formState.ownerName}</option>
            ) : (
              <option value=''>Select Owner</option>
            )}
            {owners &&
              owners.map((owner) => (
                <option key={owner._id} value={owner._id}>
                  {owner.name}
                </option>
              ))}
            </select>
          </label>
          <br />
          <label>Age
            <br />
            <input type="text" value={formState.age} onChange={(event) => { setFormState({ ...formState, age: event.target.value }) }} />
          </label>
          <br />
          <label>Location
            <br />
            <select value={formState.location} onChange={(event) => {
               const selectedLocation = location.find((loc) => loc._id === event.target.value);
               setFormState({
                 ...formState,
                 location: event.target.value,
                 locationName: selectedLocation ? selectedLocation.locationName : '', // Store location name
               });
             }}
           >
             {formState.locationName ? (
               <option value={formState.location}>{formState.locationName}</option>
             ) : (
               <option value=''>Select Location</option>
             )}
             {location &&
               location.map((loc) => (
                 <option key={loc._id} value={loc._id}>
                   {loc.locationName}
                 </option>
               ))}
             
            </select>
          </label>
          <br />
          <label>Breed
            <br />
            <input type="text" value={formState.breed} onChange={(event) => { setFormState({ ...formState, breed: event.target.value }) }} />
          </label>
          <br />
          <label>Height
            <br />
            <input type="text" value={formState.height} onChange={(event) => { setFormState({ ...formState, height: event.target.value }) }} />
          </label>
          <br />
          <label>Year Of Birth
            <br />
            <input type="text" value={formState.year_of_birth} onChange={(event) => { setFormState({ ...formState, year_of_birth: event.target.value }) }} />
          </label>
          <br />
          <label>Program
            <br />
            <select value={formState.program} onChange={(event) => { setFormState({ ...formState, program: event.target.value }) }} >
              <option value="program">Select Program</option>
              <option value="Lease">Lease</option>
              <option value="Lesson">Lesson</option>
              <option value="boardAndTrain">Board & Train</option>
              <option value="Prospect">Prospect</option>
            </select>
          </label>
          <br />
          <label>Image URL
            <br />
            <input type="text" value={formState.imageURL} onChange={(event) => { setFormState({ ...formState, imageURL: event.target.value }) }} />
          </label>
          <br />
          <div className='button-style'>
            <button> Add Horse</button>
          </div>
        </form>

      </div>
    </div>
  )
};

export default AddHorseForm;
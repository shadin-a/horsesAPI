import React, { useState, useEffect } from 'react';
import "./addAHorse.css";


function AddHorseForm() {
    const [formState, setFormState] = useState({
        nameInput: '',
        ownerInput: '',
        ageInput: '',
        locationInput: '',
        breedInput:'',
        heightInput: '',
        yearOfBirthInput: '',
        imageURLInput: ''});
    console.log('um...hi?');


    const handleChange = (event) => {
       console.log("fix me!")
    };

    const [owners, setOwners] = useState([]);

    useEffect(() => {
      fetchOwners();
    }, []);
  
    useEffect(() => {
      console.log(owners)
    }, [owners]);
  
    const [location, setLocations] = useState([]);

    useEffect(() => {
      fetchLocations();
    }, []);
  
    useEffect(() => {
      console.log(location)
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

    return (
        <div className='add-form-bg'>
            <form onSubmit={(event)=> {event.preventDefault();
                console.log(formState)}}>
                <label>Name
                <br/>
                    <input type="text" value={formState.nameInput} onChange={(event)=>{setFormState({...formState, nameInput: event.target.value})}} />
                </label>
                <br/>
                <label>Owner
                <br/>
                <select value={formState.ownerInput} onChange={(event)=>{setFormState({...formState, ownerInput: event.target.value})}} >
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
                    <input type="text" value={formState.ageInput} onChange={(event)=>{setFormState({...formState, ageInput: event.target.value})}} />
                </label>
                <br/>
                <label>Location
                <br/>
                <select value={formState.locationInput} onChange={(event)=>{setFormState({...formState, locationInput: event.target.value})}} >
                <option value="location-name">Select Location</option>
                {location && location.map((location) => {
          return (
            <option key={location.id} value={location.locationName}>
            {location.locationName}
          </option>
            )
        })}
          </select>
                </label>
                <br/>
                <label>Breed
                    <br/>
                    <input type="text" value={formState.breedInput} onChange={(event)=>{setFormState({...formState, breedInput: event.target.value})}} />
                </label>
                <br/>
                <label>Height
                <br/>
                    <input type="text" value={formState.heightInput} onChange={(event)=>{setFormState({...formState, heightInput: event.target.value})}} />
                </label>
                <br/>
                <label>Year Of Birth
                <br/>
                    <input type="text" value={formState.yearOfBirthInput} onChange={(event)=>{setFormState({...formState, yearOfBirthInput: event.target.value})}} />
                </label>
                <br/>
                <label>Image URL
                <br/>
                    <input type="text" value={formState.imageURLInput} onChange={(event)=>{setFormState({...formState, imageURLInput: event.target.value})}} />
                </label>
                <br/>
                <button> Add Horse</button>
            </form>
            
        </div>
    )
};

export default AddHorseForm;
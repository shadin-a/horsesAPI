import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./viewAllLocations.css";


function ViewAllLocations() {


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
  return (
    <div className='page-title'> <h2>Select a location to view residing horses</h2>
    <div className='location-container'>
     
      <div className='location-buttons'> 

        {location && location.map((location) => {
          return (
            <Link key={location._id} to={`/location/${location._id}`} >
              <button>{location.locationName}</button>
              </Link>
          )
        })}
      
      </div>
    </div>
    </div>
  );
}

export default ViewAllLocations;
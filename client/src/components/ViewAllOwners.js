import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './viewAllOwners.css';

function ViewAllOwners() {


  const [owners, setOwners] = useState([]);

  useEffect(() => {
    fetchOwners();
  }, []);

  useEffect(() => {
    console.log(owners)
  }, [owners]);


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

    <div>
      <h2>Select an owner to view their horses:</h2>
      <div className='owner-buttons'> 

        {owners && owners.map((owner) => {
          return (
            <Link key={owner._id} to={`/owner/${owner._id}`} >
              <button>{owner.name}</button>
              </Link>
          )
        })}
      
      </div>
    </div>
  );
}

export default ViewAllOwners;
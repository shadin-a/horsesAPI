import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

 
import "./viewAllHorses.css"

function ViewAllHorses() {


    const [horses, setHorses] = useState([]);

    useEffect(() => {
        fetchHorses();
    }, []);

    useEffect(() => {
        console.log(horses)
    }, [horses]);


    const fetchHorses = async () => {
        try {
            const response = await fetch('/horses');
            const data = await response.json();
            setHorses(data.horsesData);
        } catch (error) {
            console.error('Error fetching horses:', error);
        }
    };
    return (
        <div>
       <div className='page-title'>
       <p>HORSES</p> 
       </div>
<div className='display-page'>
<div className='side-bar'>
            <h3>PROGRAM</h3>
      <button type="button">Lease</button>
      <button type="button">Lesson</button>
      <button type="button">Prospect</button>
      <button type="button">Board & Train</button>
      <h3>AGE</h3>
      <button type="button">1-10</button>
      <button type="button">11-20</button>
      <button type="button">21-30</button>
      
    
   
        </div>
        <div className='horse-tiles'>
            
            {horses && horses.map((horse) => {
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
        </div>
    
    );
}

export default ViewAllHorses;
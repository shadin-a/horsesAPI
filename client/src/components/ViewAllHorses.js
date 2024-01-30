import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HorsesSidebarFilter from './HorsesSidebarFilter';


import "./viewAllHorses.css"

function ViewAllHorses() {


    const [filterSettings, setFilterSettings] = useState({
        program: {
            lease: false,
            lesson: false,
            prospect: false,
            boardAndTrain: false
        }
    })
    const [horses, setHorses] = useState([]);

    useEffect(() => {
        fetchHorses();
    }, [filterSettings]);

    useEffect(() => {
        console.log(horses)
    }, [horses]);


    const fetchHorses = async () => {
        let queryString = '';
        let programsSelected = []

        for (const key in filterSettings.program) {
            if (filterSettings.program[key]) {
                programsSelected.push(key)
            }
        }

        if (programsSelected.length > 0) {
            queryString += "?program="
            queryString+= programsSelected.join("+")
        }

    

        try {
            const response = await fetch(`/horses${queryString}`);
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
                <HorsesSidebarFilter filterSettings={filterSettings} setFilterSettings={setFilterSettings} />
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
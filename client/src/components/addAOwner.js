import React, { useState, useEffect } from 'react';



function AddOwnerForm() {
    const [formState, setFormState] = useState({
        name: '',
        address: '',
        });


    const handleFormSubmit = (event) => {
      event.preventDefault();
      const formDataJSON = JSON.stringify(formState);
  
      fetch('owners/add', {
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
  
     <div>
    <div className='page-title'><h2>Add an Owner to the Database</h2></div>
        <div className='add-form-bg'>
          
             <form onSubmit={handleFormSubmit}>
                <label>Name
                <br/>
                    <input type="text" value={formState.name} onChange={(event)=>{setFormState({...formState, name: event.target.value})}} />
                </label>
                <br/>
                <div className='button-style'>
                <button> Add Owner</button>
                </div>
            </form>
        </div>
        </div>
    )
};

export default AddOwnerForm;
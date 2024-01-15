const router = require("express").Router();
const apiRoutes = require("./api/index.js");

router.use("/api", apiRoutes);

// async function getHorses() {
//     try {
//         const response = await fetch('/horses');
//         const data = await response.json();
//         const horseList = document.getElementById('horseList');
//         horseList.innerHTML = '';

//         data.forEach(horse => {
//             const listItem = document.createElement('li');
//             listItem.textContent = `${horse.name} (Height:  ${horse.height},
//             Breed: ${horse.breed}, Age: ${horse.age}, Location: ${horse.location}, Owner: ${horse.ownerId}, Program: ${horse.program}, Year of Birth: ${horse.year_of_birth})`;
//             horseList.appendChild(listItem);
//         });
//     } catch (error) {
//         console.error('Error fetching horses:', error);
//     }
// }

// // Initial call to getHorses to display the list when the page loads
// getHorses();

// async function addHorse() {
//     const name = document.getElementById('name').value;
//     const age = document.getElementById('age').value;
//     const owner = document.getElementById('owner').value;
//     const height = document.getElementById('height').value;
//     const location = document.getElementById('location').value;
//     const program = document.getElementById('program').value;
//     const yearOfBirth = document.getElementById('yearOfBirth').value;
//     const breed = document.getElementById('breed').value;

//     try {
//         const response = await fetch('/api/horses/add', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ name, height, breed, age, location, ownerId, program, yearOfBirth })
//         });

//         if (response.ok) {
//             alert('Horse added successfully!');
//             getHorses(); // Fetch and display the updated list of horses
//         } else {
//             const data = await response.json();
//             alert(`Error: ${data.error}`);
//         }
//     } catch (error) {
//         console.error('Error adding horse:', error);
//     }
// }

module.exports = router
// app.js
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push } from 'firebase/database';


const firebaseConfig = {
    apiKey: "AIzaSyB821BKA-ewVHTtfNU4ru1395OXh8tRCz8",
    authDomain: "medq-31478.firebaseapp.com",
    databaseURL: "https://medq-31478-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "medq-31478",
    storageBucket: "medq-31478.appspot.com",
    messagingSenderId: "728089087143",
    appId: "1:728089087143:web:1b392cc793d2276e6cdf82",
    measurementId: "G-CYDBRTC0QM"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);


// function submitForm() {
//     console.log('Submit button clicked.');
//     const name = document.getElementById('name').value;
//     const age = document.getElementById('age').value;
//     const sex = document.getElementById('sex').value;
//     const aadhar = document.getElementById('aadhar').value;
//     const address = document.getElementById('address').value;
//     const department = document.getElementById('department').value;
//     console.log('Form values:', name, age, sex, aadhar, address, department);

//     // Push data to Firebase
//     database.ref('appointments').push({
//         name: name,
//         age: age,
//         sex: sex,
//         aadhar: aadhar,
//         address: address,
//         department: department
//     }).then(() => {
//         alert('Appointment booked successfully!');
//         // You can redirect to another page if needed
//         // window.location.href = 'success.html';
//     }).catch(error => {
//         console.error('Error booking appointment:', error);
//         alert('Error booking appointment. Please try again.');
//     });
// }

function submitForm() {
    try {
        console.log('Submit button clicked.');
        const name = document.getElementById('name').value;
        const age = document.getElementById('age').value;
        const sex = document.getElementById('sex').value;
        const aadhar = document.getElementById('aadhar').value;
        const address = document.getElementById('address').value;
        const department = document.getElementById('department').value;
        console.log('Form values:', name, age, sex, aadhar, address, department);
    
        // Push data to Firebase
        database.ref('appointments').push({
            name: name,
            age: age,
            sex: sex,
            aadhar: aadhar,
            address: address,
            department: department
        }).then(() => {
            alert('Appointment booked successfully!');
            // You can redirect to another page if needed
            // window.location.href = 'success.html';
        }).catch(error => {
            console.error('Error booking appointment:', error);
            alert('Error booking appointment. Please try again.');
        });
  
    } catch (error) {
      console.error('Error in submitForm:', error);
      alert('An unexpected error occurred. Please check the console for details.');
    }
  }
  
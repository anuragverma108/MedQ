// Replace this with your own Firebase configuration
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
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference to the database
const database = firebase.database();

// Reference to the dataList element
const dataList = document.getElementById('dataList');

// Listen for changes in the Firebase database
database.ref('appointments').on('value', (snapshot) => {
    dataList.innerHTML = ''; // Clear the list before updating

    // Loop through each appointment and display it in the list
    snapshot.forEach((childSnapshot) => {
        const appointment = childSnapshot.val();
        const listItem = document.createElement('li');
        listItem.textContent = `
          Name: ${appointment.name},
          Age: ${appointment.age},
          Sex: ${appointment.sex},
          Aadhar: ${appointment.aadhar},
          Address: ${appointment.address},
          Department: ${appointment.department}
        `;
        dataList.appendChild(listItem);
    });
});

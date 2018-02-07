import * as firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`)
// })

// database.ref().set({
//   name: 'Jarrod Van Doren',
//   age: 35,
//   stressLevel: 10,
//   job: {
//     title: 'Unemployed',
//     company: ''
//   },
//   location: {
//     city: 'Salt lake',
//     state: 'Utah'
//   }
// }).then(() => {
//   console.log('Data is saved!');
// }).catch( err => {
//   console.log('This failed.', err);
// });


// database.ref().update({
//   stressLevel: 5,
//   'job/company': "TeamSnap",
//   'job/title': 'Web Developer',
//   'location/city': 'Boulder',
//   'location/state': 'Colorado'
// });
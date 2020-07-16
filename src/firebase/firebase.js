import * as firebase from "firebase"

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_MESSAGING_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
  };

firebase.initializeApp(firebaseConfig)

const database = firebase.database()

export { firebase, database as default }; 

// //child_removed
// database.ref("expenses").on("child_removed", (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// //child_changed
// database.ref("expenses").on("child_changed", (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// //child_added
// database.ref("expenses").on("child_added", (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref("expenses")
//     .once("value")
//     .then((snapshot) => {
//         const expenses = []

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 //id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         })
//     console.log(expenses)
//     console.log(database)
//     })

// database.ref("expenses").on("value", (snapshot) => {
//     const expenses = []

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             //id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
// })

// database.ref()
// .once("value")
// .then((snapshot) => {
//     const val = snapshot.val()
//     console.log(val)
// })
// .catch((e) => {
//     console.log("Fetching error data", e)
// })

// database.ref().set({
//       name: "Michele Picozzi",
//       age: 27,
//       stressLevel: 6,
//       location: "Tokyo",
//       job: {
//           title: "software developer",
//           company: "google"
//       }
//   }).then(() => {
//       console.log("data is saved")
//   }).catch((e) => {
//       console.log("this failed", e)
//   })

// database.ref().update({
//     stressLevel: 9,
//     "job/company": "Amazon",
//     location: "seattle"
// })

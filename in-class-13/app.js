// replace this entire code block with the config found in the firebase dashboard
// for your created database
// Initialize Firebase

var config = {

    apiKey: "AIzaSyD0lV7L3VS3SLswYD5EdcUXPD1B1ggfR7U",
    authDomain: "sampleproject-1e0cb.firebaseapp.com",
    databaseURL: "https://sampleproject-1e0cb.firebaseio.com",
    projectId: "sampleproject-1e0cb",
    storageBucket: "sampleproject-1e0cb.appspot.com",
    messagingSenderId: "1048586306211"

};  // end config


firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();

database.ref("/hello-world").set({ hello: "world" })

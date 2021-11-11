const firebase = require('firebase')
// Required for side-effects
require('firebase/firestore')

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: 'AIzaSyAV8eQBj4LPtk0BmZIBttBktEiSn6xDpR0',
  authDomain: 'academia-61d51.firebaseapp.com',
  projectId: 'academia-61d51',
  storageBucket: 'academia-61d51.appspot.com',
  messagingSenderId: '710947900430',
  appId: '1:710947900430:web:8ce85fe20098a9f78dc05f'
})

var db = firebase.firestore()

db.collection('games').delete()

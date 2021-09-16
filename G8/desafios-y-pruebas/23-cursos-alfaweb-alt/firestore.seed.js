const firebase = require('firebase')
// Required for side-effects
require('firebase/firestore')

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: 'AIzaSyAHa1DX02ZhgJi3PhCv3oJni_4uFKH1s9E',
  authDomain: 'cursosalfaweb-39172.firebaseapp.com',
  projectId: 'cursosalfaweb-39172',
  storageBucket: 'cursosalfaweb-39172.appspot.com',
  messagingSenderId: '701437831188',
  appId: '1:701437831188:web:2d162362be9003a971df01'
})

var db = firebase.firestore()

var grades = [
  {
    code: 'C00101',
    name: 'HTML Básico',
    status: true,
    price: 10000,
    span: '1 mes',
    description: 'Curso básico de HTML para principiantes.',
    quotas: 35,
    enrolled: 0,
    picture: 'https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png',
    date: '06-03-2021'
  },
  {
    code: 'C00102',
    name: 'CSS para principiantes',
    status: false,
    price: 10000,
    span: '1 mes',
    description: 'Aprendiendo estilos con CSS desde el nivel más básico.',
    quotas: 35,
    enrolled: 23,
    picture: 'https://lineadecodigo.com/wp-content/uploads/2014/04/css.png',
    date: '05-03-2021'
  },
  {
    code: 'C00201',
    name: 'JavaScript básico de 0 a 100',
    status: true,
    price: 20000,
    span: '2 mes',
    description: 'Programando para la web con JavaScript.',
    quotas: 25,
    enrolled: 0,
    picture: 'https://eduliticas.com/wp-content/uploads/2018/01/Javascript-shield.png',
    date: '06-03-2021'
  },
  {
    code: 'C00202',
    name: 'JavaScript Avanzado',
    status: false,
    price: 30000,
    span: '2 mes',
    description: 'Curso con las nuevas actualizaciones de JavaScript.',
    quotas: 20,
    enrolled: 10,
    picture: 'https://i.blogs.es/545cf8/es6-logo/450_1000.png',
    date: '06-03-2021'
  },
  {
    code: 'C00301',
    name: 'VueJS de 0 a 100',
    status: false,
    price: 85500,
    span: '5 mes',
    description: 'Framework Vue.js desde principiante a avanzado.',
    quotas: 35,
    enrolled: 35,
    picture: 'https://thumbs.gfycat.com/PinkPiercingBull-size_restricted.gif',
    date: '05-03-2021'
  },
  {
    code: 'C00302',
    name: 'Estilos con SASS',
    status: false,
    price: 45000,
    span: '1 mes',
    description: 'Mejorando los estilos con mayor potencia mediante SASS',
    quotas: 40,
    enrolled: 35,
    picture: 'https://miro.medium.com/max/512/1*9U1toerFxB8aiFRreLxEUQ.png',
    date: '01-03-2021'
  }
]

grades.forEach(function (grade) {
  db.collection('grades')
    .add(grade)
    .then(function (docRef) {
      console.log('Document written with ID: ', docRef.id)
    })
    .catch(function (error) {
      console.error('Error adding document: ', error)
    })
})

process.exit()

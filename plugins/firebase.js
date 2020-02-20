import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyCN2vKQJutfN7I3b5szFcFcvOxpUaWnuao',
  authDomain: 'nuxt-blog0215.firebaseapp.com',
  databaseURL: 'https://nuxt-blog0215.firebaseio.com',
  projectId: 'nuxt-blog0215',
  storageBucket: 'nuxt-blog0215.appspot.com',
  messagingSenderId: '598003662972'
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export default firebase
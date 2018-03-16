import Rebase from 're-base'
import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyB0YjPbpFJAkYA0MqpXDXkEpBd6L6Tqt6M",
  authDomain: "reactjs-be274.firebaseapp.com",
  databaseURL: "https://reactjs-be274.firebaseio.com",
  projectId: "reactjs-be274",
  storageBucket: "reactjs-be274.appspot.com",
  messagingSenderId: "1028295383501"
}

const app = firebase.initializeApp(config)
const base = Rebase.createClass(app.database())

export const ref = firebase.database().ref()
export const auth = firebase.auth
export const provider = new firebase.auth.FacebookAuthProvider()

export default base
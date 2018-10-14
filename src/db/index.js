import firebase from 'firebase'
import 'firebase/firestore'

const config = {
    //use your own...
}

const firebaseapp  = firebase.initializeApp(config)

export default firebaseapp.firestore()
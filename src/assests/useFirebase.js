import { initializeApp } from "firebase/app";
import { getAuth  } from 'firebase/auth'
import { getFirestore  } from 'firebase/firestore'

const useFirebase = () => {
  const firebaseConfig = {
    apiKey: process.env.REACT_APP_FireBaseApi,
    authDomain: "cofee-shop-86518.firebaseapp.com",
    projectId: "cofee-shop-86518",
    storageBucket: "cofee-shop-86518.appspot.com",
    messagingSenderId: "430175212823",
    appId: "1:430175212823:web:2f2dd08054dd1c4bcfd352",
    measurementId: "G-CSB4PEW6QC"
  };
    
    
    // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      const auth = getAuth(app)
      const db = getFirestore(app)


    return { app,auth,db };
}
export default useFirebase
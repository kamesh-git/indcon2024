import { initializeApp } from "firebase/app";
import { getAuth  } from 'firebase/auth'
import { getFirestore  } from 'firebase/firestore'

const useFirebase = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyCc5z9p1l2u7CEIrtee9FVhAKW90oCAID8",
    authDomain: "indcon-website.firebaseapp.com",
    projectId: "indcon-website",
    storageBucket: "indcon-website.appspot.com",
    messagingSenderId: "1029931282838",
    appId: "1:1029931282838:web:8fee0499c89ce23bf96db7"
  };
    
    
    // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      const auth = getAuth(app)
      const db = getFirestore(app)


    return { app,auth,db };
}
export default useFirebase
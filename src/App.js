import './App.css';
import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
import PhoneAuth from './components/PhoneAuth';
import { useEffect, useState } from 'react';
import {onAuthStateChanged} from'firebase/auth';


function App() {
const firebaseConfig = {
  apiKey: "AIzaSyBnPaBA9KTt4SZN6ScDbKGUB4ym7z4Hcpk",
  authDomain: "phone-auth-93a31.firebaseapp.com",
  projectId: "phone-auth-93a31",
  storageBucket: "phone-auth-93a31.appspot.com",
  messagingSenderId: "613575217698",
  appId: "1:613575217698:web:8237a4c6963196c89fb07b",
  measurementId: "G-JVCKY8Q940"
};

firebase.initializeApp(firebaseConfig);
const [user, setUser] = useState(null);
useEffect(()=>{
  const unRegistered = onAuthStateChanged(firebase.auth(),(currentUser)=>{
    console.log(currentUser);
    setUser(currentUser);

})
return ()=>unRegistered();
})
  return (
    <div className="App">
      
      <h1>Phone Number Auth</h1>
      <PhoneAuth auth={firebase.auth()}></PhoneAuth>
    </div>
  );
}

export default App;
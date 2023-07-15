import { onAuthStateChanged } from 'firebase/auth';
import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../assests/useFirebase';
import Panel from './Panel.js';
import SignIn from './SignIn';

const Admin = () => {
    const {auth} = useFirebase();
  const [isSignedIn,setIsSignedIn] = useState(false)



    onAuthStateChanged(auth,(user) => {
      if(user){
        setIsSignedIn(true) 
      }
      else{
        setIsSignedIn(false)
      }
    })

  return (
    <>
    <div className="row m-5"><NavLink className={'col-1'} to='/'><Button variant='dark'>Back</Button></NavLink></div>
    {isSignedIn ? <Panel /> : <SignIn /> }
    </>
  )
}

export default Admin
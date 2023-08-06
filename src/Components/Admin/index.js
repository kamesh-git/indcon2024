import { onAuthStateChanged } from 'firebase/auth';
import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../assests/useFirebase';
import SignIn from './SignIn';
import MonthlyNews from './MonthlyNews';

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

    function AdminContent({role}){
      return (
        <>
          <MonthlyNews />
        </>
      )
    }

  return (
    <>
    <div className="row m-5"><NavLink className={'col-1'} to='/'><Button variant='dark'>Back</Button></NavLink></div>
    {isSignedIn ? <AdminContent role={'admin'} /> : <SignIn /> }
    </>
  )
}

export default Admin
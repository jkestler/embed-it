import React from 'react';
import firebase from 'firebase';
import { NavLink } from 'react-router-dom';

const logOutUser = () => {
  firebase.auth().signOut();
};

const LogOut = () => {
  return <NavLink to='/' className='nav-link btn btn-info btn-lg' onClick={logOutUser} children='Log Out' />;
};

export default LogOut;
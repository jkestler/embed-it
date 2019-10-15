import React from 'react';
import { Button } from 'rebass';
import firebase from 'firebase';

const logOutUser = () => {
  firebase.auth().signOut();
};

const LogOut = () => {
  return <button className='nav-link btn btn-info ml-2' onClick={logOutUser} children='Log Out' />;
};

export default LogOut;
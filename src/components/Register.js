import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Flex, Box, Input, Button, Subhead, Text } from 'rebass';
import firebase from 'firebase';

class Register extends Component { 
  state = {
    email: '',
    password: '',
    error: null
  };

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    const db = firebase.firestore();

    firebase
      .auth().createUserWithEmailAndPassword(email, password)
      .then((cred) => {
        let auth = firebase.auth().currentUser;
        // console.log('Auth Credentials', cred);
        // console.log('Authenticated User', auth);
        return db.collection('users').doc(cred.user.uid).set({
          email: cred.user.email
        });
      })
      .then(() => {
        this.props.history.push('/dashboard');
      })
      .catch((err) => {
        this.setState({ error: err })
      })
  }

  render() {
    const { email, password, error } = this.state;

    return (
      <div className='container'>

  
        <div id='signupForm' className='row justify-content-center align-items-center h-100'>
          <div className='col col-sm-6 col-md-6 col-lg-4 col-xl-3'>
            <h1 id='loginHeaders'> Sign Up</h1>
            <form className='mt-4' onSubmit={this.handleSubmit}>
              <div className='form-group'>
                <input className='form-control form-control-lg' type='text' name='email' placeholder='Email' value={email} onChange={this.handleInputChange} />
              </div>
              <div className='form-group'>
                <input className='form-control form-control-lg'  type='password' name='password' placeholder='Password' value={password} onChange={this.handleInputChange}/>
              </div>
              <button className='btn btn-primary btn-block' children='Register'></button>
            </form>
          </div>
        </div> 

        { error ? (
          <div className='row mt-3 justify-content-center align-items-center'> {error.message} </div>
        ) : null }
        
      </div>
    )
  }
}

export default withRouter(Register);

// render() {
//   const { email, password, error } = this.state;
//   return (
//     <div className='container'>

//       { error ? (
//         <div> 
//           {error.message} 
//         </div> 
//       ) : null }
//       <div id='signupForm' className='row justify-content-center align-items-center h-100'>
//         <div className='col col-sm-6 col-md-6 col-lg-4 col-xl-3'>
//           <h1 id='loginHeaders'> Log In </h1>
//           <form onSubmit={this.handleSubmit}>
//             <div className='form-group'>
//               <input className='form-control form-control-lg' type='text' name='email' placeholder='Email' value={email} onChange={this.handleInputChange} /> 
//             </div>
//             <div className='form-group'>
//               <input className='form-control form-control-lg' type='password' name='password' placeholder='Password' value={password} onChange={this.handleInputChange} />
//             </div>
//             <button className='btn btn-primary btn-block' children='Log In' /> 
//         </form>
//         </div>
//       </div>

//     </div>
//   );
// }
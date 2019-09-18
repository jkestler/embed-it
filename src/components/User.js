import { Component } from 'react';

class User extends Component { 

    componentDidMount() {
      this.props.firebase.auth().onAuthStateChanged( user => {
        if (user !== null) {
          this.props.setUser(user.displayName);
          console.log(user);
        }
      });
    }

    render() {
      const provider = new this.props.firebase.auth.GoogleAuthProvider();
    }
}

export default User;
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import Landing from './Landing';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import ProtectedRoute from './ProtectedRoute';
import LogOut from './LogOut';

class Navigation extends Component {
 render() {
   return (
     <Router>
        <div className='container'>
          {/* if authenticated show dashboard with link to dashboard, otherwise show login/register links */}
        
          { this.props.authenticated ? (
            <nav className='navbar fixed-top'>
              <div className='navbar-brand logo'>embed<em>It</em></div>
              {/* <NavLink to="/" className='nav-link btn btn-primary'>Home</NavLink> */}
              <NavLink to="/dashboard" className='nav-link btn btn-primary btn-lg'>Dashboard</NavLink>
              <LogOut />
            </nav>
          ) : (
            <nav className='navbar fixed-top'>
            <div className='navbar-brand logo'>embed<em>It</em></div>
              <NavLink to="/login" className='nav-link btn btn-primary '>Login</NavLink>
              <NavLink to="/register" className='ml-2 nav-link btn btn-info'>Register</NavLink>
            </nav>
          )}
          {/* */}
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route authenticated={this.props.authenticated} path="/login" component={Login} />
            <Route path="/register" component={Register} />
            {/* Once authenticated we hit /dashboard and render our protected route /dashboard component  */}
            <ProtectedRoute authenticated={this.props.authenticated} path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
     </Router>
   );
 }
}
export default Navigation;

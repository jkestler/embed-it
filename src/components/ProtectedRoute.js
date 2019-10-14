import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, rest, authenticated }) => {
 return <Route render={(props) => (authenticated ? <Component {...props} /> : <Redirect to="/dashboard" />)} {...rest} />;
};
export default ProtectedRoute;
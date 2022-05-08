import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/auth';

export default function PrivateComponent({ children }) {
  const context = useContext(AuthContext)
  return context.isLoggedIn ? children : <Navigate to="/login" />;
}

import React from 'react';
import { Navigate } from 'react-router-dom';
import { AuthService } from '../../lib/services/auth-service';

export default function PrivateComponent({ children }) {
  return AuthService.isLoggedIn() ? children : <Navigate to="/login" />;
}

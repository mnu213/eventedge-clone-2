import React from "react";
import { Navigate } from "react-router-dom";

export default function PrivateComponent({children}){
    return localStorage.getItem('email') ? children : <Navigate to="/login" />
}
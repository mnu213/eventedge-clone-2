import React, { createContext, useState, useContext, useEffect, useMemo } from 'react';

const AuthContext = createContext();

function AuthContextWrapper(props) {
  const [isLoggedIn, setisLoggedIn] = useState(false)
  const [test, setTest] = useState(false)

  useEffect(()=>{
    console.log(isLoggedIn)
  },[isLoggedIn])

  const { children } = props;

  const key = 'token';
  const login = (token) =>{
    localStorage.setItem(key, token);
    setisLoggedIn(true)
  }
  const logout = (token) =>{
    localStorage.removeItem(key);
    setisLoggedIn(false);
  }
  const memoizedTest = useMemo(() => {
    return {login , isLoggedIn};
  }, [isLoggedIn]);
  return <AuthContext.Provider value={memoizedTest}>{children}</AuthContext.Provider>;
}
export { AuthContext, AuthContextWrapper };

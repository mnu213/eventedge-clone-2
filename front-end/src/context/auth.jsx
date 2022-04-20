import React, { createContext, useState, useContext, useEffect, useMemo } from 'react';

const AuthContext = createContext();

function AuthContextWrapper(props) {
  const [test, setTest] = useState('five');
  const [test2, setTest2] = useState('six');
  const { children } = props;
  const memoizedTest = useMemo(() => {
    return { test, test2 };
  }, [test, test2]);
  return <AuthContext.Provider value={memoizedTest}>{children}</AuthContext.Provider>;
}
export { AuthContext, AuthContextWrapper };

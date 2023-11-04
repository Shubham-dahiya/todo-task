/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/react-in-jsx-scope */
import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(undefined);

  const verifyAuth = async () => {
    const isLoggedIn = await axios.get('https://todo-backend-es98.onrender.com/api/auth/is_logged_in');
    setAuth(isLoggedIn.data);
    return isLoggedIn.data;
  };

  useEffect(() => {
    verifyAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ auth, verifyAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;

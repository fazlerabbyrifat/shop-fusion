import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import axios from "axios";
import app from './../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUserProfile = (name, phone) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      phoneNumber: phone,
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        axios.post('https://shop-fusion-server.vercel.app/jwt', { email: currentUser.email })
        .then( data => {
          // console.log(data.data.token);
          localStorage.setItem('access-token', data.data.token);
          setLoading(false);
        })
      }
      else {
        localStorage.removeItem('access-token');
      }
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const AuthInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;

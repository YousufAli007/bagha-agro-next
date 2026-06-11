import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/firebase.init';

const AuthProvider = ({children}) => {
    const [user,setUser]= useState(null)
    const [loading, setLoading ]=useState(true)
    const registerUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email, password)
    }
    const singInUser =(email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = ()=>{
        setLoading(true);
       return signOut(auth);
       
    }
    const updateUserProfile = (name) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name
        });
    };
    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        })
        return()=> {
            unSubscribe();
        }
    })
    const authInfo ={
      registerUser,
      singInUser,
      logOut,
      updateUserProfile,
      user
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;
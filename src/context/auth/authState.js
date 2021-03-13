import React, { useReducer } from 'react';
import axios from 'axios';
import AuthContext from './authContext';
import authReducer from './authReducer';
import { LOGIN_USER, LOGOUT } from  '../types';

const AuthState = (props) => {
    let email = localStorage.getItem('token');
    const initialState = {
        token: email,
        isAuthenticated: email === null ? false : true
    };

    const [state, dispatch] = useReducer(authReducer, initialState);

    // Login User:
    const login = async formData => {

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.post('http://localhost:3000/user-login', formData, config);

            dispatch({
                type: LOGIN_USER,
                payload: res.data
            });

        } catch (error) {
            console.warn(error.message);
        }
    }

    // Logout:
    const logout = () => {
        dispatch({ type: LOGOUT })
    };

    return(
        <AuthContext.Provider 
            value = {{
                token: state.token,
                isAuthenticated: state.isAuthenticated,
                login,
                logout
            }}
            >
                {props.children}
        </AuthContext.Provider>
    );
};

export default AuthState;
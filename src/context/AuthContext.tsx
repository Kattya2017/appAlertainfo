import React, { createContext, useReducer, useEffect } from "react";
import { LoginData, LoginResponse, RegisterUser, User } from '../interfaces/loginInterface';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthState, authReducer } from "./AuthReduce";
import alertainfoApi from "../api/alertainfoApi";


type AuthContextProps = {
    errorMessage: string;
    token: string | null;
    user: User | null;
    status: 'checking' | 'authenticated' | 'not-authenticated';
    singIn: (loginData: LoginData) => void;
    singUp: (registerUser: RegisterUser) => void;
    removeError: () => void;
    logOut: () => void;

}

const authInicialState: AuthState = {
    status: 'checking',
    token: null,
    user: null,
    errorMessage: '',
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children } : any) => {

    const [state, dispatch] = useReducer(authReducer, authInicialState)

    useEffect(()=>{
        checkToken();
    },[]);

    const checkToken = async() =>{
        const token = await AsyncStorage.getItem('token');

        // No token, no autenticado
        if( !token ) return dispatch({ type: 'notAuthenticated' });

        // hay token
        if (token) {
            try {
                const resp = await alertainfoApi.get('/auth/administrado');
                console.log(resp.status);
                console.log(resp.data.token);
                
                if (resp.status !== 200) {
                    return dispatch({
                    type: 'notAuthenticated'});
                }
                await AsyncStorage.setItem('token', resp.data.token);
                dispatch({
                    type:'signIn',
                    payload: {
                        user: resp.data.user,
                        token: resp.data.token
                    }
        });
            } catch (error) {
                console.log(error);
                return dispatch({
                    type: 'notAuthenticated'
                });
            }
        }
    }


    const singIn = async({dni, password}: LoginData) => {
        try {
            const resp = await alertainfoApi.post<LoginResponse>('/auth/administrado',{dni, password});
            console.log(resp.data);
            await AsyncStorage.setItem('token', resp.data.token);
            dispatch({
                type: 'signUp',
                payload: {
                    token: resp.data.token,
                    user: resp.data.user,
                }
            });
        } catch (error) {
            console.log(error);
            dispatch({
                type: 'addError',
                payload: 'Información incorrecta'
            });
        }
    };


    const singUp = async({nombre, apellido, password, dni}:RegisterUser) => {
        try {
            const resp = await alertainfoApi.post('/administrado', {nombre, apellido, password, dni});
            console.log(resp.data);
            if (!resp.data.ok) {
                dispatch({
                    type: 'addError',
                    payload: resp.data.msg || 'Revise la información'
                });
            }
            await AsyncStorage.setItem('token', resp.data.token);
           dispatch({
                type: 'signUp',
                payload: {
                    token: resp.data.token,
                    user: resp.data.user
                }
            });
        } catch (error:any) {
            console.log(error);
            dispatch({
                type: 'addError',
                payload: error.response.data.errors[0].msg || 'Revise la información'
            });
        }
    };


    const removeError = () => {
        dispatch({
            type: 'removeError'
        });
    };


    const logOut = async() => {
        await AsyncStorage.removeItem('token');
        await AsyncStorage.removeItem('user');
        dispatch({
            type: 'logout'
        });
    };

    return (
        <AuthContext.Provider value={{
            ...state,
            singIn,
            singUp,
            removeError,
            logOut,
        }}>
            { children }
        </AuthContext.Provider>
    )
}


export default AuthContext
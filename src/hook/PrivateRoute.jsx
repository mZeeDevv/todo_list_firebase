import React from 'react'
import {loggin, checkingStatus, AuthState} from './AuthState'
import { Navigate, Outlet } from 'react-router'
import Spinner from '../pages/Spinner'
export default function PrivateRoute() {
 const {loggin, checkingStatus} = AuthState()

 if(checkingStatus) {
    return <Spinner/>
 }
 return loggin ? <Outlet/> : <Navigate to="/todo_list_firebase"/>
}


import React, { useEffect, useState } from 'react'
import {db} from '../firebase'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
export function AuthState() {
    const [loggin, setloggin] = useState(false)
    const [checkingStatus, setcheckingStatus] = useState(true)
    useEffect(() => {
        const auth = getAuth()
        onAuthStateChanged(auth, (user) => {
            if(user){
                setloggin(true)
            }
            setcheckingStatus(false)
        })
    },[])
 return {loggin, checkingStatus}
}
import React, { useState } from 'react'
import { Navigate, Link } from 'react-router-dom'
import { doSIgnInwithEmailAndPassword, doSignInWithGoogle } from '../../../utils/auth'
import { useAuth } from '../../../contexts/authContext'

const Login = () => {
    const { userLoggedIn } = useAuth()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSigningIn, setIsSingingIn] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault()
        if(!isSigningIn) {
            setIsSingingIn(true)
            await doSIgnInwithEmailAndPassword(email, password)
        }
    }

    const onGoogleSignIn = (e) => {
        e.preventDefault()
        if(!isSigningIn) {
            setIsSingingIn(true)
            doSignInWithGoogle().catch(er => {
                setIsSignIn(false)
            })
        }
    }

    return (
        <div>
            {userLoggedIn && (<Navigate to={'/home'} replace={true} />)}
            <main>
                
            </main>
        </div>
    )
}
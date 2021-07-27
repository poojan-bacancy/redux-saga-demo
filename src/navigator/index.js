import React from 'react'
import { useSelector } from 'react-redux'
import AppNavigator from './AppNavigator'
import AuthNavigator from './AuthNavigator'

const RootNavigator = () => {
    
    const isAuth = useSelector(state => state.Login.user)
    
    return (
        isAuth 
        ? <AppNavigator />
        : <AuthNavigator />
    )
}

export default RootNavigator

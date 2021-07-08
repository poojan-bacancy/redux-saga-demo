import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../containers/screens/Login'
import Register from '../containers/screens/Login/Register'
import ForgotPassword from '../containers/screens/Login/ForgotPassword'

const AuthNavigator = () => {
    const Stack = createStackNavigator()
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        </Stack.Navigator>
    )
}

export default AuthNavigator
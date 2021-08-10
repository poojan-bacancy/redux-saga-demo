import React from 'react'
import { createStackNavigator , TransitionPresets } from '@react-navigation/stack'

import { Login, Register } from 'containers/screens'

const AuthNavigator = () => {
    const Stack = createStackNavigator()

    const stackNavigatorOptions = {
        headerShown : null,
        ...TransitionPresets.SlideFromRightIOS
    }

    return (
        <Stack.Navigator screenOptions={stackNavigatorOptions}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
    )
}

export default AuthNavigator
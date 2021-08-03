import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { DashBoard } from 'containers/screens'

const AppNavigator = () => {
    const Stack = createStackNavigator()
    return (
        <Stack.Navigator>
            <Stack.Screen name="DashBoard" component={DashBoard} />
        </Stack.Navigator>
    )
}

export default AppNavigator

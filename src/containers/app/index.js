import React from 'react'
import { store } from 'store'
import RootNavigator from 'navigator'
import { Provider as ReduxProvider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const  App = () =>  {
  return (
    <SafeAreaProvider>
        <NavigationContainer>
            <RootNavigator />
        </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default () => (
    <ReduxProvider store={store}>
        <App/>
    </ReduxProvider>
)
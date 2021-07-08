import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider} from 'react-native-safe-area-context'
import RootNavigator from '../../navigator'
import { Provider as ReduxProvider } from 'react-redux'
import { store } from '../../store'

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
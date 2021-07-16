import React from 'react'
import { View, Text } from 'react-native'
import { Header } from 'components'
import { FORGOT_PASS_FORM_TITLE } from './constants'

const ForgotPassword = (props) => {
    return (
        <View>
            <Header title = {FORGOT_PASS_FORM_TITLE} goBack={() => props.navigation.pop()} />
        </View>
    )
}

export default ForgotPassword

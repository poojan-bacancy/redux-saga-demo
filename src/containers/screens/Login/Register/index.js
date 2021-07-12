import React from 'react'
import { View, Text } from 'react-native'
import { Header } from 'components'
import { REGISTER_FORM_TITLE } from '../constants'

const Register = (props) => {
    return (
        <View>
            <Header 
                headerTitle = {REGISTER_FORM_TITLE}
                goBack={() => props.navigation.pop()}
            />
        </View>
    )
}

export default Register

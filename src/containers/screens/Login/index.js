import React, { useRef } from 'react'
import { Field , reduxForm } from 'redux-form'
import { scale, verticalScale } from 'react-native-size-matters'
import { View, Text , Platform, StyleSheet, ScrollView, TouchableOpacity ,KeyboardAvoidingView } from 'react-native'

import Colors  from 'utils/Colors'
import { FormInput , CustomButton } from 'components'
import { alphaNumeric, passwordRequired, usernameRequired, validatePassword } from 'utils/Validations'
import { FORGOTPASS_LINK, placeholders, LOGINFORM_BUTTON, SIGNUP_LINK, SIGNUP_TEXT } from './constants'

const Login = (props) => {
    
    const passRef = useRef()

    const onSubmit = (values) => console.log(values)
    const navigateToForgotPass = () => props.navigation.navigate('ForgotPassword')
    const navigateToRegister = () => props.navigation.navigate('Register')

    return (
        <KeyboardAvoidingView
            behavior="height"
            keyboardVerticalOffset = { Platform.OS === 'ios' ? 40 : 0 }
            style={styles.screen}
        >
            <ScrollView>

                <Field
                    name="userName"
                    alphaNumeric
                    component={FormInput}
                    blurOnSubmit={false}
                    placeholder={placeholders.username}
                    returnKeyType="next"
                    validate={[usernameRequired]}
                    onSubmitEditing={() => passRef.current.focus()}
                />
                
                <Field
                    name="password"
                    refField={passRef}
                    secureField
                    component={FormInput}
                    blurOnSubmit={true}
                    placeholder={placeholders.password}
                    returnKeyType="done"
                    validate={[passwordRequired,validatePassword]}
                    onSubmitEditing={props.handleSubmit(onSubmit)}
                />

                <TouchableOpacity onPress={navigateToForgotPass} >
                    <Text style={styles.forgotPass}>{FORGOTPASS_LINK}</Text>
                </TouchableOpacity>

                <CustomButton
                    style={styles.button}
                    buttonLabel={LOGINFORM_BUTTON}
                    onPress={props.handleSubmit(onSubmit)}
                />

                <View style={styles.signupLinkContainer}>
                    <Text style={styles.signuptext}>{SIGNUP_TEXT}</Text>
                    <TouchableOpacity onPress={navigateToRegister}>
                        <Text style={[styles.signuptext,styles.signupLink]}>{SIGNUP_LINK}</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>

        </KeyboardAvoidingView>
    )
}

export default reduxForm({
    form: 'login-form'
})(Login)
 

const styles = StyleSheet.create({
    screen : {
        flex : 1,
        marginHorizontal : scale(25)
    },
    forgotPass : {
        color : Colors.grey,
        textAlign : 'right',
        marginTop : verticalScale(10),
        fontSize : verticalScale(14)
    },
    button : {
        marginTop : verticalScale(20)
    },
    signupLinkContainer : {
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'center',
        marginTop : verticalScale(20),
    },
    signuptext : {
        fontSize : verticalScale(14)
    },  
    signupLink : {
        color : Colors.green,
    }
})
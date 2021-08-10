import React, { useRef } from 'react'
import { Field , reduxForm } from 'redux-form'
import { useDispatch, useSelector } from 'react-redux'
import { scale, verticalScale } from 'react-native-size-matters'
import { View, Text , Platform, StyleSheet, ScrollView, TouchableOpacity ,KeyboardAvoidingView, SafeAreaView, ActivityIndicator } from 'react-native'

import Colors  from 'utils/Colors'
import { loginUser } from './actions'
import { FormInput , CustomButton } from 'components'
import { passwordRequired, emailRequired, validatePassword , validateEmail } from 'utils/Validations'
import { placeholders, LOGINFORM_BUTTON, SIGNUP_LINK, SIGNUP_TEXT } from './constants'

const Login = (props) => {

    const loading = useSelector( state => state.Login.loading )
    const error = useSelector( state => state.Login.error )

    const passRef = useRef()
    const dispatch = useDispatch()

    const onSubmit = (values) => dispatch(loginUser(values))
    
    const navigateToRegister = () => props.navigation.navigate('Register')

    return (
        <SafeAreaView style={styles.screen}>
            <KeyboardAvoidingView
                behavior="height"
                style={styles.flexOne}
                keyboardVerticalOffset = { Platform.OS === 'ios' ? 40 : 0 }
            >
                <ScrollView keyboardShouldPersistTaps="handled">

                    <Field
                        name="email"
                        returnKeyType="next"
                        blurOnSubmit={false}
                        autoCapitalize="none"
                        component={FormInput}
                        keyboardType="email-address"
                        placeholder={placeholders.email}
                        validate={[emailRequired,validateEmail]}
                        onSubmitEditing={() => passRef.current.focus()}
                    />
                    
                    <Field
                        secureField
                        name="password"
                        refField={passRef}
                        blurOnSubmit={true}
                        returnKeyType="done"
                        component={FormInput}
                        placeholder={placeholders.password}
                        validate={[passwordRequired,validatePassword]}
                        onSubmitEditing={props.handleSubmit(onSubmit)}
                    />

                    { loading ? <ActivityIndicator size="large" color={Colors.green} /> : <CustomButton
                        style={styles.button}
                        buttonLabel={LOGINFORM_BUTTON}
                        onPress={props.handleSubmit(onSubmit)}
                    />}

                    <View style={styles.signupLinkContainer}>
                        <Text style={styles.signuptext}>{SIGNUP_TEXT}</Text>
                        <TouchableOpacity onPress={navigateToRegister}>
                            <Text style={[styles.signuptext,styles.signupLink]}>{SIGNUP_LINK}</Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.errorText}>{error}</Text>

                </ScrollView>

            </KeyboardAvoidingView>
        </SafeAreaView>
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
    flexOne : {
        flex : 1
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
    },
    errorText : {
        marginTop : 30,
        color : Colors.red,
        textAlign : 'center',
        fontSize : verticalScale(16)
    }
})
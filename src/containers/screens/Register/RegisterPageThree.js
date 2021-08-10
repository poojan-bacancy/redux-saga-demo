import React, { useRef } from 'react'
import { ActivityIndicator, View } from 'react-native'
import { connect, useSelector } from 'react-redux'
import { Field, formValueSelector, reduxForm } from 'redux-form'

import Styles from './Styles'
import Colors from 'utils/Colors'
import { CustomButton, FormInput } from 'components'
import { passwordRequired, validatePassword } from 'utils/Validations'
import { BACK_BUTTON, placeholders, SUBMIT_BUTTON, VALIDATE_CONFIRM_PASSWORD } from './constants'

let RegisterPageThree = (props) => {

    const loading = useSelector(state => state.Login.loading)

    const {handleSubmit,onSubmit,prevPage} = props

    const confirmPassRef = useRef()

    const validateConfirmPassword = (password) => 
        password && password !== props.password
        ? VALIDATE_CONFIRM_PASSWORD
        : undefined

    return (
        <View style={Styles.form}>
            
            <Field 
                secureField
                name="password"
                blurOnSubmit={false}
                returnKeyType="next"
                component={FormInput}
                placeholder={placeholders.PASSWORD}
                validate={[passwordRequired,validatePassword]}
                onSubmitEditing={() => confirmPassRef.current.focus()}
            />
            <Field 
                secureField
                blurOnSubmit={true}
                returnKeyType="done"
                name="confirmPassword"
                component={FormInput}
                refField={confirmPassRef}
                placeholder={placeholders.CONFIRMPASSWORD}
                onSubmitEditing={handleSubmit(onSubmit)}
                validate={[passwordRequired,validateConfirmPassword]}
            />

            {loading
                ? <ActivityIndicator style={{marginTop : 10 }} size={30} color={Colors.green} />
                :<View style={Styles.buttonContainer}>
                <CustomButton style={Styles.button} buttonLabel={BACK_BUTTON} onPress={prevPage} />
                <CustomButton style={Styles.button} buttonLabel={SUBMIT_BUTTON} onPress={handleSubmit(onSubmit)}/>               
            </View>}

        </View>
    )
}

RegisterPageThree =  reduxForm({
    form: 'register-form',
    destroyOnUnmount : false,
    forceUnregisterOnUnmount : true
})(RegisterPageThree)

const selector = formValueSelector('register-form')

export default RegisterPageThree = connect(state => {
    const password = selector(state, 'password')
    return {password}
})(RegisterPageThree)



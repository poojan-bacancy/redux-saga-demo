import React, { useRef } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { Field, formValueSelector, reduxForm } from 'redux-form'

import Styles from './Styles'
import { CustomButton, FormInput } from 'components'
import { passwordRequired, validatePassword } from 'utils/Validations'
import { BACK_BUTTON, placeholders, SUBMIT_BUTTON, VALIDATE_CONFIRM_PASSWORD } from './constants'

let RegisterPageThree = (props) => {

    const {handleSubmit,onSubmit,prevPage} = props

    const confirmPassRef = useRef()

    const validateConfirmPassword = (password) => 
        password && password !== props.password
        ? VALIDATE_CONFIRM_PASSWORD
        : undefined

    return (
        <View style={Styles.form}>
            
            <Field 
                name="password"
                secureField
                placeholder={placeholders.PASSWORD}
                component={FormInput}
                validate={[passwordRequired,validatePassword]}
                blurOnSubmit={false}
                returnKeyType="next"
                onSubmitEditing={() => confirmPassRef.current.focus()}
            />
            <Field 
                name="confirmPassword"
                refField={confirmPassRef}
                secureField
                placeholder={placeholders.CONFIRMPASSWORD}
                component={FormInput}
                blurOnSubmit={true}
                validate={[passwordRequired,validateConfirmPassword]}
                returnKeyType="done"
                onSubmitEditing={handleSubmit(onSubmit)}
            />

            <View style={Styles.buttonContainer}>
                <CustomButton style={Styles.button} buttonLabel={BACK_BUTTON} onPress={prevPage} />
                <CustomButton style={Styles.button} buttonLabel={SUBMIT_BUTTON} onPress={handleSubmit(onSubmit)}/>               
            </View>

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



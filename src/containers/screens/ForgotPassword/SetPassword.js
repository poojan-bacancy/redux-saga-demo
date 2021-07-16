import React , {useRef} from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native'
import { Field, formValueSelector, reduxForm } from 'redux-form'

import Styles from './Styles'
import { FormInput , CustomButton } from 'components'
import { passwordRequired, validatePassword } from 'utils/Validations'
import { placeholders, SET_PASSWORD_DETAILS, SUBMIT_BUTTON, VALIDATE_REENTERED_PASSWORD } from './constants'

let SetPassword = (props) => {
    
    const {handleSubmit,onSubmit} = props

    const confirmPassRef = useRef()

    const validateConfirmPassword = (password) => 
        password && password !== props.password
        ? VALIDATE_REENTERED_PASSWORD
        : undefined
    
    return (
        <View style={Styles.form}>

            <Text style={Styles.detailText}>
                {SET_PASSWORD_DETAILS}
            </Text>

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
                placeholder={placeholders.CONFIRM_PASSWORD}
                component={FormInput}
                blurOnSubmit={true}
                validate={[passwordRequired,validateConfirmPassword]}
                returnKeyType="done"
                onSubmitEditing={handleSubmit(onSubmit)}
            />

            <View style={Styles.buttonContainer}>
                <CustomButton style={Styles.button} buttonLabel={SUBMIT_BUTTON} onPress={handleSubmit(onSubmit)}/>               
            </View>
        </View>
    )
}

SetPassword =  reduxForm({
    form: 'set-password-form',
})(SetPassword)

const selector = formValueSelector('set-password-form')

SetPassword = connect(state => {
    const password = selector(state, 'password')
    return {password}
})(SetPassword)

export default SetPassword

const styles = StyleSheet.create({})

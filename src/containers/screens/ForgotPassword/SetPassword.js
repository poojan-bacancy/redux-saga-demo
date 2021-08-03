import React , {useRef} from 'react'
import { connect } from 'react-redux'
import { Text, View } from 'react-native'
import { Field, formValueSelector, reduxForm } from 'redux-form'

import Styles from './Styles'
import { FormInput , CustomButton } from 'components'
import { passwordRequired, validatePassword } from 'utils/Validations'
import { placeholders, SET_PASSWORD_DETAILS, SUBMIT_BUTTON, VALIDATE_REENTERED_PASSWORD } from './constants'

let SetPassword = (props) => {
    
    const {handleSubmit,onSubmit} = props

    const confirmPassRef = useRef()

    const validateConfirmPassword = (password) => 
        password && password !== props.newPassword
        ? VALIDATE_REENTERED_PASSWORD
        : undefined
    
    return (
        <View style={Styles.form}>

            <Text style={Styles.detailText}>{SET_PASSWORD_DETAILS}</Text>

            <Field 
                secureField
                name="newPassword"
                returnKeyType="next"
                blurOnSubmit={false}
                component={FormInput}
                placeholder={placeholders.PASSWORD}
                validate={[passwordRequired,validatePassword]}
                onSubmitEditing={() => confirmPassRef.current.focus()}
            />
            <Field 
                secureField
                blurOnSubmit={true}
                returnKeyType="done"
                component={FormInput}
                refField={confirmPassRef}
                name="confirmNewPassword"
                placeholder={placeholders.CONFIRM_PASSWORD}
                validate={[passwordRequired,validateConfirmPassword]}
                onSubmitEditing={handleSubmit(onSubmit)}
            />

            <View style={Styles.buttonContainer}>
                <CustomButton style={Styles.button} 
                    buttonLabel={SUBMIT_BUTTON} 
                    onPress={handleSubmit(onSubmit)}
                />               
            </View>
        </View>
    )
}

SetPassword =  reduxForm({
    form: 'forgot-password',
    destroyOnUnmount : false,
    forceUnregisterOnUnmount : true
})(SetPassword)

const selector = formValueSelector('forgot-password')

export default SetPassword = connect(state => {
    const newPassword = selector(state, 'newPassword')
    return {newPassword}
})(SetPassword)


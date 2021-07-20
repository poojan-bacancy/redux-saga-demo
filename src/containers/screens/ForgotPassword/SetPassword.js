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
                name="newPassword"
                secureField
                placeholder={placeholders.PASSWORD}
                component={FormInput}
                validate={[passwordRequired,validatePassword]}
                blurOnSubmit={false}
                returnKeyType="next"
                onSubmitEditing={() => confirmPassRef.current.focus()}
            />
            <Field 
                name="confirmNewPassword"
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


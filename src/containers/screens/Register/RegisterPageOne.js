import React, { useRef } from 'react'
import { Field, reduxForm } from 'redux-form'
import { View } from 'react-native'

import Styles from './Styles'
import { FormInput , CustomButton } from 'components'
import { NEXT_BUTTON, placeholders } from './constants'
import { usernameRequired , fullnameRequired } from 'utils/Validations'

const RegisterPageOne = ({handleSubmit,nextPage}) => {

    const userNameRef = useRef()

    return (
        <View style={Styles.form}>
            
            <Field 
                name="fullName"
                allowSpaces
                placeholder={placeholders.FULLNAME}
                component={FormInput}
                blurOnSubmit={false}
                returnKeyType="next"
                validate={[fullnameRequired]}
                onSubmitEditing= {() => userNameRef.current.focus() }
            />
            <Field 
                name="userName"
                refField={userNameRef}
                placeholder={placeholders.USERNAME}
                component={FormInput}
                validate={[usernameRequired]}
                blurOnSubmit={true}
                returnKeyType="done"
                onSubmitEditing = {handleSubmit(nextPage)}
            />

            <View style={Styles.buttonContainer}>
                <CustomButton style={Styles.button} buttonLabel={NEXT_BUTTON} onPress={handleSubmit(nextPage)}/>               
            </View>

        </View>
    )
}

export default reduxForm({
    form: 'register-form',
    destroyOnUnmount : false,
    forceUnregisterOnUnmount : true
})(RegisterPageOne)


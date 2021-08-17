import { View } from 'react-native'
import React, { useRef } from 'react'
import { Field, reduxForm } from 'redux-form'

import Styles from './Styles'
import { FormInput , CustomButton } from 'components'
import { NEXT_BUTTON, placeholders } from './constants'
import { usernameRequired , fullnameRequired } from 'utils/Validations'

const RegisterPageOne = ({handleSubmit,nextPage}) => {

    const userNameRef = useRef()

    return (
        <View style={Styles.form}>
            
            <Field 
                allowSpaces
                name="fullName"
                returnKeyType="next"
                blurOnSubmit={false}
                component={FormInput}
                validate={[fullnameRequired]}
                placeholder={placeholders.FULLNAME}
                onSubmitEditing= {() => userNameRef.current.focus() }
            />
            <Field 
                name="userName"
                returnKeyType="done"
                blurOnSubmit={true}
                component={FormInput}
                refField={userNameRef}
                validate={[usernameRequired]}
                placeholder={placeholders.USERNAME}
                onSubmitEditing = {handleSubmit(nextPage)}
            />

            <View style={Styles.buttonContainer}>
                <CustomButton style={Styles.button} 
                    buttonLabel={NEXT_BUTTON} 
                    onPress={handleSubmit(nextPage)}
                />               
            </View>

        </View>
    )
}

export default reduxForm({
    form: 'register-form',
    destroyOnUnmount : false,
    forceUnregisterOnUnmount : true
})(RegisterPageOne)


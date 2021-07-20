import React , { useRef } from 'react'
import { StyleSheet, View } from 'react-native'
import { verticalScale } from 'react-native-size-matters'
import { Field, FieldArray, reduxForm } from 'redux-form'

import Styles from './Styles'
import { DeleteButton, CustomButton, FormInput } from 'components'
import { ADD_HOBBY_BUTTON, BACK_BUTTON, NEXT_BUTTON, placeholders } from './constants'
import { emailRequired, mobileNoRequired, validateEmail, validateMobileno } from 'utils/Validations'

const renderHobbies = ({ fields }) => {
    return(
        <View>
            <CustomButton
                style={styles.addHobbyButton} 
                buttonLabel={ADD_HOBBY_BUTTON}
                onPress={() => fields.push({})}
            />
            {fields.map((hobby,index) => (
                <View key={index} style={styles.hobbyInput}>
                    <View style={{flex : 1}}>
                        <Field 
                            allowSpaces
                            name={hobby}
                            placeholder={`${placeholders.HOBBY} #${index + 1 }`}
                            component={FormInput}
                            blurOnSubmit={true}
                            returnKeyType="done"
                        />
                    </View>
                    <DeleteButton onDelete={() => fields.remove(index)} />
                </View>
            ))}
        </View>
    )
}

const RegisterPageTwo = ({prevPage,handleSubmit,nextPage}) => {

    const emailRef = useRef()

    return (
        <View style={Styles.form}>

            <Field 
                name="mobileNo"
                maxLength={10}
                keyboardType="numeric"
                placeholder={placeholders.MOBILENO}
                component={FormInput}
                validate={[mobileNoRequired,validateMobileno]}
                blurOnSubmit={false}
                returnKeyType="next"
                onSubmitEditing={() => emailRef.current.focus()}
            />
            <Field 
                name="email"
                refField={emailRef}
                keyboardType="email-address"
                placeholder={placeholders.EMAIL}
                component={FormInput}
                validate={[emailRequired,validateEmail]}
                blurOnSubmit={true}
                returnKeyType="done"
            />
            
            <FieldArray name="hobbies" component={renderHobbies} />

            <View style={Styles.buttonContainer}>
                <CustomButton style={Styles.button} buttonLabel={BACK_BUTTON} onPress={prevPage} />
                <CustomButton style={Styles.button} buttonLabel={NEXT_BUTTON} onPress={handleSubmit(nextPage)} />               
            </View>

        </View>
    )
}

export default reduxForm({
    form: 'register-form',
    destroyOnUnmount : false,
    forceUnregisterOnUnmount : true
})(RegisterPageTwo)

const styles = StyleSheet.create({
    hobbyInput : {
        flexDirection : 'row', 
        alignItems : 'center',
        justifyContent : 'space-around'
    },
    addHobbyButton : {
        marginTop : verticalScale(20)
    }
})
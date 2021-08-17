import React , { useRef } from 'react'
import { StyleSheet, View , Text } from 'react-native'
import { verticalScale } from 'react-native-size-matters'
import { Field, FieldArray, reduxForm } from 'redux-form'

import Styles from './Styles'
import Colors  from 'utils/Colors'
import { DeleteButton, CustomButton, FormInput } from 'components'
import { emailRequired, mobileNoRequired, validateEmail, validateMobileno } from 'utils/Validations'
import { ADD_HOBBY_BUTTON, BACK_BUTTON, HOBBY_REQUIRED, MIN_ONE_HOBBY_REQUIRED, NEXT_BUTTON, placeholders } from './constants'

const renderHobbies = ({ fields, meta : {error , submitFailed } }) => {
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
            { submitFailed  && error && <Text style={styles.error}>{error}</Text>}
        </View>
    )
}

const validate = (values,props) => {
    const errors = {}

    if (!values.hobbies || !values.hobbies.length) errors.hobbies = { _error : MIN_ONE_HOBBY_REQUIRED  }
    else{
        const hobbiesArrayErrors = []
        values.hobbies.forEach((hobby,index)=>{
            if (!hobby || !hobby.length) hobbiesArrayErrors[index] = HOBBY_REQUIRED
        })
        if(hobbiesArrayErrors.length) errors.hobbies = hobbiesArrayErrors
    }
    
    return errors
}

const RegisterPageTwo = ({prevPage,handleSubmit,nextPage}) => {

    const emailRef = useRef()

    return (
        <View style={Styles.form}>

            <Field 
                maxLength={10}
                name="mobileNo"
                blurOnSubmit={false}
                returnKeyType="next"
                component={FormInput}
                keyboardType="numeric"
                placeholder={placeholders.MOBILENO}
                validate={[mobileNoRequired,validateMobileno]}
                onSubmitEditing={() => emailRef.current.focus()}
            />
            <Field 
                name="email"
                refField={emailRef}
                blurOnSubmit={true}
                returnKeyType="done"
                autoCapitalize="none"
                component={FormInput}
                keyboardType="email-address"
                placeholder={placeholders.EMAIL}
                validate={[emailRequired,validateEmail]}
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
    validate,
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
    },
    error : {
        color : Colors.red,
        textAlign : 'center',
        marginVertical : 10
    }
})
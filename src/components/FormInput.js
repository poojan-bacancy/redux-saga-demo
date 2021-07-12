import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { verticalScale } from 'react-native-size-matters'
import Colors from '../utils/Colors'
import { alphaNumeric, removeSpaces } from '../utils/Validations'

const FormInput = (props) => {

    const { active , touched , error } = props.meta

    const isErrorVisible = () => {
        return touched && error
            ? <Text style={styles.errorText}>{error}</Text> 
            : null
    }

    const formInputContainerStyle = {
        ...styles.formInputContainer,
        borderBottomColor : active ? Colors.green : Colors.grey
    }

    const textChangeHandler = (term) => {
        let value = removeSpaces(term)
        props.input.onChange(value)
    }

    return (
        <View>
            <View style={formInputContainerStyle}>
                <TextInput
                    {...props}
                    ref={props.refField}
                    style={styles.input}
                    value={props.input.value}
                    placeholderTextColor={Colors.black}
                    onChangeText={textChangeHandler}
                    onFocus={props.input.onFocus}
                    onBlur={props.input.onBlur}
                />
            </View>
            {isErrorVisible()}
        </View>
    )
}

export default FormInput

const styles = StyleSheet.create({
    formInputContainer :{
        marginTop : 20,
        borderBottomWidth : 1
    },
    input : {
        color : Colors.black,
        fontSize : verticalScale(14)
    },
    errorText :  {
        color : Colors.red
    }
})

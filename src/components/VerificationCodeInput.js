import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { scale, verticalScale } from 'react-native-size-matters'
import Colors from '../utils/Colors'

const VerificationCodeInput = (props) => {

    const { active } = props.meta

    const codeInputContainerStyle= {
        ...styles.codeInputContainer,
        borderColor : active ? Colors.green : Colors.grey
    }

    const textChangeHandler = (term) => {
        props.input.onChange(term)
        props.onSubmit()
    }

    return (
        <View style={codeInputContainerStyle}>
            <TextInput
                {...props} 
                style={styles.codeInput}
                ref={props.refField}
                keyboardType="numeric"
                maxLength={1}
                returnKeyType={props.returnKeyType ? props.returnKeyType :"next"}
                onChangeText={textChangeHandler}
                onFocus={props.input.onFocus}
                onBlur={props.input.onBlur}
            />
        </View>
    )
}

export default VerificationCodeInput

const styles = StyleSheet.create({
    codeInputContainer : {
        flex : 1,
        borderWidth : 1,
        marginHorizontal : scale(10)
    },
    codeInput : {
        flex : 1,
        color : Colors.black,
        textAlign : 'center',
        fontSize : verticalScale(22)
    }
})

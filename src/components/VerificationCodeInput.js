import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { scale, verticalScale } from 'react-native-size-matters'

import Colors from 'utils/Colors'

const VerificationCodeInput = (props) => {

    const { active } = props.meta

    const codeInputContainerStyle= {
        ...styles.codeInputContainer,
        borderColor : active ? Colors.green : Colors.grey
    }

    const textChangeHandler = async (term) => {
        await props.input.onChange(term)
        props.focusNextFn(term)
    }

    return (
        <View style={codeInputContainerStyle}>
            <TextInput
                {...props} 
                maxLength={1}
                ref={props.refField}
                keyboardType="numeric"
                style={styles.codeInput}
                onBlur={props.input.onBlur}
                onFocus={props.input.onFocus}
                onChangeText={textChangeHandler}
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
        textAlign : 'center',
        color : Colors.black,
        fontSize : verticalScale(22)
    }
})

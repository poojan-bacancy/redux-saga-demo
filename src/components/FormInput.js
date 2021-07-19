import React , { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { verticalScale } from 'react-native-size-matters'

import Colors from 'utils/Colors'
import PasswordSwitch from './PasswordSwitch'
import { removeSpaces } from 'utils/Validations'

const FormInput = (props) => {
    const { active , touched , error } = props.meta

    const [isPasswordVisible,setIsPasswordVisible] = useState(false)
    const eyePressHandler = () => setIsPasswordVisible(prevState => !prevState)
    const isPasswordTogglerVisible = () => 
        props.secureField 
        ? <PasswordSwitch isVisible={isPasswordVisible} onPress={eyePressHandler} />
        :null 
    
    const isErrorVisible = () => 
        touched && error
        ? <Text style={styles.errorText}>{error}</Text> 
        : null

    const formInputContainerStyle = {
        ...styles.formInputContainer,
        borderBottomColor : active ? Colors.green : Colors.grey
    }

    const textChangeHandler = (term) => {
        let value = !props.allowSpaces ? removeSpaces(term) : term
        props.input.onChange(value)
    }

    return (
        <View>
            <View style={formInputContainerStyle}>
                <TextInput
                    {...props}
                    secureTextEntry={ props.secureField && !isPasswordVisible }
                    ref={props.refField}
                    style={styles.input}
                    value={props.input.value}
                    placeholderTextColor={Colors.black}
                    onChangeText={textChangeHandler}
                    onFocus={props.input.onFocus}
                    onBlur={props.input.onBlur}
                />
                {isPasswordTogglerVisible()}
            </View>
            {isErrorVisible()}
        </View>
    )
}

export default FormInput

const styles = StyleSheet.create({
    formInputContainer :{
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between',
        marginTop : 20,
        borderBottomWidth : 1,
    },
    input : {
        flex  :1,
        color : Colors.black,
        fontSize : verticalScale(14)
    },
    errorText :  {
        color : Colors.red
    }
})

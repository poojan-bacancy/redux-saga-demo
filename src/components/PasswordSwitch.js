import React from 'react'
import { StyleSheet } from 'react-native'
import { scale } from 'react-native-size-matters'
import Feather from 'react-native-vector-icons/Feather'
import Colors from '../utils/Colors'

const PasswordSwitch = (props) => {
    return(
        <Feather
            onPress={props.onPress}
            style={styles.eyeIcon}
            name={props.isVisible ? 'eye' : 'eye-off'}
            size={20}
            color={Colors.grey}
        />  
    )
}

export default PasswordSwitch

const styles = StyleSheet.create({
    eyeIcon : {
        marginRight : scale(5)
    },
})
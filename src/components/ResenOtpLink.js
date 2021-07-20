import React from 'react'
import Colors from 'utils/Colors'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { verticalScale } from 'react-native-size-matters'

const ResenOtpLink = ({onResend}) => {
    return (
        <TouchableOpacity style={styles.linkContainer} onPress={onResend}>
            <Text style={styles.resendButton}>Resend</Text>
        </TouchableOpacity>
    )
}

export default ResenOtpLink

const styles = StyleSheet.create({
    linkContainer : {
        marginTop : verticalScale(15) ,
        alignItems : 'center'
    },
    resendButton : {
        color : Colors.green,
        borderBottomWidth : 1,
        borderBottomColor : Colors.green 
    }
})

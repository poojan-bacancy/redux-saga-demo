import React from 'react'
import { verticalScale } from 'react-native-size-matters'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

import Colors from 'utils/Colors'

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
        alignItems : 'center',
        marginTop : verticalScale(15)
    },
    resendButton : {
        color : Colors.green,
        borderBottomWidth : 1,
        borderBottomColor : Colors.green 
    }
})

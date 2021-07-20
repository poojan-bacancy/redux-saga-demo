import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { moderateScale, verticalScale } from 'react-native-size-matters'

import Colors from 'utils/Colors'

const CustomButton = ({style,onPress,buttonLabel}) => {
    return (
        <TouchableOpacity 
            activeOpacity={0.7} 
            style={{...styles.button,...style}} 
            onPress={onPress}
        >
            <Text style={styles.label}> {buttonLabel} </Text>

        </TouchableOpacity>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    button : {
        flex : 1,
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : Colors.green,
        paddingVertical : verticalScale(8),
        maxWidth : 450,
        maxHeight : 80,
        borderRadius : moderateScale(10),
    },
    label : {
        color : Colors.white,
        fontSize : verticalScale(16)
    }
})

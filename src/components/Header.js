import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { moderateScale, verticalScale } from 'react-native-size-matters'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Header = ({goBack,headerTitle}) => {
    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={goBack}>
                <Ionicons name="md-chevron-back-sharp" size={moderateScale(30)} />
            </TouchableOpacity>
            <View style={styles.headerTitleContainer}>
                <Text style={styles.headerTitle}>{headerTitle}</Text>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header : {
        flexDirection : 'row',
        alignItems : 'center',
        paddingVertical : verticalScale(10)   
    },
    headerTitleContainer : {
        flex : 1 , 
        alignItems : 'center' , 
        marginLeft : -(moderateScale(30))
    },
    headerTitle : {
        fontSize : verticalScale(20)
    }
})

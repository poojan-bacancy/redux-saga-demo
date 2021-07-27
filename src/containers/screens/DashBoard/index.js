import React from 'react'
import { useSelector } from 'react-redux'
import { scale, verticalScale } from 'react-native-size-matters'
import { Text, StyleSheet, SafeAreaView } from 'react-native'

import Colors from 'utils/Colors'

const DashBoard = () => {

    const userEmail = useSelector(state => state.Login.user)
    
    return (
        <SafeAreaView style={styles.screen}>

            <Text style={styles.hiText}>Hii, there</Text>

            <Text style={styles.name}>{userEmail}</Text>

        </SafeAreaView>
    )
}


export default DashBoard

const styles = StyleSheet.create({
    screen : {
        flex : 1
    },
    hiText : {
        color : Colors.green,
        marginLeft : scale(15),
        marginTop : scale(10),
        fontSize : verticalScale(22)
    },
    name : {
        color : Colors.darkGrey,
        marginLeft : scale(15),
        marginTop : scale(10),
        fontSize : verticalScale(18)
    },
    logoutIcon : {
        marginRight : scale(10)
    }
})
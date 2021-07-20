import React, { useEffect } from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { scale, verticalScale } from 'react-native-size-matters'

import Colors from 'utils/Colors'

const LogoutButton = ({onLogout}) => {
   return(
       <TouchableOpacity onPress={onLogout}>
            <MaterialIcons 
                style={styles.logoutIcon}
                size={scale(30)}
                color={Colors.green}
                name="logout"
            />
       </TouchableOpacity>
   )
}

const DashBoard = (props) => {

    useEffect(() => {
        props.navigation.setOptions({ 
            title : 'poojan010',
            headerRight : () =>  (<LogoutButton onLogout={() => {}} />)
        })
    },[])

    return (
        <View style={styles.screen}>

            <Text style={styles.hiText}>Hii, there</Text>

            <Text style={styles.name}>Poojan Bhatt</Text>

            <Text style={styles.name}>Details</Text>

            <Text style={styles.name}>+919725935080</Text>
        
            <Text style={styles.name}>Your Hobbies</Text>

        </View>
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
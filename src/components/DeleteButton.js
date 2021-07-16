import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import MaterilaIcons from 'react-native-vector-icons/MaterialIcons'
import Colors from 'utils/Colors'

const DeleteButton = ({ onDelete }) => {
    return (
        <TouchableOpacity onPress={onDelete}>
            <MaterilaIcons 
                style={styles.deleteIcon}
                name="delete"
                size={25}
                color={Colors.red}
            />
        </TouchableOpacity>
    )
}

export default DeleteButton

const styles = StyleSheet.create({
    deleteIcon : { marginTop : 20 , marginHorizontal : 10}
})

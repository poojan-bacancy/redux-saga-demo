import { StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";

import Colors from 'utils/Colors'

export default Styles =  StyleSheet.create({
    form : {
        flex : 1,
        justifyContent : 'center'
    },
    buttonContainer : {
        flexDirection : 'row',
        marginTop : verticalScale(20)
    },
    button : {
        marginHorizontal : scale(10)
    },
    detailText : {
        fontSize : scale(16),
        color : Colors.darkGrey
    }
})

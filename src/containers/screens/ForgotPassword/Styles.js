import { StyleSheet } from "react-native";
import Colors from 'utils/Colors'
import { scale, verticalScale } from "react-native-size-matters";

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

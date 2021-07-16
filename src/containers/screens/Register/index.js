import React, { useState } from 'react'
import { ScrollView , Platform , StyleSheet , KeyboardAvoidingView } from 'react-native'
import { scale, verticalScale } from 'react-native-size-matters'

import { Header } from 'components'
import { REGISTER_FORM_TITLE } from './constants'
import RegisterPageOne from './RegisterPageOne'
import RegisterPageTwo from './RegisterPageTwo'
import RegisterPageThree from './RegisterPageThree'

const Register = (props) => {

    const [page,setPage] = useState(1)
    const onSubmit = (Values) => console.log(Values)
    const goToNextPage = () => setPage( page => page + 1 )
    const goToPrevPage = () => setPage( page => page - 1 )

    return (
        <KeyboardAvoidingView
            behavior="height"
            keyboardVerticalOffset = { Platform.OS === 'ios' ? 40 : 0 }
            style={styles.screen}
        >
            <Header title = {REGISTER_FORM_TITLE} goBack={() => props.navigation.pop()} />

            <ScrollView contentContainerStyle={styles.formContainer}  >
                {page === 1 && <RegisterPageOne nextPage={goToNextPage} />}
                {page === 2 && <RegisterPageTwo nextPage={goToNextPage} prevPage={goToPrevPage} />}
                {page === 3 && <RegisterPageThree onSubmit={onSubmit} prevPage={goToPrevPage} />}
            </ScrollView>
        
        </KeyboardAvoidingView>
    )
}

export default Register

const styles = StyleSheet.create({
    screen : {
        flex : 1
    },
    formContainer : {
        flexGrow: 1, 
        marginHorizontal : scale(25),
        marginTop : verticalScale(-100)
    }
})

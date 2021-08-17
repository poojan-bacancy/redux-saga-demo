import React, { useState } from 'react'
import { reset } from 'redux-form'
import { useDispatch } from 'react-redux'
import { scale, verticalScale } from 'react-native-size-matters'
import { ScrollView , Platform , StyleSheet , KeyboardAvoidingView, SafeAreaView } from 'react-native'

import { Header } from 'components'
import { signupUser } from './action'
import { REGISTER_FORM_TITLE } from './constants'
import RegisterPageOne from './RegisterPageOne'
import RegisterPageTwo from './RegisterPageTwo'
import RegisterPageThree from './RegisterPageThree'

const Register = (props) => {

    const dispatch = useDispatch()

    const [page,setPage] = useState(1)
    const onSubmit = (values) => {
        const payload = {
            email : values.email , password : values.password
        }
        dispatch(signupUser(payload))
    }
    const goToNextPage = () => setPage( page => page + 1 )
    const goToPrevPage = () => setPage( page => page - 1 )
        
    const goBackHandler = () => {
        dispatch(reset('register-form'))
        props.navigation.pop()    
    } 

    return (
        <SafeAreaView style={styles.screen}>
            <KeyboardAvoidingView
                behavior="height"
                keyboardVerticalOffset = { Platform.OS === 'ios' ? 40 : 0 }
                style={styles.screen}
            >
                <Header title = {REGISTER_FORM_TITLE} goBack={goBackHandler} />

                <ScrollView keyboardShouldPersistTaps="handled"  contentContainerStyle={styles.formContainer}  >
                    {page === 1 && <RegisterPageOne nextPage={goToNextPage} />}
                    {page === 2 && <RegisterPageTwo nextPage={goToNextPage} prevPage={goToPrevPage} />}
                    {page === 3 && <RegisterPageThree onSubmit={onSubmit} prevPage={goToPrevPage} />}
                </ScrollView>
            
            </KeyboardAvoidingView>
        </SafeAreaView>
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

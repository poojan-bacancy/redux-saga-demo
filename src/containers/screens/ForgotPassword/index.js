import { reset } from 'redux-form'
import React , { useState } from 'react'
import { useDispatch } from 'react-redux'
import { scale, verticalScale } from 'react-native-size-matters'
import { KeyboardAvoidingView , SafeAreaView, ScrollView, StyleSheet } from 'react-native'

import { Header } from 'components'
import VerifyEmail from './VerifyEmail'
import SetPassword from './SetPassword'
import EnterVerificationCode from './EnterVerificationCode'
import { FORGOT_PASS_FORM_TITLE, SET_PASSWORD_SCREEN_TITlE, VERIFICATION_SCREEN_TITLE } from './constants'


const ForgotPassword = (props) => {

    const [page,setPage] = useState(1)
    const onSubmit = (values) => {}
    const goToNextPage = () => setPage( page => page + 1 )
    const goToPrevPage = () => setPage( page => page - 1 )

    const headerTitle = page === 1 
        ? FORGOT_PASS_FORM_TITLE 
        : page === 2 
        ? VERIFICATION_SCREEN_TITLE 
        : SET_PASSWORD_SCREEN_TITlE

    const dispatch = useDispatch()
        
    const goBackHandler = () => {
        dispatch(reset('forgot-password'))
        props.navigation.pop()    
    } 

    return (
        <SafeAreaView style={styles.screen}>
            <KeyboardAvoidingView
                behavior="height"
                keyboardVerticalOffset = { Platform.OS === 'ios' ? 40 : 0 }
                style={styles.screen}
            >
                <Header title = {headerTitle} goBack={goBackHandler} />

                <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={styles.formContainer}>
                    {page === 1 && <VerifyEmail nextPage={goToNextPage} />}
                    {page === 2 && <EnterVerificationCode nextPage={goToNextPage} prevPage={goToPrevPage} />}
                    {page === 3 && <SetPassword onSubmit={onSubmit} prevPage={goToPrevPage} />}
                </ScrollView>

            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default ForgotPassword

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

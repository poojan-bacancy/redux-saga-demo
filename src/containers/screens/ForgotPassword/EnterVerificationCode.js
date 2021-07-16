import React , {useRef} from 'react'
import { Field, reduxForm } from 'redux-form'
import { StyleSheet, View , Text } from 'react-native'

import Styles from './Styles'
import {VerificationCodeInput} from 'components'
import { ENTER_CODE_DEAIAILS } from './constants'
import { verticalScale } from 'react-native-size-matters'

const EnterVerificationCode = ({handleSubmit,nextPage}) => {

    const pin2Ref = useRef()
    const pin3Ref = useRef()
    const pin4Ref = useRef()

    return (
        <View style={Styles.form}>

            <Text style={Styles.detailText}>{ENTER_CODE_DEAIAILS}</Text>

            <View style={styles.codeInputsContainer}>

                <Field             
                    name="pinOne"
                    component={VerificationCodeInput}
                    onSubmit={() => pin2Ref.current.focus()}
                />
                <Field 
                    name="pinTwo"
                    refField={pin2Ref}
                    component={VerificationCodeInput}    
                    onSubmit={() => pin3Ref.current.focus()}
                />
                <Field 
                    name="pinThree"
                    refField={pin3Ref}
                    component={VerificationCodeInput}
                    onSubmit={() => pin4Ref.current.focus()}
                />
                <Field 
                    name="pinFour"
                    refField={pin4Ref}
                    component={VerificationCodeInput}
                    returnKeyType="done"
                    onSubmit={handleSubmit(nextPage)}
                />                

            </View>
        </View>
    )
}

export default reduxForm({
    form: 'verification-code-form'
})(EnterVerificationCode)

const styles = StyleSheet.create({
    codeInputsContainer : {
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-evenly',
        marginTop : verticalScale(20)
    }
})

import React , {useRef} from 'react'
import { StyleSheet, View , Text } from 'react-native'
import { verticalScale } from 'react-native-size-matters'
import { Field, reduxForm, SubmissionError } from 'redux-form'

import { useOtp } from 'hooks'
import Styles from './Styles'
import Colors from 'utils/Colors'
import { ResenOtpLink , VerificationCodeInput } from 'components'
import { ENTER_CODE_DETAILS, INVALID_OTP , RESEND_OTP_TIME_LIMIT, RESENT_OTP_TEXT } from './constants'

const EnterVerificationCode = ({handleSubmit,nextPage,error}) => {

    const [resendTime,onResend,clearOtp] = useOtp(RESEND_OTP_TIME_LIMIT)

    const inputPinsRef = useRef([])
    inputPinsRef.current = new Array(4)
    const inputPins = Array(4).fill('')
    
    const onSubmit = (values) => {
        const {pin0,pin1,pin2,pin3} = values
        if(pin0 && pin1 && pin2 &&  pin3){ nextPage(); clearOtp()}
        else throw new SubmissionError({ _error : INVALID_OTP })
    }

    const focusNext = (index,value) => {
        if(index < inputPins.length - 1 && value) inputPinsRef.current[index+1].focus()
    }

    const focusPrevious = (event,index) => {
        if(event.nativeEvent.key === "Backspace" && index !== 0) inputPinsRef.current[index-1].focus()
    }


    return (
        <View style={Styles.form}>

            <Text style={Styles.detailText}>{ENTER_CODE_DETAILS}</Text>

            <View style={styles.codeInputsContainer}>

                {inputPins.map((element,index) => 
                    <Field 
                        key={index}
                        name={`pin${index}`}
                        component={VerificationCodeInput}
                        autoFocus={index === 0 ? true : false}
                        onKeyPress={(event) => focusPrevious(event,index)}
                        refField={ ref => inputPinsRef.current[index] = ref }
                        returnKeyType={index === inputPins.length - 1 ? "done" : "next"}
                        focusNextFn={index !== inputPins.length - 1 ? focusNext.bind(this,index) : handleSubmit(onSubmit)}
                    />
                )}

            </View>

            <Text style={styles.error}>{error}</Text>

            {resendTime > 0 
            ? <Text style={styles.resendOtpText}>{RESENT_OTP_TEXT} {resendTime}</Text>
            : <ResenOtpLink onResend={onResend} />
            }

        </View>
    )
}

export default reduxForm({
    form: 'forgot-password'
})(EnterVerificationCode)

const styles = StyleSheet.create({
    codeInputsContainer : {
        flexDirection : 'row',
        alignItems : 'center',
        marginTop : verticalScale(20),
        justifyContent : 'space-evenly',
    },
    error : {
        color : Colors.red,
        textAlign : 'center',
        fontSize : verticalScale(15),
        marginTop : verticalScale(10),
    },
    resendOtpText : {
        textAlign : 'center',
        marginTop : verticalScale(15)
    }
})

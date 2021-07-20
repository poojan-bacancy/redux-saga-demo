import React , {useRef,useState,useEffect} from 'react'
import { StyleSheet, View , Text } from 'react-native'
import { verticalScale } from 'react-native-size-matters'
import { Field, reduxForm, SubmissionError } from 'redux-form'

import Styles from './Styles'
import Colors from 'utils/Colors'
import { ResenOtpLink , VerificationCodeInput } from 'components'
import { ENTER_CODE_DETAILS, INVALID_OTP , RESEND_OTP_TIME_LIMIT, RESENT_OTP_TEXT } from './constants'

const EnterVerificationCode = ({handleSubmit,nextPage,error}) => {

    const [resendButtonDisabledTime, setResendButtonDisabledTime] =  useState(RESEND_OTP_TIME_LIMIT)

    let resendOtpTimerInterval
    const inputPinsRef = useRef([])
    inputPinsRef.current = new Array(4)
    const inputPins = Array(4).fill('')

    const focusNext = (index,value) => {
        if(index < inputPins.length - 1 && value) inputPinsRef.current[index+1].focus()
    }

    const focusPrevious = (event,index) => {
        if(event.nativeEvent.key === "Backspace" && index !== 0) inputPinsRef.current[index-1].focus()
    }

    const onSubmit = (values) => {
        const {pin0,pin1,pin2,pin3} = values
        if(pin0 && pin1 && pin2 &&  pin3) nextPage()
        else throw new SubmissionError({ _error : INVALID_OTP })
    }

    const startResendOtpTimer = () => {
        if(resendOtpTimerInterval) clearInterval(resendOtpTimerInterval)
        
        resendOtpTimerInterval = setInterval(() => {
            if(resendButtonDisabledTime <= 0) clearInterval(resendOtpTimerInterval)
            else setResendButtonDisabledTime(resendButtonDisabledTime - 1)
        }, 1000)
    }

    const onResendOtpButtonPress = () => setResendButtonDisabledTime(RESEND_OTP_TIME_LIMIT)

    useEffect(() => {
        startResendOtpTimer();
    
        return () => {
          if (resendOtpTimerInterval) clearInterval(resendOtpTimerInterval)
        }
      }, [resendButtonDisabledTime])

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
                        focusNextFn={focusNext.bind(this,index)}
                        onKeyPress={(event) => focusPrevious(event,index)}
                        refField={ ref => inputPinsRef.current[index] = ref }
                        returnKeyType={index === inputPins.length - 1 ? "done" : "next"}
                        onSubmitEditing={index === inputPins.length - 1 ? handleSubmit(onSubmit) : null}
                    />
                )}

            </View>

            <Text style={styles.error}>{error}</Text>

            {resendButtonDisabledTime > 0 
            ? <Text style={styles.resendOtpText}>{RESENT_OTP_TEXT} {resendButtonDisabledTime}</Text>
            : <ResenOtpLink onResend={onResendOtpButtonPress} />
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
        justifyContent : 'space-evenly',
        marginTop : verticalScale(20)
    },
    error : {
        color : Colors.red,
        textAlign : 'center',
        marginTop : verticalScale(10),
        fontSize : verticalScale(15)
    },
    resendOtpText : {
        textAlign : 'center',
        marginTop : verticalScale(15)
    }
})

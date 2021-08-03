import  { useState , useEffect } from 'react'

export default ( timeLimit ) => {

    const [resendTime, setResendTime] =  useState(timeLimit)

    let resendOtpTimerInterval

    const startResendOtpTimer = () => {
        if(resendOtpTimerInterval) clearInterval(resendOtpTimerInterval)
        
        resendOtpTimerInterval = setInterval(() => {
            if(resendTime <= 0) clearInterval(resendOtpTimerInterval)
            else setResendTime(resendTime - 1)
        }, 1000)
    }

    const onResend = () => setResendTime(timeLimit)
    const clearOtp = () => clearInterval(resendOtpTimerInterval)

    useEffect(() => {
        startResendOtpTimer();
    
        return () => {
          if (resendOtpTimerInterval) clearInterval(resendOtpTimerInterval)
        }
      }, [resendTime])

      return [resendTime,onResend,clearOtp]

}
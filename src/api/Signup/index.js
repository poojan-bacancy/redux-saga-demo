
const API_KEY = ''  //put you key here

const endpoint = {
    signup : `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`
}

export const userSignup = async (user) => {
    
    const response = await fetch(endpoint.signup,{
        method : 'POST',
        headers : { 
            'Content-Type' : 'application/json' 
        },
        body : JSON.stringify({
            email : user.email,
            password : user.password,
            returnSecureToken : true
        })
    })

    if(!response.ok) throw new Error('Something Went Wrong!!');
    
    const responseData = await response.json()

    return responseData.email
}
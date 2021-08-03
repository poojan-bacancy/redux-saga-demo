
const API_KEY = ''  //put you key here

const endpoint = {
    login : `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`
}

export const userLogin = async (user) => {
    
    const response = await fetch(endpoint.login,{
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
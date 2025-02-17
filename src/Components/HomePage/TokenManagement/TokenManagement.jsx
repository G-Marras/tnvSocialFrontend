
const TokenManagement = () => {

    const TokenUserFromApi = localStorage.getItem("TokenUserFromApi")

    if (TokenUserFromApi===null) {
        console.log('Token is null')
        return false

    }
    else{
        console.log(`Token is ${TokenUserFromApi}`)
        return true
    }
}

export  default TokenManagement
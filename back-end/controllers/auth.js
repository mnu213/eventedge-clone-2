const login = (req,res) =>{
    console.log("INSIDE LOGIN ROUTE")
    res.send('LOGIN ROUTE')
}

const register = (req,res) =>{
    console.log("INSIDE REGISTER ROUTE")
    res.send('REGIESTER ROUTE')
}

export {login, register}
const {users} = require("../data/users.js");

//Funcion para la primer ruta
//get --> /get-users
const getAllUsers = ()=>{
    return users;
}

const login = (username, password)=>{
    var token = "";
    //TODO: VALIDAR USUARIO
    if(getUserByNameAndPwd(username,password)){
        return {token};
    }
    return {message: "Usuario o contraseña incorrectos"};
    
}

const getUserByNameAndPwd = (username, password)=>{
    return users.find(usr=>usr.username === username && usr.password === password);
}

module.exports ={getAllUsers, login}
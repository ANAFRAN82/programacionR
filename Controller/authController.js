const {getAllUsers, login} = require("../Service/authService");

const getUsers = (req, res)=>{
    res.json(getAllUsers());
}

const loginController = (req, res)=>{
    const {username, password} = req.body;
    const respuesta = login(username, password);
    const {token} = respuesta;
    const {message} = respuesta;

    if (token)
        res.json({token});
    res.status(401).json({message});
}

module.exports = {getUsers, loginController}
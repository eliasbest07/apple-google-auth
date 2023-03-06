const { response } = require("express");
const { validarIdToken } = require("../helpers/google-verify");

const googleController = async(req, res = response )=>{
//TODO Obtener el token 
const token = req.body.token;
if(!token){
    return res.json({
            ok : false,
            msg: 'No hay token en la peticion'
    });
}
const googleUser =  await validarIdToken(token);
if(! googleUser){
    return res.status(400).json({
        ok: false
    });
}
//TODO guarda en la base de datos
    res.json({
        ok:true,
        googleUser
    });
}

module.exports = {
    googleController
}
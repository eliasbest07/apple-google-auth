const express = require('express');
const bodyparse= require('body-parser');
require('dotenv').config();

const app = express();
// body parser
app.use(bodyparse.urlencoded({extended:true}));
// RUta
app.use('/', require('./routes/auth'));

app.listen( process.env.PORT || 3000, ()=>{
    const porst= process.env.PORT || 3000;
    console.log(`servidor corriendo en el puerto ${porst}`);
});
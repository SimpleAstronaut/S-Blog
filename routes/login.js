/*
 * S-Blog Login Module
 * v1.1.2
 * SimpleAstronaut 2022-5-31
 */
const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/login', function( req, res, next){
    const username = req.query.username;
    const password = req.query.password;

    fs.readFile('./user.json', 'utf8', (err, data)=>{
        if(err){
            console.log(err);
            return;
        }
        data = eval('('+data+')');
        let ret = '{"status":300,"msg":"NO USERNAME"}';
        for(let i=0; i<data.length; i++){
            if(username === data[i].username){
                if(password === data[i].password){
                    ret = '{"status":200,"msg":"login confirm"}';
                }
                else{
                    ret = '{"statue":300,"msg":"PASSWORD FALSE"}';
                }
            }
        }
        ret = eval('('+ret+')');
        res.send(ret);
    })
})

module.exports = router;
/*
 * S-Blog get blog list module
 * v1.0.0
 * SimpleAstronaut 2022-5-31
 */
const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/blog/getlist', function(req, res, next){
    const mode = req.query.mode;

    //获取全部列表
    if(mode === 'all'){
        fs.readFile('./blog/blog.json', 'utf8', (err, data)=>{
            data = eval('('+data+')');
            res.send(data);
        })
    }

    //获取指定数目列表
    else if(mode === 'num'){
        const num = req.query.num;
        let ret;
        fs.readFile('./blog/blog.json', 'utf8', (err, data)=>{
            data = JSON.parse(data);
            if( num > data.length || num < 0) {
                ret = '{"status":300,"msg":"OUT OF NUMBER"}';
                ret = eval('(' + ret + ')');
                res.send(ret);
            }
            else{
                ret = '[]';
                ret = JSON.parse(ret);
                for(let i=0; i<=num-1; i++){
                    ret.push(data[i]);
                    //console.log(data);
                }
                //ret = eval('('+ret+')');
                res.send(ret);
            }
        })
    }
})

//获取文章列表
router.get('/pages/getlist', function(req,res){
    fs.readFile('./pages/pages.json', 'utf8', (err, data)=>{
        res.send(data);
    })
})

module.exports = router;
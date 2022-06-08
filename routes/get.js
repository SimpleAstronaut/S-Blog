/*
 * S-Blog get blog module
 * v1.0.0
 * SimpleAstronaut 2022-6-1
 */
const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/blog/get', function(req, res){

    //获取请求blog Name
    const blogName = decodeURI(req.query.blogname);
    console.log(blogName);
    fs.readFile('./blog/blog.json', 'utf8', (err, data)=>{
        if(err){
            console.log(err);
            return;
        }
        data = JSON.parse(data);
        let ret = '{"status":300,"msg":"NO BLOG"}';
        for (let i = 0; i<data.length; i++){
            //console.log(blogName+'-'+data[i].blogtitle);
            if(blogName === data[i].blogtitle){
                try{
                    ret = fs.readFileSync('./blog/'+blogName+'.json', 'utf8')
                    ret = JSON.stringify(ret);
                } catch (err){
                    console.error(err);
                }
            }
        }
        //console.log('2');
        //console.log(ret);
        ret = eval('('+ret+')');
        res.send(ret);
    })
})

//获取页面接口
router.get('/pages/get', function(req, res){
    const pageName = req.query.page;
    fs.readFile('./pages/pages.json', 'utf8', (err, data)=>{
        if(err){
            console.log(err);
            return;
        }
        data = JSON.parse(data);

        //生成返回信息
        let ret = { status : 300, msg : "NO PAGES" };
        for(let i=0; i<data.length; i++){
            if(pageName === data[i].pageName){
                try {
                    ret = fs.readFileSync('./pages/'+pageName+'.json', 'utf8');
                    console.log(ret);
                    //ret = JSON.stringify(ret);
                } catch (err){
                    console.error(err);
                }
            }
        }

        //ret = eval('('+ret+')');
        res.send(ret);
    })
})

module.exports = router;
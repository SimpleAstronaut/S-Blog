/*
 * S-Blog upload blog module
 * v1.0.0
 * SimpleAstronaut 2022-5-31
 */
const express = require('express');
const router = express.Router();
const fs = require('fs');
const bodyParser = require('body-parser');
const moment = require('moment');
const axios = require('axios');

router.use(bodyParser.urlencoded({ extended: false }))

router.post('/blog/upload', function(req, res, next){
    //获取用户名密码
    const username = req.body.username;
    const password = req.body.password;

    //鉴权
    axios.get('http://127.0.0.1:9000/login?username='+username+'&password='+password).then(response =>{
        const status = response.data.status;
        if(status === 200){

            //获取请求信息
            const blogtitle = req.body.blogtitle;
            const blog = req.body.blog;
            const time = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');

            //获取博客目录
            fs.readFile('./blog/blog.json', 'utf8', (err, data)=>{
                data = eval('('+data+')');
                let newBlog = '{"blogtitle":"'+blogtitle+'","auther":"'+username+'","time":"'+time+'"}'
                newBlog = eval('('+newBlog+')');
                data.unshift(newBlog);
                //console.log(data);
                data = JSON.stringify(data, null, "\t");
                //data = JSON.stringify(data);
                //res.send(data);

                //写入博客目录
                fs.writeFile('./blog/blog.json', data, err=>{
                    if(err){
                        console.log(err);
                    }

                    //写入博客文章
                    const blogFile = '{"title":"'+blogtitle+'","auther":"'+username+'","time":"'+time+'","blog":"'+blog+'"}';
                    fs.writeFile('./blog/'+blogtitle+'.json', blogFile, err=>{
                        if(err){
                            console.log(err);
                        }
                        res.send(newBlog);
                    })
                })
            })
        }
        else{
            let ret = '{"status":300,"msg":"LOGIN FALSE"}';
            ret = eval('('+ret+')');
            res.send(ret);
        }
    })
})

module.exports = router;
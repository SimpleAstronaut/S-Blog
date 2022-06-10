# S-Blog API文档

## 响应体结构

```json
{ "status":200, "msg":"test" }
```

S-Blog后端返回的相应体均为json格式，响应体分为两部分：

- 状态码
  
- 消息
  

### 状态码信息

状态码返回请求或操作的状态信息，状态码对应表如下：

| 状态码 | 状态信息 |
| --- | --- |
| 200 | 请求正常 |
| 201 | 操作正常 |
| 300 | 请求错误，包括非法请求或越权请求 |
| 301 | 操作错误，包含非法操作和越权操作 |

### 消息体

消息体是客户端请求接口后返回的信息，如果请求错误或执行错误，消息体会包含错误代码。

## 用户相关

### 登录接口

该接口通过校验客户端上传的username和password鉴定用户权限

请求方式：`GET`

请求地址

```url
http://127.0.0.1:9000/login
```

请求参数：

| key | value |
| --- | --- |
| username | 用户名信息 |
| password | 用户名对应密码 |

返回JSON参数：

| 参数  | 含义  |
| --- | --- |
| status | 状态码，详见状态码章节 |
| msg | 状态信息 |

请求示例：

```url
http://127.0.0.1:9000/login?username=test&password=test
```

返回示例：

```json
{"status":200,"msg":"LOGIN CONFIRM"}
```

## 文章相关

### 获取文章列表

客户端调用该接口获取文章列表

请求方式：`GET`

请求地址

```url
http://127.0.0.1:9000/blog/getlist
```

请求参数

| key | value |
| --- | --- |
| mode | 请求模式，包含两个模式：all 和 num |
| num | 当请求模式为num时请求文章数量 |

返回JSON参数

| 参数  | 含义  |
| --- | --- |
| status | 请求错误时返回的状态码信息 |

*本接口返回数据较复杂，详见请求示例*

请求示例：

1.请求Mode为all时

```url
http://127.0.0.1:9000/blog/getlist?mode=all
```

2.请求mode为num时

```url
http://127.0.0.1:9000/blog/getlist?mode=num&num=2
```

返回示例：

1.返回all请求：

```json
[
{
"blogtitle": "md测试",
"auther": "test",
"time": "2022-06-09 16:27:37",
"bloginfo": "md测试"
},
{
"blogtitle": "测试",
"auther": "test",
"time": "2022-06-09 16:13:27",
"bloginfo": "markdown测试"
},
{
"blogtitle": "鸡汤来喽",
"auther": "test",
"time": "2022-06-09 16:09:10",
"bloginfo": "undefined"
},
{
"blogtitle": "testinfo",
"auther": "test",
"time": "2022-06-07 15:48:59",
"bloginfo": "啊哈哈哈哈哈哈哈，鸡汤来喽!"
},
{
"blogtitle": "演示",
"auther": "test",
"bloginfo": "演示文章啊啊啊啊",
"time": "2022-06-02 14:48:57"
},
{
"blogtitle": "双料高级特工",
"auther": "test",
"bloginfo": "高级特工啊啊啊啊",
"time": "2022-05-31 16:49:40"
},
{
"blogtitle": "test",
"auther": "test",
"bloginfo": "test啊啊啊啊啊",
"time": "2022-05-31 16:49:01"
}
]
```

2.返回num请求，返回数量取决于请求参数num

```json
[
    {
        "blogtitle": "md测试",
        "auther": "test",
        "time": "2022-06-09 16:27:37",
        "bloginfo": "md测试"
    },
    {
        "blogtitle": "测试",
        "auther": "test",
        "time": "2022-06-09 16:13:27",
        "bloginfo": "markdown测试"
    }
]
```

### 获取文章

该接口通过客户端请求特定文章

请求方式：`get`

请求地址：

```url
http://127.0.0.1:9000/blog/get
```

请求参数

| key | value |
| --- | --- |
| blogname | 获取的博客名称 |

返回JSON参数

| 参数  | 含义  |
| --- | --- |
| status | 状态码信息 |
| msg | 请求错误时返回的错误码信息 |

请求正确时将返回文章如下参数：

| 参数  | 含义  |
| --- | --- |
| title | 标题  |
| auther | 作者  |
| time | 上传时间 |
| blog | 文章内容 |

请求示例：

```url
http://127.0.0.1:9000/blog/get?blogname=test
```

返回示例：

```json
{
    "title": "test",
    "auther": "test",
    "time": "2022-05-31 16:49:01",
    "blog": "test"
}
```

当请求错误时：

```json
{
    "status": 300,
    "msg": "NO BLOG"
}
```

### 上传文章

该接口接收客户端上传文章

请求方式：`POST`

请求地址：

```url
http://127.0.0.1:9000/blog/upload
```

请求参数：

（参数在请求体中）

| key | value |
| --- | --- |
| username | 用户名信息 |
| password | 用户名对应密码 |
| blogtitle | 文章标题 |
| bloginfo | 文章简介 |
| blog | 文章内容 |

返回json参数

| 参数  | 含义  |
| --- | --- |
| blogtitle | 文章标题 |
| auther | 作者  |
| time | 时间  |
| bloginfo | 文章简介 |

返回示例：

```json
{
    "blogtitle": "api文档测试",
    "auther": "test",
    "time": "2022-06-10 08:41:24",
    "bloginfo": "这个文章用来测试api文档"
}
```

## 页面相关

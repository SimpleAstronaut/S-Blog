# S-Blog Project

[在线demo](https://service-p0ur5tid-1304083067.bj.apigw.tencentcs.com/release/)

## 介绍
一个由node.js express框架开发的轻量化高自由度博客系统。
## 特点
* 高自由度  
前后端分离，支持自定义前端开发，用户可根据后端接口自行开发属于自己的博客页面
* 轻量化  
基于node.js express框架，且运行流畅，响应迅速
* 主题开发简单  
只需要按照说明文档准备三个html并嵌入我们准备的js代码即可开发一款主题
## 用法
S-Blog基于node.js v16.15.0版本，其他版本可能会出现兼容性问题

### 安装
1.克隆仓库到本地
```bash
git clone https://github.com/SimpleAstronaut/S-Blog.git
```
中国大陆地区由于网络问题可以使用gitee仓库
```bash
git clone https://gitee.com/liu-chenhe/S-Blog.git
```  
2.安装依赖
```bash
cd S-Blog
npm install
```
3.启动项目
```bash
npm start
```

### 二次开发
我们支持您对S-Blog进行二次开发，为此我们准备了api文档和开发文档  

[api文档](api.md)

### 主题开发
主题开发详见开发文档，这里只展示简单的主题开发功能

每个主题需要包阔但不限于3个html页面，分别命名为`index.html``page.html`和`404.html`  


为尽可能简化主题开发的脚本部分，以帮助开发者集中精力在界面设计上，我们提供了可移植的既开发js脚本，您需要在您的html文档中嵌入js代码   

首页html：
```html
<script src="./js/main.js"></script>
```  
page html：
```html
<script src="./js/page.js"></script>
```  

为了配合js脚本的运行，html页面中需要创建相应标签满足js渲染组件  

index.html中需要添加id为`blog`的标签，示例：
```html
<div id="blog">
  <!-- js脚本将在此处渲染前端组件 -->
</div>
```

page.html需要添加id为`page`的标签，示例：
```html
<div id="page">
  <!-- js脚本将在此处渲染前端组件 -->
</div>
```

## 项目技术栈
后端：node.js express框架

前端（默认主题）：bootstrap JQuery

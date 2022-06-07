/*
 * S-Blog main html script
 * SimpleAstronaut
 * 2022-6-7
 */
window.onload = function(){
    //console.log(1);
    $.get("http://127.0.0.1:9000/blog/getlist", { mode : 'all' }, function(data, status){
        const length = data.length;
        console.log(data);
        //let bloglist = document.createElement('DIV');
        for(let i=0; i<length; i++){
            let blog = document.createElement('DIV');
            blog.className = 'card';

            let blogbody = document.createElement('DIV');
            blogbody.className = 'card-body';

            let blogtitle = document.createElement('H5');
            blogtitle.className = 'card-title';
            blogtitle.textContent = data[i].blogtitle;

            let blogtext = document.createElement('P');
            blogtext.className = 'card-text';
            blogtext.textContent = '测试'

            let blogbutton = document.createElement('A');
            blogbutton.className = 'btn btn-primary';
            blogbutton.href = 'http://127.0.0.1:9000/blog?blog='+data[i].blogtitle;
            blogbutton.textContent = '阅读更多'

            blogbody.appendChild(blogtitle);
            blogbody.appendChild(blogtitle);
            blogbody.appendChild(blogtext);
            blogbody.appendChild(blogbutton);
            blog.appendChild(blogbody);

            //空格
            let fillline = document.createElement('BR');

            document.getElementById('blog').appendChild(blog);
            document.getElementById('blog').appendChild(fillline);
        }
    })
}
//paraName 等找参数的名称
function GetUrlParam(paraName) {
    let url = document.location.toString();
    let arrObj = url.split("?");

    if (arrObj.length > 1) {
        let arrPara = arrObj[1].split("&");
        let arr;

        for (let i = 0; i < arrPara.length; i++) {
            arr = arrPara[i].split("=");

            if (arr != null && arr[0] === paraName) {
                return arr[1];
            }
        }
        return "";
    }
    else {
        return "";
    }
}

const getBlog = GetUrlParam("blog");
const getpage = GetUrlParam("page");

window.onload = function(){
    if(getBlog !== ''){
        console.log('blog name = '+getBlog);
        document.getElementById('pagetitle').innerText = decodeURIComponent(getBlog);
            $.get('http://127.0.0.1:9000/blog/get', { blogname : getBlog }, function(data, status){
            let newblog = document.createElement('P');
            //console.log(data);
            data = JSON.parse(data);
            newblog.textContent = JSON.stringify(data.blog);

            document.getElementById('page').appendChild(newblog);
        })
    } else if(getpage !== ''){
        console.log('page name = '+getpage);
        document.getElementById('pagetitle').innerText = decodeURIComponent(getpage);
            $.get('http://127.0.0.1:9000/pages/get', { page : getpage }, function(data, status){
            let newpage = document.createElement('P');
            //console.log(data);
            data = JSON.parse(data);
            newpage.textContent = JSON.stringify(data.page);

            document.getElementById('page').appendChild(newpage);
        })
    }
}
document.write("<script language='javascript' src='//cdn.jsdelivr.net/npm/docsify-sidebar-collapse/dist/docsify-sidebar-collapse.min.js'></script>");

//滚动监听箭头样式
window.onscroll = function () {
    var files = document.getElementsByClassName("file")
    var filesLength = files.length

    for (var i = 0;i<filesLength;i++){
        let next = files[i].nextElementSibling
        if(next != null){
            if(next.className == 'app-sub-sidebar'){
                if(files[i].className.indexOf("active") != -1){
                    files[i].setAttribute('isunfold','  \ue635 ')
                    files[i].style.color="#42b983"
                }else{
                    files[i].setAttribute('isunfold','  \ue637 ')
                    files[i].style.color="#333333"
                }
            }else{

            }
        }
    }
}

//插入箭头样式
var nod = document.createElement("style")
str = "@font-face {\
    font-family: 'iconfont'; /* Project id 4084645 */\
    src: url('//at.alicdn.com/t/c/font_4084645_2sy2lx021sv.woff2?t=1684978602354') format('woff2'),\
        url('//at.alicdn.com/t/c/font_4084645_2sy2lx021sv.woff?t=1684978602354') format('woff'),\
        url('//at.alicdn.com/t/c/font_4084645_2sy2lx021sv.ttf?t=1684978602354') format('truetype');\
    }\
\
    .iconfont {\
        font-family: 'iconfont' !important;\
        font-size: 16px;\
        font-style: normal;\
        -webkit-font-smoothing: antialiased;\
        -moz-osx-font-smoothing: grayscale;\
    }\
\
    .icon-xiazhankai:before {\
      content: ' \e635';\
    }\
\
    .icon-youzhankai:before {\
      content: ' \e637';\
    }\
\
    .icon-sousuoxiao:before {\
      content: ' \e8d6';\
    }\
\
    .sidebar .search .input-wrap input{\
      font-family: 'iconfont'; /* Project id 4084645 */\
      width: 200px;\
      border: 1px solid #42b983;\
    }\
\
    .sidebar .sidebar-nav .file a:hover{\
      text-decoration:none;\
      color:#42b983\
    }\
\
    .app-sub-sidebar .file:before{\
      font-family: 'iconfont';\
      content: attr(isunfold);\
    }\
    /* 第一层目录箭头 收起*/\
    .sidebar > .sidebar-nav > ul > .file > .app-sub-sidebar > .file:before{\
      font-family: 'iconfont';\
      content: ' \e637 '';\
      font-size: 18px;\
    }\
    /* 第一层目录箭头 展开*/\
    .sidebar > .sidebar-nav > ul > .file > .app-sub-sidebar > .active:before{\
      font-family: 'iconfont';\
      content: ' \e635 ';\
      font-size: 18px;\
      color: #42b983;\
    }\
"
nod.type="text/css";
if(nod.styleSheet){         //ie下
    nod.styleSheet.cssText = str;
} else {
    nod.innerHTML = str;       //或者写成 nod.appendChild(document.createTextNode(str))
}
document.getElementsByTagName("head")[0].appendChild(nod);
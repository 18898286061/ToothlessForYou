!function() {
    function writeCode(prefix, code, fn) {
        let container = document.querySelector('#code-wrapper')
        let styleTag = document.querySelector('#styleTag')
        let n = 0
        let id = setInterval(()=>{
            n = n + 9
            container.innerHTML = Prism.highlight(code.substring(0, n), Prism.languages.css);
            styleTag.innerHTML = code.substring(0, n)

            container.scrollTop = container.scrollHeight
            if(n >= code.length) {
                window.clearInterval(id)
                fn && fn.call()
            }
        }, 1)
        
    }
    let code = `
.pull-left{float:left}

.pull-right{float:right}

.clearfix:after,.clearfix:before{content:'';display:table}

.clearfix:after{clear:both;display:block}

.toothless .head:before,
.toothless .head-wrap:after,
.toothless .head-wrap .ears:before,
.toothless .head-wrap .ears:after,
.toothless .head-wrap .ears .spot-dtl:before,
.toothless .head-wrap .ears .spot-dtl:after,
.toothless .head-wrap .ears .ears-main:before,
.toothless .head-wrap .ears .ears-main:after,
.toothless .head-wrap .ears .ears-dtl-1:before,
.toothless .head-wrap .ears .ears-dtl-1:after,
.toothless .head-wrap .ears .ears-dtl-2:before,
.toothless .head-wrap .ears .ears-dtl-2:after,
.toothless .head-wrap .head .spots:before,
.toothless .head-wrap .head .spots:after,
.toothless .head-wrap .head .spots .spot-dtl:before,
.toothless .head-wrap .head .spots .spot-dtl:after,
.toothless .head-wrap .eyes .eye .eye-dtl:before,
.toothless .head-wrap .eyes .eye .eye-dtl:after,
.toothless .head-wrap .nose:before,
.toothless .head-wrap .nose:after,
.toothless .head-wrap .nose .spots:before,
.toothless .head-wrap .nose .spots:after{
    content:'';
    position:absolute;
}

.background{
    /* top:0;
    left:0;
    right:0;
    bottom:0; */
    padding:80px 32px;
    /* position:absolute; */
    /* background:linear-gradient(#77b96f,#419d6c); */
}

.toothless{
    transform:rotate(-5deg) scale(.8);
}

.toothless .head-wrap{
    width:400px;
    height:290px;
    position:relative;
}

.toothless .head-wrap:after{
    top:50px;
    z-index:1;
    width:inherit;
    height:inherit;
    border-radius:50%;
    background:#1b1c20;
}

.toothless .head-wrap .spots,
.toothless .head-wrap .ears .spot-dtl{
    position:absolute;
}

.toothless .head-wrap .ears,
.toothless .head-wrap .ears .ears-main,
.toothless .head-wrap .ears .ears-dtl-1,
.toothless .head-wrap .ears .ears-dtl-2{
    width:inherit;
    height:inherit;
    position:absolute;
}

.toothless .head-wrap .ears:before,
.toothless .head-wrap .ears:after,
.toothless .head-wrap .ears .ears-main:before,
.toothless .head-wrap .ears .ears-main:after,
.toothless .head-wrap .ears .ears-dtl-1:before,
.toothless .head-wrap .ears .ears-dtl-1:after,
.toothless .head-wrap .ears .ears-dtl-2:before,
.toothless .head-wrap .ears .ears-dtl-2:after{
    background:linear-gradient(#2f3035,#1b1c20);
}

.toothless .head-wrap .ears:before,
.toothless .head-wrap .ears:after{
    top:-35px;
    width:40px;
    height:90px;
}

.toothless .head-wrap .ears:before{
    left:140px;
    border-radius:100% 30px 0 0 / 90px;
    transform:rotate(-16deg);
}

.toothless .head-wrap .ears:after{
    right:140px;
    border-radius:30px 100% 0 0 / 90px;
    transform:rotate(16deg);
}

.toothless .head-wrap .ears .spot-dtl{
    z-index:1;
    border-radius:50%;
    background:#181c1b;
}

.toothless .head-wrap .ears .spot-dtl:before,
.toothless .head-wrap .ears .spot-dtl:after{
    background:inherit;
    border-radius:inherit;
}

.toothless .head-wrap .ears .ears-main:before,
.toothless .head-wrap .ears .ears-main:after{
    width:150px;
    height:280px;
    bottom:150px;
}

.toothless .head-wrap .ears .ears-main:before{
    left:-22px;
    border-radius:100% 40px 0 0 / 175px;
    transform:rotate(-25deg);
}

.toothless .head-wrap .ears .ears-main:after{
    right:-22px;
    border-radius:40px 100% 0 0 / 175px;
    transform:rotate(25deg);
}

.toothless .head-wrap .ears .ears-dtl-1:before,
.toothless .head-wrap .ears .ears-dtl-1:after{
    width:85px;
    height:150px;
    bottom:115px;
}

.toothless .head-wrap .ears .ears-dtl-1:before{
    left:-55px;
    border-radius:100% 40px 0 0 / 115px;
    transform:rotate(-55deg);
}

.toothless .head-wrap .ears .ears-dtl-1:after{
    right:-55px;
    border-radius:40px 100% 0 0 / 115px;
    transform:rotate(55deg);
}

.toothless .head-wrap .ears .ears-dtl-2:before,
.toothless .head-wrap .ears .ears-dtl-2:after{
    width:85px;
    height:150px;
    bottom:25px;
}

.toothless .head-wrap .ears .ears-dtl-2:before{
    left:-55px;
    border-radius:100% 40px 0 0 / 115px;
    transform:rotate(-75deg);
}

.toothless .head-wrap .ears .ears-dtl-2:after{
    right:-55px;
    border-radius:40px 100% 0 0 / 115px;
    transform:rotate(75deg);
}

.toothless .head-wrap .ears .ears-dtl-1 .spot-dtl.left{
    width:15px;
    left:-25px;
    height:10px;
    bottom:200px;
    background:#393c43;
}

.toothless .head-wrap .ears .ears-dtl-1 .spot-dtl.left:before{
    width:6px;
    height:6px;
    left:-15px;
}

.toothless .head-wrap .ears .ears-dtl-1 .spot-dtl.left:after{
    top:15px;
    left:20px;
    width:12px;
    height:10px;
}

.toothless .head-wrap .ears .ears-dtl-1 .spot-dtl.right{
    width:15px;
    right:-20px;
    height:15px;
    bottom:190px;
}

.toothless .head-wrap .ears .ears-dtl-1 .spot-dtl.right:after{
    right:0;
    width:8px;
    bottom:22px;
    height:10px;
}

.toothless .head-wrap .ears .ears-main .spot-dtl.left .spot-dtl.top{
    left:50px;
    width:15px;
    top:-100px;
    height:15px;
    background:#393c43;
}

.toothless .head-wrap .ears .ears-main .spot-dtl.left .spot-dtl.top:before{
    top:-5px;
    left:-15px;
    width:6px;
    height:6px;
}

.toothless .head-wrap .ears .ears-main .spot-dtl.left .spot-dtl.top:after{
    top:30px;
    left:-15px;
    width:8px;
    height:8px;
}

.toothless .head-wrap .ears .ears-main .spot-dtl.left .spot-dtl.bottom{
    left:75px;
    width:20px;
    bottom:5px;
    height:20px;
}

.toothless .head-wrap .ears .ears-main .spot-dtl.left .spot-dtl.bottom:before{
    top:-20px;
    width:10px;
    height:10px;
    box-shadow:-20px 15px 0 #181c1b, -60px 75px 0;
}

.toothless .head-wrap .ears .ears-main .spot-dtl.left .spot-dtl.bottom:after{
    width:15px;
    left:-15px;
    height:10px;
    bottom:-15px;
}

.toothless .head-wrap .ears .ears-main .spot-dtl.right{
    right:100px;
}

.toothless .head-wrap .ears .ears-main .spot-dtl.right .spot-dtl.top{
    width:8px;
    height:8px;
    right:-40px;
    bottom:90px;
    background:#393c43;
}

.toothless .head-wrap .ears .ears-main .spot-dtl.right .spot-dtl.top:after{
    top:-5px;
    left:15px;
    width:5px;
    height:5px;
}

.toothless .head-wrap .ears .ears-main .spot-dtl.right .spot-dtl.bottom{
    bottom:0;
    width:25px;
    height:25px;
}

.toothless .head-wrap .ears .ears-main .spot-dtl.right .spot-dtl.bottom:before{
    left:0;
    top:-25px;
    width:12px;
    height:12px;
}

.toothless .head-wrap .ears .ears-main .spot-dtl.right .spot-dtl.bottom:after{
    left:40px;
    top:-25px;
    width:12px;
    height:12px;
    box-shadow:-5px 25px 0 #181c1b;
}

.toothless .head-wrap .head{
    z-index:2;
    width:inherit;
    height:inherit;
    position:relative;
    border-radius:290px 290px 50% 50%;
    background:radial-gradient(#393c43, #1a1b1e);
    background-repeat:no-repeat;
    background-size:400px 400px;
    box-shadow:0 -15px 20px rgba(0,0,0,.3);
}

.toothless .head-wrap .head:before{
    left:50%;
    width:300px;
    bottom:20px;
    height:100px;
    margin-left:-150px;
    border-radius:50%;
    border-bottom:5px solid #1b1c20;
}

.toothless .head-wrap .head .spots{
    top:-10px;
    left:50%;
    width:130px;
    height:80px;
    margin-left:-80px;
}

.toothless .head-wrap .head .spots:before,
.toothless .head-wrap .head .spots:after{
    width:8px;
    height:5px;
    border-radius:50%;
    background:#181c1b;
}

.toothless .head-wrap .head .spots:before{top:30px;right:30px}
.toothless .head-wrap .head .spots:after{bottom:0;right:0}
.toothless .head .spots .spot-dtl{
    top:40px;
    left:15px;
    width:40px;
    height:20px;
    border-radius:50%;
    background:#181c1b;
    position:absolute;
}

.toothless .head-wrap .head .spots .spot-dtl.scale{
    top:50px;
    left:80px;
    transform:scale(.6);
}

.toothless .head-wrap .head .spots .spot-dtl:before,
.toothless .head-wrap .head .spots .spot-dtl:after{
    background:inherit;
    border-radius:inherit;
}

.toothless .head-wrap .head .spots .spot-dtl:before{
    width:20px;
    height:10px;
    top:-20px;
    left:40px;
}
.toothless .head-wrap .head .spots .spot-dtl:after{
    top:40px;
    left:10px;
    width:15px;
    height:8px;
}

.toothless .head-wrap .eyes{
    top:0;
    width:inherit;
    height:inherit;
    position:absolute;
}

.toothless .head-wrap .eyes .eye{
    top:100px;
    z-index:2;
    width:120px;
    height:110px;
    overflow:hidden;
    position:absolute;
    background:#849a6b;
    background:radial-gradient(#e3e5d0, #789463);
}

.toothless .head-wrap .eyes .eye:before{
    z-index:1;
    content:'';
    width:inherit;
    height:inherit;
    position:absolute;
    background:radial-gradient(#393c43, #1a1b1e);
    animation:eye-blink 2s linear infinite;
}

@keyframes eye-blink{
    0%,80%,100%{transform:translateY(-100%)}
    81%,95%{transform:translateY(0)}
}

.toothless .head-wrap .eyes .eye.left{
    left:50px;
    border-radius:75px 130px 75px 120px;
    box-shadow:8px 5px 0 #181c1b inset, 5px 12px 0 #5e7851 inset;
}

.toothless .head-wrap .eyes .eye.right{
    right:50px;
    border-radius:130px 75px 120px 75px;
    box-shadow:-8px 5px 0 #181c1b inset, -12px 12px 0 #5e7851 inset;
}

.toothless .head-wrap .eyes .eye .eye-dtl{
    width:60px;
    height:85px;
    border-radius:50%;
    background:#191b1a;
    position:absolute;
}

.toothless .head-wrap .eyes .eye.right .eye-dtl{left:10px}
.toothless .head-wrap .eyes .eye .eye-dtl:before{
    top:15px;
    left:-15px;
    width:50px;
    height:50px;
    border-radius:inherit;
    background:rgba(255,255,255,.3);
}

.toothless .head-wrap .eyes .eye .eye-dtl:after{
    top:20px;
    left:10px;
    width:20px;
    height:20px;
    background:#fff;
    border-radius:inherit;
}

.toothless .head-wrap .eyes .eye.left .eye-dtl{
    right:5px;
}

.toothless .head-wrap .nose{
    left:50%;
    z-index:2;
    width:55px;
    bottom:40px;
    height:25px;
    position:absolute;
    margin-left:-25px;
}

.toothless .head-wrap .nose:before,
.toothless .head-wrap .nose:after{
    width:15px;
    height:5px;
    background:#1b1c20;
    border-radius:5px 5px 0 0;
}

.toothless .head-wrap .nose:before{
    left:0;
    transform:rotate(30deg);
}

.toothless .head-wrap .nose:after{
    right:0;
    transform:rotate(-30deg);
}

.toothless .head-wrap .nose .spots{
    top:-45px;
    left:15px;
    width:15px;
    height:10px;
    background:#4e555b;
    position:absolute;
    border-radius:50%;
}

.toothless .head-wrap .nose .spots:before,
.toothless .head-wrap .nose .spots:after{
    background:inherit;
    border-radius:inherit;
}

.toothless .head-wrap .nose .spots:before{
    top:20px;
    width:5px;
    height:5px;
}

.toothless .head-wrap .nose .spots:after{
    top:15px;
    left:15px;
    width:10px;
    height:10px;
}

.toothless .neck{
    width:400px;
    height:200px;
    bottom:90px;
    position:relative;
    transform:skewY(5deg);
    border-radius:20px 20px 0 0;
    background:linear-gradient(to right, #1a1b1e , #393c43, #393c43, #1a1b1e);
    -webkit-box-reflect:below -10px -webkit-linear-gradient(bottom, rgba(255,255,255,1) 10%, transparent 40%, transparent 100%);
}

.toothless-wrap .text{
    left:60px;
    bottom:130px;
    color:#ef402b;
    font-size:50px;
    position:relative;
    font-family:monospace;
    text-transform:uppercase;
    -webkit-text-stroke:2px #ae1e13;
    text-shadow:0px 5px 2px #181c1b;
}

.author{
    bottom:40px;
    color:#181c1b;
    font-size:18px;
    position:fixed;
    text-decoration:none;
    transition:all .4s ease-in-out 0s;
}

.background .author:hover{
    color:#fff;
}`

    writeCode('', code)
}.call()
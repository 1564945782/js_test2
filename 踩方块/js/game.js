function Game() {
    this.contain1 = document.querySelector(".contain1");
    this.hidden = document.querySelector(".hidden");
    this.canvas = document.querySelector(".canvas");

    this.start = document.querySelector(".start");
    this.stop = document.querySelector(".stop");
    this.score1 = document.querySelector(".score1");
    this.quiet1 = document.querySelector(".quiet1");
    this.gameover = document.querySelector(".gameover");
    //背景音乐
    this.audio1 = document.querySelector(".audio1");
    this.point = document.querySelector(".point");
    this.p1 = document.querySelector("p");
    this.color1 = ['#ff8080', '#ffa380', '#ff00e038', '#ff005269', '#fbc0ff'];
    this.x = 0;
    this.y = 0;
    this.num = 0;
    this.set1;
    this.quiet2 = 1;
    this.score2 = 0;
    this.distance=5;
    this.time=50;
}

//背景音乐播放是否静音
Game.prototype.mutedmusic1=function(){
    let This=this;
    This.quiet1.onclick=function(){
        //console.log(999);
        if (This.quiet2 == 1) {
            This.audio1.muted = true;
            This.quiet2 = 0;
            This.quiet1.style.backgroundImage="url("+"./img/muted4.jpg"+")";
            
        }
        else {
            This.audio1.muted = false;
            This.quiet2 = 1;
            This.quiet1.style.backgroundImage="url("+"./img/muted3.jpg"+")";
        }
    }
    
}
//点击开始游戏
Game.prototype.startdrop=function(){
    let This=this;
    This.start.onclick=function(){
    
    clearTimeout(This.set1);
    This.time=50;
    This.score2 = 0;
    This.score1.innerHTML = "得分:" + This.score2;
   
    This.audio1.play();
    This.start.style.display = "none";
    This.stop.style.display = "block";
    This.gameover.style.display = "none";
    This.p1.style.display = "none";
    //清除所有方块
    This.hidden.innerHTML = '';
    let add2 = document.createElement("canvas");
    add2.classList = "canvas";
    add2.style.position = "absolute";
    add2.style.backgroundColor = "pink";
    add2.width = "320"
    add2.height = "480"
    This.hidden.appendChild(add2);
    let canvas = document.querySelector(".canvas");
    let context = canvas.getContext("2d");
    //开始画一个网格
    context.beginPath();
    //设置是个顶点的坐标，根据顶点制定路径   
    context.strokeStyle = "#f2edee";
    for (var i = 0; i < 3; i++) {
        context.moveTo(0, 120 * (i + 1));
        context.lineTo(320, 120 * (i + 1));
        context.moveTo(80 * (i + 1), 0);
        context.lineTo(80 * (i + 1), 480);
        context.stroke();
    }
    //随机每行开始生成 一个盒子
    for (var i = -2; i < 4; i++) {
        let index = Math.floor(Math.random() * 4);
        let add1 = document.createElement("div");
        add1.classList = "keys";
        add1.style.backgroundColor = This.color1[index];
        add1.style.left = 80 * index + "px";
        add1.style.top = 120 * i + "px";
        if (i == 3) {
            add1.style.backgroundColor = "rgb(227, 215, 219)";
        }
        This.hidden.appendChild(add1);
    }

//div向下移动
function run() {
    // time-=10;
    
     let canvas = document.querySelector(".canvas");
     let context = canvas.getContext("2d");
     let keys = document.querySelectorAll(".keys");
     for (var i = 0; i < 6; i++) {
         //向下+5像素
         keys[i].style.top = keys[i].offsetTop + This.distance + 'px';
         //判断盒子个数
         for (let j = 0; j < keys.length; j++) {
             keys[j].onclick = function () {
                This.time-=0.5;
                 //distance+=0.06;
                 This.point.play();
                 keys[j].style.backgroundColor = "rgb(227, 215, 219)";
                 This.score2 += 10;
                 This.score1.innerHTML = "得分:" + This.score2;
             }
         }
         if (keys[i].offsetTop > 360) {
             //console.log(keys[i].style.backgroundColor);
             if (keys[i].style.backgroundColor != "rgb(227, 215, 219)") {
                This.audio1.pause();
                 clearInterval(This.set1);
                 This.start.style.display = "block";
                 This.stop.style.display = "none";
                 This.gameover.style.display = "block";
                 This.gameover.innerHTML = "得分：" + This.score2;
                 //score2 = 0;
                 This.score1.innerHTML = "得分:" + This.score2;
             }
             if (keys[i].offsetTop > 600) {
                 let index1 = Math.floor(Math.random() * 4);
                 //console.log(index1);
                 let add1 = document.createElement("div");
                 add1.classList = "keys";
                 add1.style.backgroundColor = This.color1[index1];
                 add1.style.left = 80 * index1 + "px";
                 
                 add1.style.top = -115 + "px";
                 // if(score2>350){
                 //     add1.style.top = -110 + "px";
                 // }
                 This.hidden.appendChild(add1);
                 keys[i].remove();
             }
         }
     }
     This.set1 = setTimeout(run, This.time);
 }

    This.set1 = setTimeout(run, This.time);
}
}





 //点击画布,结束游戏
 Game.prototype.onclickcanvas=function(){
    let This=this;
    This.canvas.onclick=function(){
        This.audio1.pause();
        clearTimeout(This.set1);
        This.start.style.display = "block";
        This.stop.style.display = "none";
        This.gameover.style.display = "block";
        This.gameover.innerHTML = "得分：" + This.score2;       
        This.score1.innerHTML = "得分:" + This.score2;

}
}

 //暂停游戏
 Game.prototype.stopcanvas=function(){
     let This=this;
     This.stop.onclick = function () {
    This.audio1.pause();
    clearTimeout(This.set1);
    This.start.style.display = "block";
    This.stop.style.display = "none";
    This.p1.style.display = "none";
    This.distance=5;
    This.time=50;
}
 }




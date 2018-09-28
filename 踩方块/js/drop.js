function Drop() {

}
Drop.prototype.creatpetal = function () {
    let This = this;
    let cearte1=function(){
        //console.log(svsggshstsjkfy);

        let x = Math.floor(Math.random() * window.innerWidth);
        
        let y = 0;
        //花瓣的宽度
        let petal_width = Math.ceil(Math.random() * 40) + 10;
        //花瓣的高度
        let petal_height = Math.ceil(Math.random() * 40 + 10);
        //创建花瓣
        let f = document.createElement('img');
        f.src = './img/petal1.png';
        f.style.width = petal_width + "px";
        f.style.height = petal_height + "px";
        f.style.position = "absolute"
        f.style.left = x + "px";
        f.style.top = (y-petal_height) + "px";
        document.body.appendChild(f);
        let num = y - petal_height;
        //console.log( num);

        if (num < window.innerHeight) {
            function anmation1() {
                f.style.top =num + "px";
                //console.log(This.f.style.top);
               num += 1;
                if (num > window.innerHeight - petal_height) {
                   // console.log( window.innerHeight - This.petal_height);
                    clearInterval(set);
                    //clearTimeout(set2);
                    f.remove();
                }
            }
            let set = setInterval(anmation1, 50);
        }
        let time1 = (Math.ceil(Math.random()*10))*1000;
       //console.log(time1);
        let set2 = setTimeout(cearte1,time1);
        //console.log(555);

    }
    let set1 = setTimeout(cearte1,2000);
}



(function () {
    //页面加载完成时执行轮播图效果
    window.onload = function () {
        var container = document.getElementById("container"), //总的区域
            list = document.getElementById("list"), //图片总区域
            buttons = document.getElementById("buttons"),//包裹小圆点的div
            prev = document.getElementById("prev"),//看上一幅图
            next = document.getElementById("next"),//看下一幅图
            index = 0, //当前展示第一副图
            timer = null, //定时器
            aTimer = null,//缓冲定时器
            letOrRight = true;//当前假定图片从左向右
        const WID = 600,
            IND = 5;

        //定义动态效果  //iTarget水平的目标
        function animate(iTarget) {
            var newLeft = parseInt(list.style.left) + iTarget; //移动的目标
            //list.style.left = newLeft + 'px';
            clearInterval(aTimer);
            stop();
            aTimer = setInterval(function() {
                var iSpeed = (newLeft - list.offsetLeft) / 8 ;//缓冲运动速度
                if(iSpeed > 0) {
                    iSpeed = Math.ceil(iSpeed);
                }else {
                    iSpeed = Math.floor(iSpeed);
                }
                list.style.left = parseInt(getComputedStyle(list).left) + iSpeed + 'px';
                if(letOrRight) {
                    if(Math.abs(parseInt(list.style.left)) >= Math.abs(newLeft)) {
                        clearInterval(aTimer);

                    }
                }else {
                    if(Math.abs(parseInt(list.style.left)) <= Math.abs(newLeft)) {
                        clearInterval(aTimer);

                    }
                }
            }, 30);
            letOrRight = true;
            //无限滚动判断
            if(index === 1) {
                list.style.left = -WID + 'px';
            }else if(index === IND) {
                list.style.left = -WID * IND + 'px';
            }
            buttonsShow();
        };

        //定时器设置
        function play() {
            timer = setInterval(function () {
                next.onclick();
            }, 2000);
        };

        //关闭定时器
        function stop() {
            clearInterval(timer);
        };

        //1.整负一  2.
        function clickMove(num) {
            index += num;
            if(num === 1) {
                index > IND && ( index = 1 );
                animate(-WID);
            }else if(num === -1) {
                index < 1 && (index = IND);
                animate(WID);
            }
            //buttonsShow();
        };
        //修改小圆点
        function buttonsShow() {
            var redd = buttons.getElementsByClassName('on')[0];
            redd.className = "";
            buttons.getElementsByTagName("span")[index - 1].className = "on";
        };

        buttons.onclick = function(ev) {
            var target = ev.target;
            if(target.tagName === 'SPAN' && target.className !== 'on') {
                var newcur = target.getAttribute('index'),//现在点击的小圆点
                    oldcur = buttons.getElementsByClassName('on')[0].getAttribute('index');//以前点击的小圆点
                index = parseInt(newcur);
                animate(-WID * (newcur - parseInt(oldcur)) );
            }
        };

        //开启定时器
        play();

        //点击右边的下一副图
        next.onclick = function() {
            clickMove(1);
        };

        //点击左边的上一副图
        prev.onclick = function() {
            clickMove(-1);
            letOrRight = false;
        };

        container.onmouseover = function() {
            stop();
        };

        container.onmouseleave = function() {
            play();
        };
    };
})();
















//(function () {
//    //页面加载完成时执行
//    window.onload = function () {
//        var container = document.getElementById("container"), //总的区域
//            list = document.getElementById("list"), //图片总区域
//            buttons = document.getElementById("buttons"),//小圆点
//            prev = document.getElementById("prev"),//看上一幅图
//            next = document.getElementById("next"),//看下一幅图
//            index = 1, //当前展示第一副图
//            timer = null; //定时器
//        const WID = 600,
//                IND = 5;
//
//        //定义动态效果  //iTarget水平的目标
//        function animate(iTarget) {
//            var newLeft = parseInt(list.style.left) + iTarget; //移动的目标
//            list.style.left = newLeft + 'px';
//
//            //无限滚动判断
//            if(index === 1) {
//                list.style.left = -WID + 'px';
//            }else if(index === IND) {
//                list.style.left = -WID * IND + 'px';
//            }
//        };
//
//        //定时器设置
//        function play() {
//            timer = setInterval(function () {
//                next.onclick();
//            }, 2000);
//        };
//
//        //关闭定时器
//        function stop() {
//            clearInterval(timer);
//        };
//
//        //1.整负一  2.
//        function clickMove(num) {
//            index += num;
//            if(num === 1) {
//                index > IND && ( index = 1 );
//                animate(-WID);
//            }else if(num === -1) {
//                index < 1 && (index = IND);
//                animate(WID);
//            }
//            buttonsShow();
//        };
//        //修改小圆点
//        function buttonsShow() {
//            var redd = buttons.getElementsByClassName('on')[0];
//            redd.className = "";
//            buttons.getElementsByTagName("span")[index - 1].className = "on";
//        };
//
//        //开启定时器
//        play();
//
//        //点击右边的下一副图
//        next.onclick = function() {
//            clickMove(1);
//            //index += 1;
//            //if(index > 5) {
//            //    index = 1;
//            //}
//            //index > 5 && ( index = 1 );
//            //animate(-600);
//        };
//
//        //点击左边的上一副图
//        prev.onclick = function() {
//            clickMove(-1);
//        };
//
//        container.onmouseenter = function() {
//            stop();
//        };
//
//        container.onmouseleave = function() {
//            play();
//        };
//    };
//})();
//
//
//
//
//
//
//
//
//
//
//

!(function(win, doc){
    function setFontSize() {
        // 获取window 宽度
        // zepto实现 $(window).width()就是这么干的
        var winWidth =  window.innerWidth;
        doc.documentElement.style.fontSize = (winWidth / 720) * 100 + 'px' ;

       //给<html>设定一个fontSize ,rem是相对html的fontSize来设置的；rm是相对于父元素的fontSize
    }

    var evt = 'onorientationchange' in win ? 'orientationchange' : 'resize';

    var timer = null;

    win.addEventListener(evt, function () {
        clearTimeout(timer);

        timer = setTimeout(setFontSize, 300);
    }, false);

    win.addEventListener("pageshow", function(e) {
        if (e.persisted) {
            clearTimeout(timer);

            timer = setTimeout(setFontSize, 300);
        }
    }, false);

    // 初始化
    setFontSize();

}(window, document));

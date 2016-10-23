$(function(){
    //滚轮滚动窗口
    var step=40;
    window.onwheel=function(e){
        e=event||window.event;
        var scrollLeft=$(document).scrollLeft();
        if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件
            if (e.wheelDelta > 0) { //当滑轮向上滚动时
                $(document).scrollLeft(scrollLeft-step);
            }
            if (e.wheelDelta < 0) { //当滑轮向下滚动时
                $(document).scrollLeft(scrollLeft+step);
            }
        } else if (e.detail) {  //Firefox滑轮事件
            if (e.detail> 0) { //当滑轮向上滚动时
                $(document).scrollLeft(scrollLeft-step);
            }
            if (e.detail< 0) { //当滑轮向下滚动时
                $(document).scrollLeft(scrollLeft+step);
            }
        }
    };

    //var canMove=false;
    //window.onmousedown=function(){
    //    canMove=true;
    //    $('main').css('cursor','-webkit-grabbing');
    //};
    //
    //window.onmousemove=function(){
    //    if(canMove){
    //        console.log('可以移动')
    //    }
    //};
    //
    //window.onmouseup=function(){
    //    canMove=false;
    //    $('main').css('cursor','');
    //};
});
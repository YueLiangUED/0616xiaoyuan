(function(global){
    function remChange(){
        document.documentElement.style.fontSize=20*document.documentElement.clientWidth/750+'px';
    }
    remChange();
    global.addEventListener('resize',remChange,false);
})(window);

$(function () {
    //学弟首选下购买按钮链接
    $('#buyNow-xuedi').on('touchend',function () {
        window.location.href = 'http://service.bj.10086.cn/m/mobile/168985.html';
    });
    //学妹首选下购买按钮链接
    $('#buyNow-xuemei').on('touchend',function () {
        window.location.href = 'http://service.bj.10086.cn/m/mobile/168984.html';
    });
    //购机赠话费下立即购买按钮链接
    //1 (左上)
    $('#buyNow-1').on('touchend',function () {
        window.location.href = 'http://service.bj.10086.cn/m/mobile/168987.html';
    });
    //2 (右上)
    $('#buyNow-2').on('touchend',function () {
        window.location.href = 'http://service.bj.10086.cn/m/mobile/168986.html';
    });
    //3 (左下)
    $('#buyNow-3').on('touchend',function () {
        window.location.href = 'http://service.bj.10086.cn/m/mobile/168988.html';
    });
    //4 (右下)
    $('#buyNow-4').on('touchend',function () {
        window.location.href = 'http://service.bj.10086.cn/m/mobile/168989.html';
    });
});

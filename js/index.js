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
        window.location.href = '';
    });
    //学妹首选下购买按钮链接
    $('#buyNow-xuemei').on('touchend',function () {
        window.location.href = '';
    });
    //购机赠话费下立即购买按钮链接
    //1 (左上)
    $('#buyNow-1').on('touchend',function () {
        window.location.href = '';
    });
    //2 (右上)
    $('#buyNow-2').on('touchend',function () {
        window.location.href = '';
    });
    //3 (左下)
    $('#buyNow-3').on('touchend',function () {
        window.location.href = '';
    });
    //4 (右下)
    $('#buyNow-4').on('touchend',function () {
        window.location.href = '';
    });
});

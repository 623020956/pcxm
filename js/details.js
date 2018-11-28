$(function () {
    $(function(){
        FastClick.attach(document.body);
    });
    // var d;
    // var dd;
    // var ol;
    // var ll;
    $(".menu_nav").on("tap", function () {
        $(".mm-menu").toggleClass("mm-opened");
        $(".mm-page").toggleClass("open-mm-page");
        $(".over").toggleClass("hover");
    })
    $(".over").on("touchstart",function(){
        $(".mm-menu").toggleClass("mm-opened");
        $(".mm-page").toggleClass("open-mm-page");
        $(".over").toggleClass("hover");
    })
    // $(document).on("swipeLeft", function (e) {
    //     ll = parseFloat($(".mm-menu").css("left"))
    //     console.log(ll)
    //     // d = e.targetTouches[0].clientX
    //     // ol = e.targetTouches[0].target.offsetLeft
    //     if (ll == 0) {
    //         $(".mm-menu").toggleClass("mm-opened");
    //         $(".mm-page").toggleClass("open-mm-page");
    //     }
    // })
    // $(document).on("touchmove", function (e) {
    //     dd = e.targetTouches[0].clientX
    //     if (ll == 0) {
    //         $(".mm-menu").toggleClass("mm-opened");
    //         $(".mm-page").toggleClass("open-mm-page");
    //     }
    // })
    $(window).scroll(function () {
        var st = $(window).scrollTop();
        if (st >= 100) {
            $(".filter").css("position", "fixed")
        } else {
            $(".filter").css("position", "static")
        }
    })
    var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        speed: 300,
        autoplay: {
            delay: 1000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
        },
        
        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
            bacground:'red'
          },

        // 如果需要前进后退按钮
        // nextButton: '.swiper-button-next',
        // prevButton: '.swiper-button-prev',

        // 如果需要滚动条
        // scrollbar: '.swiper-scrollbar',
    })
})
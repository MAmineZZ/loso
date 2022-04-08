$(document).ready(function () {
    'use strict';
    $(window).scroll(function () {
        'use strict';
        if($(window).scrollTop()< 80 ){
            $('.navbar').css({
                'margin-top': '-100px',
                'opacity': '0'
                });
            $('.navbar-default').css({
                'background-color': 'rgba(59, 59, 59, 0)',
            });
        }else {
            $('.navbar').css({
                'margin-top': '0px',
                'opacity': '1'
            });

            $('.navbar-default').css({
                'background-color': 'rgba(59, 59, 59, 0.7)',
                'border-color': '#444'
            });

            $('.navbar-brand img').css({
                'height': '35px',
                'padding-top': '0px'
            });
            $('.navbar-nav > li > a').css({
                'padding-top': '15px',
            });
        }
    });
});


//Highlight menu item on scroll
$(document).ready(function() {
    'use strict';
    $(document).scroll(function () {
        'use strict';
        $("section").each(function () {
           'use strict';
            const bb = $(this).attr("id");
            const hei = $(this).outerHeight();
            const grttop = $(this).offset().top - 70;
            if ($(window).scrollTop() > grttop && $(window).scrollTop() < grttop + hei){
               $(".navbar-nav li a[href='#" + bb +"'] ").parent().addClass("active");
           } else{
               $(".navbar-nav li a[href='#" + bb +"'] ").parent().removeClass("active");
           }
        });
    });
});
/*Active menu item on click*/
$(document).ready(function () {
    'use strict';
    $('.navbar-nav li a').click(function () {
        'use strict';
        $('.navbar-nav li a').parent().removeClass("active");
        $(this).parent().addClass("active");
        if ($(window).scrollTop() < grttop && $(window).scrollTop() > grttop + hei){
            $(".navbar-nav li a[href='#" + bb +"'] ").parent().removeClass("active");
        }
    });
});


//Add Auto paddingto header
$(document).ready(function(){
   'use strict';
   setInterval(function () {
       'use strict';
       const windwowHeight = $(window).height();
       const containerHeight = $(".header-container").height();
       const padTop = windwowHeight - containerHeight;
       $(".header-container").css({
           'padding-top' : Math.round(padTop/2)+'px',
           'padding-bottom' : Math.round(padTop/2)+'px',
       });
   },10)
});

//Add bx slider to screens
$(document).ready(function () {
    $('.bxslider').bxSlider({
        slideWidth: 292.5,
        auto: true,
        minSlides: 1,
        maxSlides: 3,
        slideMargin: 50
    });
});

//Add counter
$(document).ready(function () {
   $('.counter-num').counterUp({
       delay: 10,
       time: 1000,
   });
});

//Add Animation/ Initialize wow
$(document).ready(function () {
    'use strict';
   new WOW().init();
});
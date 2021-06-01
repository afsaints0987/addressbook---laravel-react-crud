$(document).ready(function(){

    
    // Responsive
    $(window).resize(function(){
        const width = $(window).width();
        if (width < 768){
            $('.menu').show();
            $('.nav-list').hide()
            $('html').css('overflow', 'scroll');



        } else {
            $('.nav-list').show();
            $('.menu').hide();
            $('html').css('overflow', 'hidden');
        }


        $('.menu').click(function(){
            $('.nav-list').slideToggle();
        })
    })

    

    
    // Change Theme

    $('.product-thumb').click(function(){

        $('.circle').hide().fadeIn(1000);
        $('.product-img').hide().fadeIn(1500);

        let productImg = $(this);
        if(productImg.is('#strawberry')){
            $('.product-img').attr("src","assets/milktea-1.png");
            $('.circle').css("background-color", "#e56f6c");
            $('.logo').attr("src","assets/logo-2.png");
            $('span').css("color", "#0d6ebd");
            $('.button-a').css({
                "background-color": "#0d6ebd",
                "color": "white"
            });
            $('body').css("background-color", "#fffdd0");
            $('.title-banner').css("color", "black");
            $('.footer').css("color", "black");
            $('a').css("color", "black");
            $('.menu').css('color', 'black');
        };

        if(productImg.is('#cookies')){
            $('.product-img').attr("src","assets/milktea-2.png");
            $('.circle').css("background-color", "#d9ac71");
            $('.logo').attr("src","assets/logo-2.png");
            $('span').css("color", "#0d6ebd");
            $('.button-a').css({
                "background-color": "#0d6ebd",
                "color": "white"
            });
            $('body').css("background-color", "#fffdd0");
            $('.title-banner').css("color", "black");
            $('.footer').css("color", "black");
            $('a').css("color", "black");
            $('.menu').css('color', 'black');
        }

        if(productImg.is('#green')){
            $('.product-img').attr("src","assets/milktea-3.png");
            $('.circle').css("background-color", "#b8c70c");
            $('body').css("background-color", "#323232");
            $('.logo').attr("src","assets/logo-1.png");
            $('span').css("color", "#fffd0a");
            $('.button-a').css({
                "background-color": "#fffd0a",
                "color": "black"
            });
            $('.title-banner').css("color", "white");
            $('.footer').css("color", "white");
            $('a').css("color", "white");
            $('.menu').css('color', 'white');
        }

        if(productImg.is('#red')){
            $('.product-img').attr("src","assets/milktea-4.png");
            $('.circle').css("background-color", "#ff1e3b");
            $('body').css("background-color", "#323232");
            $('.logo').attr("src","assets/logo-1.png");
            $('span').css("color", "#fffd0a");
            $('.button-a').css({
                "background-color": "#fffd0a",
                "color": "black"
            });
            $('.title-banner').css("color", "white");
            $('.footer').css("color", "white");
            $('a').css("color", "white");
            $('.menu').css('color', 'white');
        }

       
        
    })

    

});

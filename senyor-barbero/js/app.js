$(document).ready(function() {

    // Newsletter Pop
    setTimeout(function(){
        $('#myModal').modal('show')
    },4000)

    // Close Newsletter
    $('.close').click(function(){
        $('#myModal').toggle()
    })

    // Navigation Background change after scroll

    $(window).scroll(function(){
        let scroll = $(window).scrollTop();
        if(scroll >= 100) {
        $('.nav-bar').css({"background": "#191a1c80"});
        } else {
            $('.nav-bar').css({"background": "none"});
        }
    });

    

    // Open and Close Menu
    $(".menu").click(function (){
        $(".nav-list").slideToggle()
    });

    // Animate Hero Banner
    let heroBanner = $(".hero-banner")
    
    heroBanner.animate({opacity: '0'},'3000');
    heroBanner.animate({opacity: '25%'},'3000');
    heroBanner.animate({opacity: '50%'},'2000');
    heroBanner.animate({opacity: '75%'},'1000');
    heroBanner.animate({opacity: '100%'},'1000');

    

    // Activate Carousel
    $("#myCarousel").carousel();

    // Enable Carousel Indicators
    $(".item").click(function(){
    $("#myCarousel").carousel(1);
    });

    // Enable Carousel Controls
    $(".carousel-control-prev").click(function(){
    $("#myCarousel").carousel("prev");
    });

});
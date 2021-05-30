$(document).ready(function(){
    $(window).scroll(function(){
       
       
     // stickynavbar 
 if(this.scrollY > 20){
   $('.navbar').addClass("sticky");
   }else{
            $('.navbar').removeClass("sticky");
        }
        
     
        // scroll-upbtn (show/hide )
       
     if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

                       // slideup 
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
     
     
     
     
        //  smooth scroll 
           //slideup btn click

        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        //  smooth scroll when menu items click
        $('html').css("scrollBehavior", "smooth");
    });

 
 
 
    // togglemenu/togglenavbar 
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

 
 
    //typingtext animationeffect
    var typed = new Typed(".typing", {
        strings: [ "Front-End-Developer", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
//typing effect [about section]
    var typed = new Typed(".typing-2", {
        strings: ["Front-End-Developer", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl corpusel project section


 $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
         0:{
           items: 1,
            nav: false
          },
            600:{
              items: 2,
           nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});
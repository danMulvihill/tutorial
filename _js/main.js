$(document).ready(function(){

  //mobile menu

    $(".mobile-menu_open").on("click", function(e){
      e.preventDefault();
      $(".top-nav ul").slideDown();
      $(".mobile-menu_open").hide();
      $(".mobile-menu_close").show();
    })

    $(".mobile-menu_close").on("click", function(e){
      e.preventDefault();
      $(".top-nav ul").slideUp();
      $(".mobile-menu_close").hide();
      $(".mobile-menu_open").show();
    })


    //this code slides up the menu when user 
    //scrolls or clicks on container, but only on mobile devices
    if(innerWidth<=600){
      $(".container").on("click", function(){
        
          $(".top-nav ul").slideUp();
          $(".mobile-menu_close").hide();
          $(".mobile-menu_open").show();
        
      })

      $(window).scroll(function(){
        $(".top-nav ul").slideUp();
        $(".mobile-menu_close").hide();
        $(".mobile-menu_open").show();
      })
    }
  //scroll to top 

    $(".js-top").on("click", function(e){
      e.preventDefault();
      scroll(0);
    });
 
    function scroll(top){
      $('html,body').animate({
        scrollTop: top
      },500)
    }

});


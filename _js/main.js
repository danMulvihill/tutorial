$(document).ready(function(){

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
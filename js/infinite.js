$(document).ready(function(){

    $(window).scroll(function(){
      var currentScreenPosition  = $(document).scrollTop();
    if (currentScreenPosition > 650) {
      $( ".funstuff" ).addClass( "animated jackInTheBox" );
    } else {
      $( ".funstuff" ).removeClass( "animated jackInTheBox" );
    };
    });
});

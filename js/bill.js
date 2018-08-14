$( document ).on("click", ".bp-button", function() {
    $( ".site-container" ).toggleClass( "modal-active" );
    $( ".site-container" ).toggleClass( "menu-active" );
    $( ".bp-button i" ).toggleClass( "fa-times" );
    $( ".bp-button i" ).toggleClass( "fa-bars" );
  });

  $( document ).on("click", ".modal-close-bg" , function() {
    $( ".site-container" ).removeClass( "modal-active" );
    $( ".site-container" ).removeClass( "menu-active" );
    $( ".site-container" ).removeClass( "feature-inactive" );
    $( ".bp-button i" ).removeClass( "fa-times" );
    $( ".bp-button i" ).addClass( "fa-bars" );
  });

  $( document ).on("click", ".modal-close .dev-card button", function() {
    $( ".site-container" ).removeClass( "modal-active" );
    $( ".site-container" ).removeClass( "menu-active" );
    $( ".site-container" ).removeClass( "feature-inactive" );
    $( ".bp-button i" ).removeClass( "fa-times" );
    $( ".bp-button i" ).addClass( "fa-bars" );
  });


  $( window ).resize(function() {
    $( ".site-container" ).removeClass( "modal-active" );
    $( ".site-container" ).removeClass( "menu-active" );
    $( ".site-container" ).removeClass( "feature-inactive" );
    $( ".bp-button i" ).removeClass( "fa-times" );
    $( ".bp-button i" ).addClass( "fa-bars" );
  });

 $( document ).on("click", ".bp-card", function() {
      var clickedcard = $(this).children(".title").children("strong").html();

      if (clickedcard == "What is a Bill?"){
          $(".content .container").load("data/whats-a-bill.html");
      }
      else{
          $( ".site-container" ).toggleClass( "modal-active" );
          $( ".site-container" ).toggleClass( "feature-inactive" );
      }
    });

    $( ".bp-menu" ).on("click", function() {
       $( ".site-container" ).addClass( "modal-active" );
       $( ".site-container" ).addClass( "feature-inactive" );
    });




$(document).ready(function(){
    setTimeout(function(){
      $(".content .container").load("data/main-menu.html");
    }, 100);

});


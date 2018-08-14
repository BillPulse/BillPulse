$(document).ready(function(){
    setTimeout(function(){
      $(".content .container").load("data/main-menu.html");
    }, 100);

    $( ".bp-button" ).click(function() {
  $( ".site-container" ).toggleClass( "modal-active" );
  $( ".site-container" ).toggleClass( "menu-active" );
  $( ".bp-button i" ).toggleClass( "fa-times" );
  $( ".bp-button i" ).toggleClass( "fa-bars" );
});

$( ".modal-close-bg" ).click(function() {
  $( ".site-container" ).removeClass( "modal-active" );
  $( ".site-container" ).removeClass( "menu-active" );
  $( ".site-container" ).removeClass( "feature-inactive" );
  $( ".bp-button i" ).removeClass( "fa-times" );
  $( ".bp-button i" ).addClass( "fa-bars" );
});

$( ".modal-close .dev-card button" ).click(function() {
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

 $( ".bp-card" ).click(function() {
      var clickedcard = $(this).children(".title").children("strong").html();

      if (clickedcard == "What is a Bill?"){
          $(".content .container").load("data/whats-a-bill.html");
      }
      else{
          $( ".site-container" ).toggleClass( "modal-active" );
          $( ".site-container" ).toggleClass( "feature-inactive" );
      }
    });

    $( ".bp-menu" ).click(function() {
       $( ".site-container" ).addClass( "modal-active" );
       $( ".site-container" ).addClass( "feature-inactive" );
    });


});


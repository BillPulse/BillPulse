
var visitedpage = false;
var FadeInTime = 300;

var loadinghtml = 
  "<div class='loading position-absolute h-100'><div class='mx-auto my-auto'><i class='fas fa-spinner fa-spin'></i> </div></div>";

$( document ).on("click", ".bp-button", function() {
    
    if (visitedpage == false){
      $( ".site-container" ).toggleClass( "modal-active" );
      $( ".site-container" ).toggleClass( "menu-active" );
      $( ".bp-button i" ).toggleClass( "fa-times" );
    }
    else{
      $( ".bp-button i" ).toggleClass( "fa-arrow-left" );
      $( ".bp-button" ).addClass( "d-lg-none");
     LoadPage(".content .content-dynamic", "main-menu");
      visitedpage = false;
    }

    $( ".bp-button i" ).toggleClass( "fa-bars" );
  });

  $( document ).on("click", ".modal-close-bg" , function() {
    $( ".site-container" ).removeClass( "modal-active" );
    $( ".site-container" ).removeClass( "menu-active" );
    $( ".site-container" ).removeClass( "feature-inactive" );

    if (visitedpage == false){
      $( ".bp-button i" ).removeClass( "fa-times" );
      $( ".bp-button i" ).addClass( "fa-bars" );
    }
  });

  $( document ).on("click", ".modal-close .dev-card button", function() {
    $( ".site-container" ).removeClass( "modal-active" );
    $( ".site-container" ).removeClass( "menu-active" );
    $( ".site-container" ).removeClass( "feature-inactive" );
    if (visitedpage == false){
      $( ".bp-button i" ).removeClass( "fa-times" );
      $( ".bp-button i" ).addClass( "fa-bars" );
    }
  });


  $( window ).resize(function() {
    if(visitedpage == false){

      $( ".site-container" ).removeClass( "modal-active" );
      $( ".site-container" ).removeClass( "menu-active" );
      $( ".site-container" ).removeClass( "feature-inactive" );
      $( ".bp-button i" ).removeClass( "fa-times" );
      $( ".bp-button i" ).addClass( "fa-bars" ); 
    }
   
  });

 $( document ).on("click", ".bp-card", function() {
      var clickedcard = $(this).children(".title").children("strong").html();

      visitedpage = true;

      if (clickedcard == "What is a Bill?"){
        LoadingAnimation();
        LoadPage(".content .content-dynamic", "whats-a-bill");
      }
      else if (clickedcard == "The Mental Health Bill"){
        LoadingAnimation();
        LoadPage(".content .content-dynamic", "mental-health-bill");
      }
      else{
          $( ".site-container" ).toggleClass( "modal-active" );
          $( ".site-container" ).toggleClass( "feature-inactive" );
          visitedpage = false;
      }

      if (visitedpage == true){
        $( ".bp-button i" ).removeClass( "fa-bars" );
        $( ".bp-button i" ).addClass( "fa-arrow-left" );
        $( ".bp-button" ).removeClass( "d-lg-none");
      }
    });

    $( document).on("click", ".bp-menu" ,function() {
      var clickedmenu = $(this).children(".menu-name").html();
      var currentactive = $(".bp-active-menu");
      var activateclicked = true;

      $(".bp-menu").removeClass("bp-active-menu");

      if (clickedmenu == "Home"){

        if (visitedpage == true){
          $( ".bp-button i" ).removeClass( "fa-arrow-left" );
          $( ".bp-button" ).addClass( "d-lg-none");
          visitedpage = false;
        }
        else{
          $( ".bp-button i" ).removeClass( "fa-times" );
        }
        
        $( ".bp-button i" ).addClass( "fa-bars" );
        
        
        
        LoadPage(".content .content-dynamic", "main-menu");
       
      }
      else{
         $( ".site-container" ).addClass( "modal-active" );
        $( ".site-container" ).addClass( "feature-inactive" );

        $(currentactive).addClass("bp-active-menu");
        activateclicked = false;
      }

      if(activateclicked == true){
         $(this).addClass("bp-active-menu");
      }
      
    });




$(document).ready(function(){
    $(".loading").fadeOut();
    setTimeout(function(){
      LoadPage(".content .content-dynamic", "main-menu");
    }, 100);

});

function LoadingAnimation(){
  var currentdata = $(".content .content-dynamic").html();
  $(".content .content-dynamic").html(loadinghtml + currentdata);
  $(".loading").fadeOut();
}

function LoadPage(classname, filename){
  $(classname).load("data/" + filename + ".html");
  $(classname).fadeIn(FadeInTime);
}
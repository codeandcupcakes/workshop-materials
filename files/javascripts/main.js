$(document).ready(function(){
  $("button.fade-out").click(function(){
    $("h1").fadeOut();
  });

  $("button.fade-in").click(function(){
    $("h1").fadeIn();
  });

  $("button.bigger").click(function(){
    $("img").animate({
      height: "+=100px",
      width: "+=100px"
    });
  }); 
});

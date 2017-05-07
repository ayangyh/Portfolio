$(document).ready(function(){

  var nb = $(".navbar");
  var tall = $(window).height();
  var nbheight = $(".navbar").height();  
  var stick = tall - nbheight;
  var h3 = $(".anchor");

  console.log(stick);


  $(window).scroll(function() {
    if( $(this).scrollTop() > stick + 95){
      nb.addClass("navbar-scrolled");
    }
    else {
      nb.removeClass("navbar-scrolled");
    }
  });


});
   	$(document).ready(function(){

    var nb = $(".navbar");
    var tall = $(window).height();
    var nbheight = $(".navbar").height();
    var stick = tall - nbheight;

    $(window).scroll(function() {
      if( $(this).scrollTop() > stick -50){
        nb.addClass("navbar-scrolled");
      }
      else {
        nb.removeClass("navbar-scrolled");
      }
    });
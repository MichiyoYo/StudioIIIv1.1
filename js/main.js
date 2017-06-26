$(document).ready(function (){
  /* smooth scrolling for scroll to top */
  $('.scroll-top').click(function(){
    $('body,html').animate({scrollTop:0},1500);
  })

  /*animation to make the elements to slide in */
  $(window).scroll(function() {
    $(".slide-topdown").each(function(){
      /*get position of the object with class .slide-topdown*/
      var pos = $(this).offset().top;
      /*get current vertical position of the scroll bar*/
      var winTop = $(window).scrollTop();
      if (pos < winTop + 600) {
        $(this).addClass("slide-td");
      }
    });

    $(".slide-rightleft").each(function(){
      /*get position of the object with class .slide-rightleft*/
      var pos = $(this).offset().top;
      /*get current vertical position of the scroll bar */
      var winTop = $(window).scrollTop();
      if (pos < winTop + 600) {
        $(this).addClass("slide-rl");
      }
    });

    $(".fadeIn").each(function(){
      /*get position of the object with class .slide-rightleft*/
      var pos = $(this).offset().top;
      /*get current vertical position of the scroll bar */
      var winTop = $(window).scrollTop();
      if (pos < winTop + 600) {
        $(this).addClass("fade-in");
      }
    });

  });
});

(function( $ ) {

  function animator( elems ) {
    var cacheEvent = 'webkitAnimationEnd animationend'; //cache the event in a variable

    elems.each(function(){
      var $this = $(this),
      $animationType = $this.data('animation');

      /*Add animate.css classes and remove them when the animation is over,
      taking the value from the cashed event in cache*/
      $this.addClass($animationType).one(cacheEvent, function () {
        $this.removeClass ($animationType);
      });
    });
  }

  //Variable on page load
  var $myMovingObj = $('#moving-objs'),
    $animatingElems = $myMovingObj.find("[data-animation ^= 'animated']");

  animator($animatingElems);

})(jQuery);

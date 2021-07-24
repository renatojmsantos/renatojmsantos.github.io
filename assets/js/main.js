
!(function($) {
  "use strict";

  $(window).on("load",function(){
     $(".loader-wrapper").fadeOut("slow");
  });
 
  // counter
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  // skills
  $('.skills-content').waypoint(function() {
    $('.progress .progress-bar').each(function() {
      $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });
  }, {
    offset: '80%'
  });


})(jQuery);
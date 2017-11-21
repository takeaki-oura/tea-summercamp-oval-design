$(function() {
  
  $('.setting-name').click(function() {
    var $answer = $(this).parent().find('.change');
    if($answer.hasClass('open')) { 
      $answer.removeClass('open');
      
      $answer.slideUp();


      $(this).parent().find("span").text("+");
      
    } else {
      $answer.addClass('open'); 
      
      $answer.slideDown();
      
      $(this).parent().find("span").text("-");
      
    }
  });
});
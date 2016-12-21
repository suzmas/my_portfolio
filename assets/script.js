$(document).ready(function(){
  $('#nav-icon').click(function(){
    $(this).toggleClass('animate-icon');
    $('#overlay').fadeToggle();
    $('.hr-line').toggleClass('opaque');
  });
});

$(document).ready(function(){
  $('#overlay').click(function(){
    $('#nav-icon').removeClass('animate-icon');
    $('#overlay').toggle();
    $('.hr-line').toggleClass('opaque');
  });
});

$(document).ready(function(){
  $('.social-btn').hover(function() {
    $(this).css('box-shadow', '0 0 10px 0 #666');
  }, function() { $(this).css('box-shadow', '0 0 0px 0')});
  $('.txt-btn').hover(function() {
    $(this).css('box-shadow', '0 0 10px 0 #666');
  }, function() { $(this).css('box-shadow', '0 0 0px 0')})
});


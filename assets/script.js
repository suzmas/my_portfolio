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

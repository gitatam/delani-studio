$(document).ready(function(){
  //what we do toggle effect
  $('.work').click(function(){
    $(this).children('.work-text').slideToggle("slow");
    $(this).children('.work-image').slideToggle("slow");
  });

  //portfolio elements' hover effect
  $('.work-one').mouseover(function(){
    $('.card-title1').show();
  }).mouseout(function(){
    $('.card-title1').hide();
  });

});

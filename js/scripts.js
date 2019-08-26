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

  $('.work-two').mouseover(function(){
    $('.card-title2').show();
  }).mouseout(function(){
    $('.card-title2').hide();
  });

  $('.work-three').mouseover(function(){
    $('.card-title3').show();
  }).mouseout(function(){
    $('.card-title3').hide();
  });

  $('.work-four').mouseover(function(){
    $('.card-title4').show();
  }).mouseout(function(){
    $('.card-title4').hide();
  });

  $('.work-five').mouseover(function(){
    $('.card-title5').show();
  }).mouseout(function(){
    $('.card-title5').hide();
  });

  $('.work-six').mouseover(function(){
    $('.card-title6').show();
  }).mouseout(function(){
    $('.card-title6').hide();
  });

  $('.work-seven').mouseover(function(){
    $('.card-title7').show();
  }).mouseout(function(){
    $('.card-title7').hide();
  });

  $('.work-eight').mouseover(function(){
    $('.card-title8').show();
  }).mouseout(function(){
    $('.card-title8').hide();
  });

});

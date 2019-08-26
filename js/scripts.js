$(document).ready(function(){
  $('.work').click(function(){
    $(this).children('.work-text').slideToggle(500);
    $(this).children('.work-image').slideToggle(800);
  });
  
});

$(document).ready(function() {
    $('.html').css('width', '90%');
    $('.css').css('width', '90%');
    $('.jquery').css('width', '65%');
    $('.javascript').css('width', '70%');
    $('.adobe').css('width', '80%');
    $('.wordpress').css('width', '10%');
    $('.ui').css('width', '65%');
    $('.rwd').css('width', '80%');
});

$(function() {
  $('.js-nav a, .js-connect').click(function(e) {
    e.preventDefault();
    $('body, html').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 750);
  });
});

$('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
  });

$(document).ready(function() {
    $('.html').css('width', '90%');
    $('.css').css('width', '90%');
    $('.jquery').css('width', '70%');
    $('.javascript').css('width', '60%');
    $('.adobe').css('width', '80%');
    $('.wordpress').css('width', '10%');
    $('.ui').css('width', '70%');
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

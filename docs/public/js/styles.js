$(document).ready(() => {
  $('button.navbar-toggler').on('click', () => {
    $('nav.navbar').toggleClass('fixed-top').toggleClass('bg-collapse');
    $('div.navbar-collapse').toggleClass('w-100');
    $('span.fas').hasClass('fa-bars') ? $('span.fas').addClass('fa-times').removeClass('fa-bars') : 
      $('span.fas').addClass('fa-bars').removeClass('fa-times');
  });
});
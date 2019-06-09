$(document).ready(() => {
  $('button.navbar-toggler').on('click', () => {
    $('div.navbar-collapse').toggleClass('w-100');
    $('span.fas').hasClass('fa-bars') ? $('span.fas').addClass('fa-times').removeClass('fa-bars') : 
      $('span.fas').addClass('fa-bars').removeClass('fa-times');
  });
});
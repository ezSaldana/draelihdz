$(document).ready(() => {
  $('button.navbar-toggler').on('click', () => {
    $('nav.navbar').toggleClass('fixed-top').toggleClass('bg-collapse');
    $('div.navbar-collapse').toggleClass('w-100');
    $('span.fas').hasClass('fa-bars') ? $('span.fas').addClass('fa-times').removeClass('fa-bars') :
      $('span.fas').addClass('fa-bars').removeClass('fa-times');
  });
  //Services 1st row of buttons
  $('#cefalea').on('click', () => {
    $('#infoModalLabel').html('Dolor de Cabeza o Cefalea');
    $('#modalBody').html('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.');
  });
  $('#trauma').on('click', () => {
    $('#infoModalLabel').html('Trauma Craneocefálico');
    $('#modalBody').html('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.');
  });
  $('#vascular').on('click', () => {
    $('#infoModalLabel').html('Enfermedad Vascular Cerebral');
    $('#modalBody').html('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.');
  });
  //Services 2nd row of buttons
  $('#tumor').on('click', () => {
    $('#infoModalLabel').html('Tumores');
    $('#modalBody').html('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.');
  });
  $('#hidrocefalea').on('click', () => {
    $('#infoModalLabel').html('Hidrocefalea');
    $('#modalBody').html('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.');
  });
  $('#epilepsia').on('click', () => {
    $('#infoModalLabel').html('Epilepsia');
    $('#modalBody').html('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.');
  });
  //Services 3rd row of buttons
  $('#cervical').on('click', () => {
    $('#infoModalLabel').html('Dolor Cervical');
    $('#modalBody').html('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.');
  });
  $('#lumbalgia').on('click', () => {
    $('#infoModalLabel').html('Lumbalgia');
    $('#modalBody').html('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.');
  });
  $('#hernia').on('click', () => {
    $('#infoModalLabel').html('Hernia de Disco');
    $('#modalBody').html('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.');
  });
  //Services 4th row of buttons
  $('#degenerativa').on('click', () => {
    $('#infoModalLabel').html('Enfermedad Degenerativa de la Columna');
    $('#modalBody').html('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.');
  });
  $('#fractura').on('click', () => {
    $('#infoModalLabel').html('Fracturas Vertebrales');
    $('#modalBody').html('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.');
  });
  $('#espinal').on('click', () => {
    $('#infoModalLabel').html('Tumores Espinales');
    $('#modalBody').html('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.');
  });
});
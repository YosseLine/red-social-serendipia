$(document).ready(function() {
  $('textarea#textarea1').characterCounter();
  var $textArea = $('#textarea1');
  var $btnPublicarHome = $('#btn-publicar-home');
  var $createContent = $('#create-content');
  var $fotoSubida = $('#foto-subida');
  var $btnPublicarFoto = $('#btn-publicar-foto');

  $('#textarea1').on('keyup', function() {
    if ($('#textarea1').val().length !== 0) {
      $('#btn-publicar-home').removeClass('disabled');
    } else {
      $('#btn-publicar-home').addClass('disabled', 'disabled');
    }
  });

  $btnPublicarHome.on('click', function(event) {
    console.log($btnPublicarHome);
    event.preventDefault();
    if ($textArea.val().length !== 0) {
      console.log($textArea.val());
      $createContent.append('<div>' + $textArea.val() + '</div>');
    }
    $textArea.val('');
  });

  $btnPublicarFoto.on('click', function() {
    if ($fotoSubida.attr('valid')) {
      $createContent.append('<div><img src="uploads/$file_name"></div>');
    }
  });
});

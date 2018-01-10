$(document).ready(function() {
  $('textarea#textarea1').characterCounter();
  var $textArea = $('#textarea1');
  var $btnPublicarHome = $('#btn-publicar-home');
  var $fotoSubida = $('#foto-subida');
  var $btnPublicarFoto = $('#btn-publicar-foto');
  var $imagenUser = $('#imagen-user');
  var $cardBox = $('#card-box');

  $('#textarea1').on('keyup', function() {
    if ($('#textarea1').val().length !== 0) {
      $('#btn-publicar-home').removeClass('disabled');
    } else {
      $('#btn-publicar-home').addClass('disabled', 'disabled');
    }
  });

  $(window).on('load', function() {
    firebase.auth()
      .getRedirectResult()
      .then(function(result) {
        $imagenUser.append('<img width="100px" src=' + user.photoURL + '>');
        $('#name-user').append('<h6>' + result.user.displayName + '</h6>');
      });
  });

  $btnPublicarHome.on('click', function(event) {
    console.log($btnPublicarHome);
    event.preventDefault();
    if ($textArea.val().length !== 0) {
      console.log($textArea.val());
      var $card = $('<div class= "card"></div>');
      var $cardContent = $('<div class= "card-content"></div>');
      var $paragraph = $('<p/>', {
        'html': $textArea.val()
      });
      var date = new Date();
      var hours = date.getHours() + ':' + date.getMinutes();

      var $dateBoxContainer = $('<div/>', {
        'class': 'right-align'
      });
      var $dateContent = $('<p/>', {
        'text': hours,
      });

      var $heart = $('<i class="material-icons heart">favorite</i>');
      var $heartContent = $('<span/>', {
        'text': $heart,
      });
      var $heartBoxContainer = $('<div/>', {
        'class': 'left-align',
      });
      $dateBoxContainer.append($dateContent);
      $heartBoxContainer.append($heartContent);
      $cardContent.append($paragraph, $dateBoxContainer, $heartBoxContainer);
      $card.append($cardContent);
      $card.addClass('style-card');
      $cardBox.append($card);
    };
    $textArea.val('');
  });

  $btnPublicarFoto.on('click', function() {
    if ($fotoSubida.attr('valid')) {
      $createContent.append('<div><img src="uploads/$file_name"></div>');
    }
  });
});

$(document).ready(function() {
  $('.button-collapse').dropdown();
  $('textarea#textarea1').characterCounter();
  var $textArea1 = $('#textarea1');
  var $textArea2 = $('#textarea2');
  var $btnPublicarHome = $('#btn-publicar-home');
  var $btnPublicarHomeDesktop = $('#btn-publicar-home-desktop');
  var $fotoSubida = $('#foto-subida');
  var $imagenUser = $('#imagen-user');
  var $cardBox = $('#card-box');
  var $filePhotoMovile = $('#file-photo-movile');
  var $filePhotoDesktop = $('#file-photo-desktop');

  $('#textarea1').on('keyup', function() {
    if ($('#textarea1').val().length !== 0) {
      $('#btn-publicar-home').removeClass('disabled');
    } else {
      $('#btn-publicar-home').addClass('disabled', 'disabled');
    }
  });
  $('#textarea2').on('keyup', function() {
    if ($('#textarea2').val().length !== 0) {
      $('#btn-publicar-home-desktop').removeClass('disabled');
    } else {
      $('#btn-publicar-home-desktop').addClass('disabled', 'disabled');
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

  // Función que creará nuevos divs con el contenido del textarea
  $btnPublicarHome.on('click', function(event) {
    console.log($btnPublicarHome);
    event.preventDefault();
    if ($textArea1.val().length !== 0) {
      console.log($textArea1.val());
      var $card = $('<div class= "card"></div>');
      var $cardContent = $('<div class= "card-content"></div>');
      var $paragraph = $('<p/>', {
        'html': $textArea1.val()
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
    $textArea1.val('');
  });
  $btnPublicarHomeDesktop.on('click', function(event) {
    console.log($btnPublicarHome);
    event.preventDefault();
    if ($textArea2.val().length !== 0) {
      console.log($textArea2.val());
      var $card = $('<div class= "card"></div>');
      var $cardContent = $('<div class= "card-content"></div>');
      var $paragraph = $('<p/>', {
        'html': $textArea2.val()
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
    $textArea2.val('');
  });

  // Función que subirá fotos a la página
  $filePhotoMovile.change(function() {
    var $card = $('<div class= "card"></div>');
    var $cardContent = $('<div class= "card-content"></div>');
    var fileName = event.target.files[0];
    var reader = new FileReader();
    var $photoContainer = $('<div/>');
    reader.onload = function(event) {
      $photoContainer.append('<img class = "col s12 responsive-img image-style" src= "' + event.target.result + '"/>');
      $cardContent.append($photoContainer);
      $card.append($cardContent);
      $card.addClass('style-card');
      $card.addClass('height-image');
      $('#card-box').append($card);
    };
    reader.readAsDataURL(fileName);
  });
  $filePhotoDesktop.change(function() {
    var $card = $('<div class= "card"></div>');
    var $cardContent = $('<div class= "card-content"></div>');
    var fileName = event.target.files[0];
    var reader = new FileReader();
    var $photoContainer = $('<div/>');
    reader.onload = function(event) {
      $photoContainer.append('<img class = "col s6 responsive-img image-style" src= "' + event.target.result + '"/>');
      $cardContent.append($photoContainer);
      $card.append($cardContent);
      $card.addClass('style-card');
      $card.addClass('height-image');
      $('#card-box').append($card);
    };
    reader.readAsDataURL(fileName);
  });
});

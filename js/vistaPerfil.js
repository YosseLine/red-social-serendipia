$(document).ready(function() {
  $('.dropdown-button').dropdown();
  // MODAL AMIGOS
  $('.modal').modal();
  // SELECCION DE ELEMENTOS GUARDADOS EN VARIBALES
  var $buttonFotos = $('#fotos');
  var $thirdSection = $('.third-section');
  var $secondSection = $('.second-section');
  var $divContainerButtons = $('#div-container-buttons');
  var $buttonPublicar = $('#btn-publicar-perfil');
  console.log($divContainerButtons);
  // EVENTO click
  $buttonFotos.on('click', function(event) {
    event.preventDefault();
    $secondSection.addClass('hide');
    $thirdSection.removeClass('hide');
    $divContainerButtons.append('<a id="biografía"class=" biografia waves-effect waves-light btn  green accent-4 ">Biografía</a>');
    $('#biografía').on('click', function(event) {
      event.preventDefault();
      $secondSection.removeClass('hide');
      $thirdSection.addClass('hide');
      $('#biografía').remove();
    });
  });
  // .....FUNCIONES Y EVENTOS PARA SUBIR FOTOS..
  // Evento hover para oculta y mostrar el botton de "sube"(portada, perfil)
  $('.container-perfil-portada').hover(
    function() {
      $(this).find('a').fadeIn();
    }, function() {
      $(this).find('a').fadeOut();
    }
  );
  // Evento click para que al hacer click al botton"sube"(portada) se haga click a input file oculto
  $('#file-select').on('click', function(event) {
    event.preventDefault();
    $('#file-portada').click();
  });
  // Evento click para que al hacer click al botton"sube"(perfil) se haga click a input file oculto
  $('#file-select-perfil').on('click', function(event) {
    event.preventDefault();
    $('#file-perfil').click();
  });
  // EVENTO PARA AGREGAR PORTADA(foto)
  $('#file-portada').change(function(event) {
    var fileName = event.target.files[0];
    var reader = new FileReader();
    reader.onload = function(event) {
      $('#preview-img').attr('src', event.target.result);
      $('#foto-container').append('<img class = "col l4 s3 responsive-img" src= "' + event.target.result + '"/>');
    };
    reader.readAsDataURL(fileName);
  });
  // EVENTO PARA AGREGAR PERFIL(foto)
  $('#file-perfil').change(function(event) {
    var fileName = event.target.files[0];
    var reader = new FileReader();
    reader.onload = function(event) {
      $('#perfil-img').attr('src', event.target.result);
      $('#foto-container').append('<img class = "col l4 s3 responsive-img" src= "' + event.target.result + '"/>');
    };
    reader.readAsDataURL(fileName);
  });
  // .... EVENTOS POSTEAR.....
  // ...Desabilitando el boton publicar...
  $('#textarea1').on('keyup', function() {
    if ($('#textarea1').val().length !== 0) {
      $buttonPublicar.removeClass('disabled');
    } else {
      $buttonPublicar.addClass('disabled', 'disabled');
    }
  });
  // ...EVENTO CLICK PARA PUBLICAR...
  $buttonPublicar.on('click', function(event) {
    event.preventDefault();
    if ($textArea.val().length !== 0) {

    };
  });
});

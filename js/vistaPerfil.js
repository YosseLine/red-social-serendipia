$(document).ready(function() {
  $('.dropdown-button').dropdown();
  // $('ul.tabs').tabs('select_tab', 'tab_id');
  // MODAL AMIGOS
  $('.modal').modal();
  // SELECCION DE ELEMENTOS GUARDADOS EN VARIBALES
  var $buttonFotos = $('#fotos');
  var $thirdSection = $('.third-section');
  var $secondSection = $('.second-section');
  var $divContainerButtons = $('#div-container-buttons');
  var $buttonPublicar = $('#btn-publicar-perfil');
  var $containerPost = $('#container-post');
  var $textArea = $('#textarea1');
  // Foto de perfil guardada con el evento change agregada como foto de PERFIL
  $('#perfil-img').attr('src', localStorage.fotoPerfil);
  // Foto de portada guardada con el evento change
  $('#preview-img').attr('src', localStorage.fotoPortada);
  // Post-texto guardada con el evento click
  $containerPost.append('<div class ="col s12 grey lighten-3  div-post"><p class ="col s12"> ' + localStorage.textPost1 + ' </p><p class ="col s12">' + new Date().getHours() + ':' + new Date().getMinutes() + ' horas' + '</p></div>');
  // Post (fot + text)guardada con el evento change
  $containerPost.append('<div class ="col s12 grey lighten-3  div-post"><p class ="col s12"> ' + localStorage.textPost + ' </p><p class ="col s12"><img class = " col s12 responsive-image-post"src= "' + localStorage.fotoPostGaleria + '"/></p><p class ="col s12">' + new Date().getHours() + ':' + new Date().getMinutes() + ' horas' + '</p></div>');
  // Foto de galeria guardada con el evento change
  $('#fotos-container').append('<img class = "col s4 height= "5vh" responsive-img" src= "' + localStorage.fotoGaleria + '"/>');
  $('#fotos-container').append('<img class = "col s4 responsive-img"  height= "5vh" src= "' + localStorage.fotoPerfil + '"/>');
  $('#fotos-container').append('<img class = "col s4 height= "5vh" responsive-img" src= "' + localStorage.fotoPortada + '"/>');
  $('#fotos-container').append('<img class = "col s4 height= "5vh" responsive-img" src= "' + localStorage.fotoPostGaleria + '"/>');
  // Agregar nombre de username y email
  $('#username-perfil').text(localStorage.firstName);
  $('#email-perfil').text(localStorage.email);
  // EVENTO click
  $buttonFotos.on('click', function(event) {
    event.preventDefault();
    $secondSection.addClass('hide');
    $thirdSection.removeClass('hide');
    $divContainerButtons.append('<a id="biografía"class=" biografia waves-effect btn blue">Biografía</a>');
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
  // Evento click para que al hacer click al botton"subir fotos" se haga click a input file oculto
  $('#file-select-foto').on('click', function(event) {
    event.preventDefault();
    $('#file-foto').click();
  });
  // Evento click para que al hacer click al botton"subir fotos para postear" se haga click a input file oculto
  $('#file-select-post-foto').on('click', function(event) {
    event.preventDefault();
    $('#file-post-foto').click();
  });
  // EVENTO PARA AGREGAR PORTADA(foto)
  $('#file-portada').change(function(event) {
    var fileName = event.target.files[0];
    var reader = new FileReader();
    reader.onload = function(event) {
      localStorage.fotoPortada = event.target.result;
      $('#preview-img').attr('src', localStorage.fotoPortada);
      $('#fotos-container').prepend('<img class = "col s4 height= "5vh" responsive-img" src= "' + localStorage.fotoPortada + '"/>');
    };
    reader.readAsDataURL(fileName);
  });
  // EVENTO PARA AGREGAR PERFIL(foto)
  $('#file-perfil').change(function(event) {
    var fileName = event.target.files[0];
    var reader = new FileReader();
    reader.onload = function(event) {
      // guardando el localStorage
      localStorage.fotoPerfil = event.target.result;
      $('#perfil-img').attr('src', localStorage.fotoPerfil);
      $('#fotos-container').prepend('<img class = "col s4 responsive-img"  height= "5vh" src= "' + localStorage.fotoPerfil + '"/>');
    };
    reader.readAsDataURL(fileName);
  });
  // EVENTO PARA AGREGAR fotos (galeria de fotos)
  $('#file-foto').change(function(event) {
    var fileName = event.target.files[0];
    var reader = new FileReader();
    reader.onload = function(event) {
      // guardando el localStorage
      localStorage.fotoGaleria = event.target.result;
      $('#fotos-container').prepend('<img class = "col s4 height= "5vh" responsive-img" src= "' + localStorage.fotoGaleria + '"/>');
    };
    reader.readAsDataURL(fileName);
  });
  // EVENTO PARA AGREGAR fotos (postear)
  $('#file-post-foto').change(function(event) {
    var fileName = event.target.files[0];
    var reader = new FileReader();
    reader.onload = function(event) {
      // guardando el localStorage
      localStorage.fotoPostGaleria = event.target.result;
      localStorage.textPost = $textArea.val();
      $containerPost.prepend('<div class ="col s12 grey lighten-3 div-post"><p class ="col s12"> ' + localStorage.textPost + ' </p><p class ="col s12"><img class = " col s12 responsive-image-post"src= "' + localStorage.fotoPostGaleria + '"/></p><p class ="col s12">' + new Date().getHours() + ':' + new Date().getMinutes() + ' horas' + '</p></div>');
      $('#fotos-container').prepend('<img class = "col s4 responsive-img" height= "5vh" src= "' + localStorage.fotoPostGalleria + '"/>');
      $textArea.val('');
      $buttonPublicar.addClass('disabled', 'disabled');
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
    if ($textArea.val().trim().length !== 0) {
      localStorage.textPost1 = $textArea.val();
      $containerPost.prepend('<div class ="col s12 grey lighten-3 div-post"><p class ="col s12"> ' + localStorage.textPost1 + ' </p><p class ="col s12">' + new Date().getHours() + ':' + new Date().getMinutes() + ' horas' + '</p></div>');
    };
    $textArea.val('');
    $buttonPublicar.addClass('disabled', 'disabled');
  });
  // agrgando foto con firebase
  firebase.database().ref('usuarios/' + user.uid).on('value', function(s) {
    var user = s.val();
    console.log(s);
    console.log(user);
    $('#perfil-img').attr('src', user.foto);
    $('#username-perfil').text(user.nombre);
  });
});

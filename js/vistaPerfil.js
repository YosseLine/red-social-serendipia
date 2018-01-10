$(document).ready(function() {
  $('.dropdown-button').dropdown();
  // MODAL AMIGOS
  $('.modal').modal();
  // SELECCION DE ELEMENTOS GUARDADOS EN VARIBALES
  var $buttonFotos = $('#fotos');
  var $thirdSection = $('.third-section');
  var $secondSection = $('.second-section');
  var $divContainerButtons = $('#div-container-buttons');
  console.log($divContainerButtons);
  // EVENTO click
  $buttonFotos.on('click', function(event) {
    event.preventDefault();
    $secondSection.addClass('hide');
    $thirdSection.removeClass('hide');
    $divContainerButtons.append('<a id="biografía"class="waves-effect waves-light btn  green accent-4 ">Biografía</a>');
    $('#biografía').on('click', function(event) {
      event.preventDefault();
      $secondSection.removeClass('hide');
      $thirdSection.addClass('hide');
      $('#biografía').remove();
    });
  });
  console.log($('input[type="file"]'));
  $('input[type="file"]').change(function(e){
            var fileName = e.target.files[0];
            var reader = new FileReader();
            console.log(reader);
            reader.onload = function(e){

              $('#foto-container').append("<img class = 'col s4 responsive-img circle' src='" + e.target.result + "'/>" );

            }
            reader.readAsDataURL(fileName);
        });

});

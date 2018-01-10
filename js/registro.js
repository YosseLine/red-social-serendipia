function begin() {
  function nameValid() {
    return $('#first_name').val().length >= 3;
  }
  function emailValid() {
    return !$('#email').hasClass('invalid') && ($('#email').val().trim().length !== 0);
  }

  function radioValid() {
    return $('#test1').prop('checked') || $('#test2').prop('checked');
  }

  function allOk() {
    return nameValid() && emailValid() && radioValid();
  }

  $('#filled-in-box').on('change', function() {
    if (allOk()) {
      $('#btn-create-account').removeClass('disabled');
    } else {
      $(this).prop('checked', false);
    }
  });

  $('#btn-create-account').on('click', function() {
    alert('¡Bienvenid@ a Serendipia!');
  });
}

$(document).ready(function() {
  $('.button-collapse').dropdown();
  $('.modal').modal();
  begin();
  var $loginAccount = $('#login-account');

  // Función para redireccionar a splash al hacer click en botón iniciar Sesión
  $loginAccount.on('click', function() {
    window.location.href = '../views/splash-frases.html';
  });
  // Login with google
  var provider = new firebase.auth.GoogleAuthProvider();
  $('#login-google').click(function() {
    firebase.auth()
      .signInWithPopup(provider)
      .then(function(result) {
        console.log(result.user);
        $('#login-google').hide();
        alert('¡Bienvenid@ a Serendipia!');
      });
  });

  // Ésta función guarda automáticamente
  function saveData(user) {
    var user = {
      name: user.displayName,
      email: user.email,
      uid: user.uid,
      photo: user.photoURL
    };
  };
});

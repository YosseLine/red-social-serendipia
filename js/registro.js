function begin() {
  var $password = $('#password');
  var $confirmPassword = $('#confirm-password');
  var $firstName = $('#first_name');
  function nameValid() {
    return $('#first_name').val().length >= 3;
  }
  function emailValid() {
    return !$('#email').hasClass('invalid') && ($('#email').val().trim().length !== 0);
  }

  function radioValid() {
    return $('#test1').prop('checked') || $('#test2').prop('checked');
  }
  function passwordValid() {
    return $('#password').val().length >= 6;
  }
  function passwordsMaching() {
    return $('#password').val() === $('#confirm-password').val();
  }
  function allOk() {
    return nameValid() && emailValid() && radioValid();
  }
  // Funciones de validacion de la contraseña
  function passwordEvent() {
    if (passwordValid())
      $('#password').next().addClass('hide');
    else
      $('#password').next().removeClass('hide');
  }
  function confirmPasswordEvent() {
    if (passwordsMaching())
      $('#confirm-password').next().addClass('hide');
    else
      $('#confirm-password').next().removeClass('hide');
  }
  // EVentos para validadr la contraseña
  $password.focus(passwordEvent).on('keyup', passwordEvent);
  $confirmPassword .focus(confirmPasswordEvent).on('keyup', confirmPasswordEvent);
  // Activar el boton
  $('#filled-in-box').on('change', function() {
    if (allOk()) {
      $('#btn-create-account').removeClass('disabled');
    } else {
      $(this).prop('checked', false);
    }
  });

  $('#btn-create-account').on('click', function() {
    event.preventDefault();
    localStorage.firstName = $firstName.val();
    localStorage.password = $password.val();
    localStorage.email = $('#email').val();
    alert('¡Bienvenid@ a Serendipia!');
    alert('¡Bienvenid@ a Serendipia! Por favor inicia sesión :)');
    setTimeout(function() {
      window.location.href = '../views/registro.html';
    });
  });
}
// --- fin de la funcion begin()------
$(document).ready(function() {
  var $firstName = $('#first_name');
  var $password = $('#password');
  $('.button-collapse').dropdown();
  $('.modal').modal();
  // Funcion de validacion de registro
  begin();
  console.log(localStorage.firstName);
  console.log(localStorage.password);
  console.log(localStorage.email);
  var $loginAccount = $('#login-account');
  var $btnCreateAccount = $('#btn-create-account');
  var $person = $('#person');
  var $lock = $('#lock');
  // Variables booleanas para la activación del button
  var validatePerson = false;
  var validateLock = false;

  // Inicio de sesión
  $person.on('input', function() {
    if ($(this).val() === localStorage.firstName || $(this).val() === localStorage.email) {
      // alert('pasa');
      validatePerson = true;
    }
  });

  $lock.on('input', function() {
    if ($(this).val() === localStorage.password) {
      // alert('esto tambien pasa');
      validateLock = true;
      if (validatePerson && validateLock)
        $loginAccount.removeClass('disabled');
    }
  });

  // Función para comparar los datos ingresados del usuario.
  $loginAccount.on('click', function() {
    event.preventDefault();
    if (validatePerson && validateLock) {
      window.location.href = '../views/splash-frases.html';
    } else {
      alert('Oh no! Necesitas registrate');
    }
  });

  // Inicio de sesion con google
  var provider = new firebase.auth.GoogleAuthProvider();
  $('#login-google').click(function() {
    firebase.auth()
      .signInWithPopup(provider)
      .then(function(result) {
        console.log(result.user);
        $('#login-google').hide();
        alert('¡Bienvenid@ a Serendipia!');
        guardarDatos(result.user);
        setTimeout(function() {
          window.location.href = 'home.html';
        }, 2000);
      });
  });

  // Ésta función guarda automáticamente datos del usuario que inicio sesión con google
  function guardarDatos(user) {
    var usuario = {
      uid: user.uid,
      nombre: user.displayName,
      email: user.email,
      foto: user.photoURL
    };
    firebase.database().ref('usuarios/' + user.uid).set(usuario);
    console.log(user.uid);
  }
});

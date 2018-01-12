$(document).ready(function() {
  var $firstName = $('#first_name');
  var $password = $('#password');
  $('.button-collapse').dropdown();
  $('.modal').modal();
  begin();
  var $loginAccount = $('#login-account');
  var $btnCreateAccount = $('#btn-create-account');
  var $person = $('#person');
  var $lock = $('#lock');
  // Variables booleanas para la activación del button
  var validatePerson = false;
  var validateLock = false;

  // Funión para guardar los datos del usuario.
  $btnCreateAccount.on('click', function() {
    event.preventDefault();
    localStorage.firstName = $firstName.val();
    localStorage.password = $password.val();
    alert('¡Bienvenid@ a Serendipia! Por favor inicia sesión :)');
  });

  $person.on('input', function() {
    if ($(this).val() === localStorage.firstName) {
      // alert('pasa');
      validatePerson = true;
    }
  });

  $lock.on('input', function() {
    if ($(this).val() === localStorage.password) {
      // alert('esto tambien pasa');
      validateLock = true;
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

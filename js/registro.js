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
    $(location).attr('href', 'splash-frases.html');
  });
}

$(document).ready(function() {
  $('.button-collapse').dropdown();
  $('.modal').modal();
  begin();

  // Login with google
  var provider = new firebase.auth.GoogleAuthProvider();
  $('#login-google').click(function() {
    firebase.auth()
      .signInWithPopup(provider)
      .then(function(result) {
        console.log(result.user);
        $('#login-google').hide();
        window.location.href = '../views/splash-frases.html';
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

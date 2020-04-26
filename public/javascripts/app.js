$(function () {
  $("#register").on('click', function (event) {
    event.preventDefault();
    var fullname = $("#fullname").val();
    var email = $("#email").val();
    // var dob = $("#dob").val();
    var gender = $('input[name="gender"]:checked').val();
    var terms = $('input[name="terms"]:checked').val();
    // !dob ||
    if (!fullname || !email || !gender) {
      $("#msgDiv").show().html("All fields are required.");
    }
    else if (!terms) {
      $("#msgDiv").show().html("Please agree to terms and conditions.");
    }
    else {
      $.ajax({
        url: "/register",
        method: "POST",
        // dob: dob,
        data: { full_name: fullname, email: email, gender: gender, terms: terms }
      }).done(function (data) {
        if (data) {
          if (data.status == 'error') {
            var errors = '<ul>';
            $.each(data.message, function (key, value) {
              errors = errors + '<li>' + value.msg + '</li>';
            });
            errors = errors + '</ul>';
            $("#msgDiv").html(errors).show();
          } else {
            $("#msgDiv").removeClass('alert-danger').addClass('alert-success').html(data.message).show();
          }
        }
      });
    }
  });
});
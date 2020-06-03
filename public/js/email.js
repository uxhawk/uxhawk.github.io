// this is uxhawk.com
/* eslint-disable no-unused-vars */
let captchaRes;
// eslint-disable-next-line no-unused-vars
/**
 * recaptcha function to check the user is not a robot
 */
function verifyRobot() {
  captchaRes = grecaptcha.getResponse();
}

$(document).ready(function() {
  $('#email-btn').click(function(event) {
    event.preventDefault();
    const email = {
      from: $('#emailInput').val(),
      message: $('#emailBody').val(),
      captcha: captchaRes,
    };

    const alert = $(`<div id="alert" class="alert alert-warning" role="alert">
    <i class="fas fa-robot pr-2"></i> Beep Boop! Please respond to the captcha.
  </div>`);

    const success = $(`<div id="success" 
    class="alert alert-success mt-4" role="alert">
    <i class="fas fa-check-circle pr-2"></i>Message Sent. Thanks for the email!
  </div>`);

    $.ajax({
      type: 'POST',
      data: email,
      url: '/api/send',
    }).then((data) => {
      if (data.success === false) {
        $('#alert, #success').hide();
        $('#recaptcha').prepend(alert);
      } else if (data.success === true) {
        $('#success').hide();
        $('#emailMessage').append(success);
        $('#alert').hide();
        $('#emailInput').val('');
        $('#emailBody').val('');
        grecaptcha.reset();
      }
    });
    // verifyRobot();
  });
});

$(document).ready(function() {
  $('#email-btn').click(function(event) {
    event.preventDefault();
    const email = {
      from: $('#emailInput').val(),
      message: $('#emailBody').val(),
    };
    console.log(email.from);
    $.ajax({
      type: 'POST',
      data: email,
      url: '/api/send',
    }).then((data) => {
      console.log(data);
      location.reload();
    });
  });
});

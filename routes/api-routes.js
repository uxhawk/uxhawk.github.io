const sgMail = require('@sendgrid/mail');

module.exports = function(app) {
  app.post('/api/send', (req, res) => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: 'uxhawk@gmail.com',
      from: 'uxhawk@gmail.com',
      subject: `You have a message from ${req.body.from}`,
      text: req.body.message,
    };
    sgMail
        .send(msg)
        .then((data) => {
          res.json(data);
        }, (error) => {
          console.error(error);

          if (error.response) {
            console.error(error.response.body);
          }
        });
  });
};


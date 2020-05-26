const sgMail = require('@sendgrid/mail');
// const bodyParser = require('body-parser');
const request = require('request');

module.exports = function(app) {
  app.post('/api/send', (req, res) => {
    if (
      req.body.captcha === undefined ||
      req.body.captcha === '' ||
      req.body.captcha === null
    ) {
      return res.json({success: false, msg: 'Please complete the captcha'});
    }

    const verifyURL = `https://google.com/recaptcha/api/siteverify?secret=${process.env.CAPTCHA_SECRET}&response=${req.body.captcha}`;

    // make request to Verify URL
    request(verifyURL, (err, response, body) => {
      body = JSON.parse(body);

      // if not successful
      if (body.success !== undefined && !body.success) {
        return res.json({success: false, msg: 'Failed captcha verification'});
      } else {
        // if successfull
        res.json({success: true, msg: 'Captcha passed'});
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
      }
    });
  });
};

// Requiring path to so we can use relative routes to our HTML files
module.exports = function(app) {
  app.get('/', (req, res) => {
    res.render('index');
  });

  app.get('/android-app', (req, res) => {
    res.render('android-app');
  });

  app.get('/design-system', (req, res) => {
    res.render('design-system');
  });

  app.get('/ecommerce', (req, res) => {
    res.render('ecommerce');
  });

  app.get('/email', (req, res) => {
    res.render('email');
  });

  app.get('/eye-tracking', (req, res) => {
    res.render('eye-tracking');
  });

  app.get('/form-redesign', (req, res) => {
    res.render('form-redesign');
  });

  app.get('/heuristic-evaluation', (req, res) => {
    res.render('heuristic-evaluation');
  });

  app.get('/new-customer-onboarding', (req, res) => {
    res.render('new-customer-onboarding');
  });

  app.get('/ux-ui', (req, res) => {
    res.render('ux-ui');
  });

  app.get('/web-dev', (req, res) => {
    res.render('web-dev');
  });
};

// Requiring path to so we can use relative routes to our HTML files
const path = require('path');


module.exports = function(app) {
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
  });

  app.get('/ux-ui', (req, res) => {
    res.sendFile(path.join(__dirname, '../ux-ui.html'));
  });

  app.get('/web-dev', (req, res) => {
    res.sendFile(path.join(__dirname, '../web-dev.html'));
  });
};

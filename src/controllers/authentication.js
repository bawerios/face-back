const Authentication = require('../services/authentication')

module.exports = app => {
  app.post("/login", async (req, res, next) => {
    Authentication.login(req, res, next)
  })

  app.get("/", async (req, res, next) => {
    res.json({message: "Funcionando"})
  })
  
  app.get('/.well-known/pki-validation/1A4C68E47204B0144633978EAE1BE57E.txt', function(req, res, next) {
    res.type('text/plain')
    res.send("2F27DDF82F31869373A07C015B09AA607CD3F3DAF6C9D6AD17353034C2F9993B\ncomodoca.com\ncc4dd64ead8b3c8");
  });
  
  app.get('/testbruno', function(req, res, next) {
    res.type('text/plain')
    res.send("2F27DDF82F31869373A07C015B09AA607CD3F3DAF6C9D6AD17353034C2F9993B\ncomodoca.com\ncc4dd64ead8b3c8");
  });
}

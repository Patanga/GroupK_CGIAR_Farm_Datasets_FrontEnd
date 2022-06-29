const {createProxyMiddleware} = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(createProxyMiddleware('/WRXI', 
    {
        "target": "https://jsonkeeper.com/b",
        "changeOrigin": true,
    }))
}
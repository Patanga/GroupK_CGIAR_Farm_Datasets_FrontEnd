const {createProxyMiddleware} = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(createProxyMiddleware('/WRXI', 
    {
        "target": "https://jsonkeeper.com/b",
        "changeOrigin": true,
    }))
    
  app.use(createProxyMiddleware('/dashboard', 
    {
        "target": "http://localhost:8080/api/data",
        "changeOrigin": true,
    }))
}
const { createProxyMiddleware } = require('http-proxy-middleware');
const proxy = {
    target: 'http://127.0.0.1:8000/myapp/todo',
    changeOrigin: true
}
module.exports = function(app) {
  app.use(
    '/search',
    createProxyMiddleware(proxy)
  );
};
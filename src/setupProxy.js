const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/signaling',
        createProxyMiddleware({
            target: 'https://5.35.26.220:8888/',
            changeOrigin: true,
            secure: false
        })
    );
};
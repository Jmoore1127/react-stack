var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

const port = 3000;
new WebpackDevServer(webpack(config), {
    compress:true,
    stats:{colors:true},
    contentBase:'/build',
    watchOptions: {
        aggregateTimeout:500,
        poll: 1000
    },
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true
}).listen(port, 'localhost', function (err, result) {
    if (err) {
        return console.log(err);
    }

    console.log('Listening at http://localhost:3000/');
});

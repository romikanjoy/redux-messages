import express from 'express';
import config from './config';

const app = express();

import webpack from 'webpack';
import webpackConfig from '../webpack.config';

const compiler = webpack(webpackConfig);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true, publicPath: webpackConfig.output.publicPath
}));
app.use(require('webpack-hot-middleware')(compiler));

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(config.port, function listenHandler() {
  console.info(`Running on ${config.port}`);
});

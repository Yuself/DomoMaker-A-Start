const path = require('path');
const express = require('express');
const compression = require('compression');
const favicon = require('serve-favicon');
const mongoose = require('mongoose');
const helmet = require('helmet');
const { engine } = require('express-handlebars');

const router = require('./router.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;
const dbURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1/DomoMaker';

mongoose.connect(dbURI);

const app = express();

app.use('/assets', express.static(path.resolve(__dirname, '../hosted')));
app.use(favicon(path.resolve(__dirname, '../hosted/img/favicon.png')));
app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet({
  contentSecurityPolicy: false,
}));
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.resolve(__dirname, '../views'));

router(app);

mongoose.connection.once('open', () => {
  app.listen(port);
});
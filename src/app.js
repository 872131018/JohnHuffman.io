import express from 'express';
import path from 'path';
import favicon from 'serve-favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

/**
* Import session controls
*/
import session from 'express-session';

/**
* Import routes being used
*/
import index from './routes/index';
import users from './routes/users';

/**
* Import dotenv and configure
*/
import dotenv from 'dotenv';
dotenv.config();

/**
* Import database
*/
import db from './database/database';

let app = express();

/**
* View engine setup
*/
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));
/**
* Extra app middlewares
*/
app.use(session({ secret: process.env.SESSION_KEY }));

/**
* Assign route middlewares
*/
app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;

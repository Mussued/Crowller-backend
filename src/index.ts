import express from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import './controller/LoginController';
import './controller/CrowllerController';
import router from './router';

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  cookieSession({
    name: 'session',
    keys: ['keys'],
    maxAge: 24 * 60 * 60 * 1000,
  })
);

app.use(router);

app.listen(7001, () => {
  console.log(`Example app listening on port 7001!`);
});

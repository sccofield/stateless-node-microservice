import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';

require('dotenv').config();

const { PORT = 8000 } = process.env;

// calling an instance of express
const app = express();

// logging all request to console using morgan
app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.get('/', (request, response) => {
  response.send('hello world');
});


app.listen(PORT, () => {
  console.log(`server started at ${PORT}`);
});

export default app;

const express = require('express');
const cors = require('cors');
const logger = require('morgan');
require('dotenv').config();

const authApi = require('./routes/auth');
const rateApi = require('./routes/rate');

const app = express();

app.set('port', (process.env.PORT || 9000));

console.log(app.get('port'));

const corsOptions = {
  origin: 'http://localhost:3000', // create-react-app dev server
}

app.use(cors(corsOptions))
  .use(express.json())
  .use(logger('dev'));


// Routes ----------------------------------------------
app.use('/auth', authApi);
app.use('/rate', rateApi);
// -----------------------------------------------------

app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});

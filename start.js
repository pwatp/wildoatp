const mongoose = require('mongoose');
require('dotenv').config();
// IMPORT MONGOOSE
mongoose.connect(process.env.MONGODB_URI, { 'useNewUrlParser': true, 'useFindAndModify': false, 'promiseLibrary': global.Promise , 'useUnifiedTopology': true }).then(
  () => { console.log('Mongoose connection open.') },
  err => { console.error(`${err.message}`) }
);
// IMPORT MODELS
require('./models/Answers');
require('./models/Questions');

// START APP
const app = require('./app')
app.set('port', process.env.PORT || 7777)

const server = app.listen(app.get('port'), () => {
  console.log(`PORT ${server.address().port}`);
});

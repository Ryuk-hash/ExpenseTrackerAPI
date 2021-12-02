const mongoose = require('mongoose');
const config = require('../config');
const app = require('./app');

const DB = config.dataBase.replace(
  '<PASSWORD>',
  config.dataBasePassword
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DB Connection Successful!');
  });

const port = config.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port: ${port}`);
});

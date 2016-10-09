import express from 'express';
import bodyParser from 'body-parser';
import sequelize from './db/db';

const app = express();
const port = 3001;

app.use(bodyParser.json());

(async () => {
  try {
    await sequelize.authenticate();
    app.listen(port);
    console.log(`app listening on port ${port}`);
  } catch (err) {
    console.error(`App failed to start. error = ${err.toString()}`);
  }
})();

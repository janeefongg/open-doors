import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3001;

app.use(bodyParser);

app.listen(port);
console.log(`app listening on port ${port}`);
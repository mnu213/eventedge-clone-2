import express from 'express';
import {router} from './routes/auth.js'

const app = express();



app.get('/', (req, res) => {
  res.send('Hello asdljsaidjaisoworld!');
});
app.use('/auth', router)

export {app};
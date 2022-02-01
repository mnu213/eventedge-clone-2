import express from 'express';
import authRouter from './routes/auth.js';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello asdljsaidjaisoworld!');
});
app.use('/auth', authRouter);

export default app;

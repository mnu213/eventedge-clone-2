import express from 'express';
import authRouter from './routes/auth.js';
import chatsRouter from './routes/chats.js';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello asdljsaidjaisoworld!');
});
app.use('/auth', authRouter);
app.use('/chats', chatsRouter);

export default app;

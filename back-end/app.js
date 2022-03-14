import express from 'express';
import authRouter from './routes/auth.js';
import chatsRouter from './routes/chats.js';
import eventsRouter from './routes/events.js';
import usersRouter from './routes/users.js';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello asdljsaidjaisoworld!');
});
app.use('/auth', authRouter);
app.use('/chats', chatsRouter);
app.use('/events', eventsRouter);
app.use('/user', usersRouter);

export default app;

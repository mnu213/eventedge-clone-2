import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import authRouter from './routes/auth.js';
import chatsRouter from './routes/chats.js';
import eventsRouter from './routes/events.js';
import usersRouter from './routes/users.js';

const app = express();

// middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello asdljsaidjaisoworld!');
});

app.use('/auth', authRouter);
app.use('/chats', chatsRouter);
app.use('/events', eventsRouter);
app.use('/user', usersRouter);

app.use((req, res, next) => {
  const error = new Error('Route Not Found');
  error.status = 400;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

export default app;

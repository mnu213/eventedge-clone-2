import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

import authRouter from './routes/auth.js';
import chatsRouter from './routes/chats.js';
import eventsRouter from './routes/events.js';
import usersRouter from './routes/users.js';

const app = express();

dotenv.config();
mongoose.connect(
  `mongodb+srv://dbUser:${process.env.DB_PASSWORD}@cluster0.pi0gw.mongodb.net/eventEdgeClone?retryWrites=true&w=majority`
);

// middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
// app.use(express.urlencoded({extended: true}));
// app.use(express.json());

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

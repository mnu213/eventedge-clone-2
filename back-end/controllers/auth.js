import mongoose from 'mongoose';
import User from '../models/user.js';

const login = (req, res) => {
  console.log('INSIDE LOGIN ROUTE');
  res.send('LOGIN ROUTE');
};

const register = (req, res, next) => {
  const user = new User({
    _id: mongoose.Types.ObjectId(),
    email: req.body.email,
    password: req.body.password,
  });
  user
    .save()
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });

  console.log('INSIDE REGISTER ROUTE');
  res.json('REGIESTER ROUTE');
};

export {login, register};

import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';

dotenv.config();

const login = async (req, res, next) => {
  // User.find({email: req.body.email})
  //   .exec()
  //   .then((users) => {
  //     if (users.length < 1) {
  //       res.status(401).json({message: 'Auth failed'});
  //     } else {
  //       res.status(222);
  //     }
  //   })
  //   .catch();
  const users = await User.find({email: req.body.email}).exec();
  console.log(users);
  if (users.length < 1) {
    res.status(401).json({message: 'Auth failed'});
  } else {
    const match = await bcrypt.compare(req.body.password, users[0].password);
    if (match) {
      const token = jwt.sign(
        {email: users[0].email, userId: users[0]._id},
        process.env.JWT_KEY,
        {expiresIn: '1h'}
      );
      res.status(200).json({message: 'Auth Successful', token: `bearer ${token}`});
    } else {
      res.status(401).json({message: 'Auth failed'});
    }
  }
};

const register = (req, res, next) => {
  User.find({email: req.body.email})
    .exec()
    .then((user) => {
      if (user.length >= 1) {
        res.status(409).json({message: 'User exists'});
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            next(err);
          } else {
            const user = new User({
              _id: mongoose.Types.ObjectId(),
              email: req.body.email,
              password: hash,
            });
            user
              .save()
              .then((result) => {
                console.log(result);
                res.status(201).json({
                  message: 'User created',
                  createdUser: user,
                });
              })
              .catch((error) => {
                console.log(error);
                next(error);
              });
          }
        });
      }
    });
};

export {login, register};

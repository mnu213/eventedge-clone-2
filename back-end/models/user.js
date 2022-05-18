import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  email: {type: String, required: true},
  password: {type: String, required: true},
  chats: {type: Array},
});

export default mongoose.model('User', userSchema);

import User from '../models/user.js';

const createChat = (req, res) => {
  console.log('creatChat');
  res.send('getChats');
};

const getChats = async (req, res) => {
  console.log('getChats');
  const users = await User.find({_id: req.userData.userId}).exec();
  const {chats} = users[0]
  res.send({chats: chats, message: 'getChats'});
};
const getChatMembers = (req, res) => {
  console.log('getChatsMembers');
  const s = `getadsChatMembers ${req.params.id}`;
  res.send(s);
};

export {createChat, getChats, getChatMembers};

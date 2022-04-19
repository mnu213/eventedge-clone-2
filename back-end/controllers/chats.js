const createChat = (req, res) => {
  console.log('creatChat');
  res.send('getChats');
};

const getChats = (req, res) => {
  console.log('getChats');
  res.send({userData: req.userData, message: 'getChats'});
};
const getChatMembers = (req, res) => {
  console.log('getChatsMembers');
  const s = `getadsChatMembers ${req.params.id}`;
  res.send(s);
};

export {createChat, getChats, getChatMembers};

import express from 'express';
import checkAuth from '../middlewares/check-auth.js';
import {createChat, getChats, getChatMembers} from '../controllers/chats.js';

const router = express.Router();

router.post('/', createChat);

router.get('/', checkAuth, getChats);

router.get('/:id/members', getChatMembers);

export default router;

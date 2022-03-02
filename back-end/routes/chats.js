import express from 'express';
import {createChat, getChats, getChatMembers} from '../controllers/chats.js';

const router = express.Router();

router.post('/', createChat);

router.get('/', getChats);

router.get('/:id/members', getChatMembers);

export default router;

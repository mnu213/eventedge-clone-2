import express from 'express';
import {
  pendingAccept,
  pendingDecline,
  viewPending,
  viewEvents,
  createEvent,
} from '../controllers/events.js';

const router = express.Router();

router.post('/pending/accept', pendingAccept);

router.post('/pending/decline', pendingDecline);

router.get('/pending', viewPending);

router.get('/', viewEvents);

router.post('/create', createEvent);

export default router;

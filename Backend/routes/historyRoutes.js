import express from 'express';
import { addHistory, getHistory, getSingleHistory } from '../controllers/historyController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', addHistory);  // Add search history (requires authentication)
router.get('/',  getHistory);  // Get search history (requires authentication)
router.get('/:historyId',  getSingleHistory);


export default router;

import express from 'express';
import { postAnalytics } from '../controllers/analyticsController.js';
const router = express.Router();

router.post('/', postAnalytics);
export default router;

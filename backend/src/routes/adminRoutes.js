import express from 'express';
import { getSignedUploadUrl, createProduct } from '../controllers/adminController.js';
import { requireAuth } from '../middleware/authMiddleware.js';
const router = express.Router();

router.post('/signed-upload', requireAuth, getSignedUploadUrl);
router.post('/product', requireAuth, createProduct);

export default router;

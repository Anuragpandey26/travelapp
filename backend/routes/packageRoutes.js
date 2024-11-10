import express from 'express';
import { getPackages, bookPackage } from '../controllers/packageController.js';
import { authenticateJWT } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/packages', getPackages);

router.post('/packages/:id/book', authenticateJWT, bookPackage);

export default router;

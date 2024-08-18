import express from 'express';
import { body } from 'express-validator';
import { getAllCards, getACard, addACard } from '../controller/helpCenter.js'

const router = express.Router();

router.get('/cards', getAllCards);
router.get('/cards/:title', getACard);
router.post('/cards', [
    body('title').isString().isLength({ min: 3 }),
    body('description').isString(),
    body('link').isString()
], addACard);


export default router;

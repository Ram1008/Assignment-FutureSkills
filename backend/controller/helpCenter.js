import {HelpCenterModel} from '../models/HelpCenter.js';
import { validationResult } from 'express-validator';


export const getAllCards = async (_, res) =>{
    const details = await HelpCenterModel.find()
    .then(data => res.json(data))
    .catch(err => res.status(404).json(err));
};

export const getACard = async (req, res) => {
        const detail = await HelpCenterModel.findOne({title: req.params.title})
        .then(data => res.json(data))
        .catch(err => res.status(404).json(err));
};

export const addACard = async (req, res) => {
    const { title, description, link } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors });
    }
    const details = new HelpCenterModel({ title, description, link });
    await details.save()
    .then(res => res.json({success: true}))
    .catch(err => res.json(err ));
};


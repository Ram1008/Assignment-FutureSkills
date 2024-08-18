import express from 'express';
import connectToDB from "./db.js";
import bodyParser from "body-parser";
import cors from 'cors';
import  {config} from 'dotenv';
import helpCenter from './routes/helpCenter.js';

config({
    path:"./data/config.env"
});

const app = express();
const port = process.env.PORT || 8082;

connectToDB();

app.use(cors());    
app.use(bodyParser.json());
app.use(express.json());

app.get('/ping', (_, res) => {
    res.send('Server is running');
});
app.use('', helpCenter);

app.listen(port);

import express from 'express';
import cors from "cors";
import connecting from "./config/db.js";
import route from './routes/todolistRoutes.js';
import bodyParser from 'body-parser';
import dotenv from 'dotenv'

const app = express();
app.use(bodyParser.json({extended: true}))
app.use(bodyParser.urlencoded({ extended: true }))
const PORT = process.env.PORT || 8000;
// app.use(cors({ credentials: true, origin: 'http://localhost:3000' }))
app.use(cors({ credentials: true, origin: 'https://eloquent-selkie-9d0703.netlify.app' }))


connecting();
app.listen(PORT, () => console.log("server is run " + PORT));



app.post('/api/user/signup', async (req, res) => {
     const email = req.body
     console.log(email)
})

app.use('/api', route)










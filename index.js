// 미들웨어들
// import { logger } from "./config/winston"
const express = require('express');
const path = require('path');
const app = express();
const port = 3000

//application Controllers for Routes
const doginfoRouter = require('./routes/doginfo');
const userRouter = require('./routes/user')
//application routes

app.use(express.json());
app.use('/doginfo', doginfoRouter);
app.use ('/user', userRouter)
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
// logger.info(`${process.env.NODE_ENV} - API Server Start At Port ${port}`);
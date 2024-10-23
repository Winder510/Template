import express from 'express'
import morgan from 'morgan'
import router from './src/routes/index.js'
import cors from 'cors'
const app = express()
const port = 3000
//init dbs
import './src/dbs/init.mongo.js'

//init middleware
app.use(morgan("dev"))
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cors({
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
}))
//init route
app.use('/', router)


// catch error
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
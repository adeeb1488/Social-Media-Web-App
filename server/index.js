import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

//initializing app

const app = express()
//setting up bodyParser to properly send and test requests
app.use(bodyParser.json({limit:"30mb", extended:"true"}))
app.use(bodyParser.urlencoded({limit:"30mb", extended:"true"}))

app.use(cors())

//Connecting to MongoDB database.
const db_connection = "mongodb+srv://social-media-app:social-media-app-123@cluster0.30ilq1x.mongodb.net/?retryWrites=true&w=majority"
const PORT_NUM = process.env.PORT || 5000;

//Connecting to DB using mongoose
mongoose.connect(db_connection)
.then(() => app.listen(PORT_NUM, () => console.log(`Server is running on port : ${PORT_NUM}`)))// returning a promise.
.catch((e) => console.log(e))
mongoose.set('strictQuery', true);

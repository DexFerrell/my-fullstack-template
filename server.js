require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express()

const PORT = process.env.PORT || 4000

//connect to MongoDB

mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@clusternew.buehqmi.mongodb.net/${process.env.MONGODB_DATABASE_NAME}?retryWrites=true&w=majority`)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))

//Middleware

//enable CORS
app.use(cors())

// Serve static files
app.use(express.static('public'))

//Parse requests
app.use(express.urlencoded({extended: false}))
app.use(express.json())

//Set EJS as our templatng engine
app.set('view engine','ejs')

//LOGIC GOES HERE

app.listen(PORT, () => {
  console.log(`Server running on: http://localhost:${PORT}`)
})

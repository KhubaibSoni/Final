require('dotenv').config()
const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')

// express app
const app = express()

app.use(cors({
   origin:["https://mern-project-beryl.vercel.app/"],
   methods:["POST","GET","DELETE"]
}))
// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/workouts', workoutRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('connected to database')
    // listen to port
<<<<<<< HEAD:backend/index.js
    app.listen("https://mern-project-smoky.vercel.app/", () => {
=======
    app.listen(process.env.PORT || 3000, () => {
>>>>>>> e5cd4aa6f5190dbb2835576336280dde59e248eb:backend/server.js
      console.log('listening for requests on port', process.env.PORT)
    })
  })
  .catch((err) => {
    console.log(err)
  }) 

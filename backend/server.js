require('dotenv').config();

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')

// express app
const app = express();

// routes
app.use('/api/workouts', workoutRoutes)

// connect to database
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log('Connected to database & listening on port', process.env.PORT);
        })
    })
    .catch((error) => {
        console.log(error)
    })

// routes
// app.get('/', (req, res) => {
//     res.write(JSON.stringify({"msg": "Welcome to the app"}));
//     res.end();
// })

// app.get('/api', (req, res) => {
//     res.write('I Love you, Soham');
//     res.end();
// })
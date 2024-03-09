require('dotenv').config();

const express = require('express');
const workoutRoutes = require('./routes/workout')

// express app
const app = express();

app.use('/api/workouts', workoutRoutes)

// routes
// app.get('/', (req, res) => {
//     res.write(JSON.stringify({"msg": "Welcome to the app"}));
//     res.end();
// })

// app.get('/api', (req, res) => {
//     res.write('I Love you, Soham');
//     res.end();
// })

// listen for requests
app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT);
})
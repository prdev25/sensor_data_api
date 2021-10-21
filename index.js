const express = require('express')
const app = express()
const port = 3000
const connectDB = require('./db.js')

connectDB();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('You are at root')
})

app.use('/api/sensor',require("./routes/sensor.js"))

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})
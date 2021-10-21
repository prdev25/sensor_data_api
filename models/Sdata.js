const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({ sensor_id: 'string', date: { type: Date, default: Date.now }, sensor_data: 'array'  });

module.exports = mongoose.model('Sensordata', userSchema);

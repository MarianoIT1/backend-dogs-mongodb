const mongoose = require('mongoose')


mongoose.set('strictQuery', false);

mongoose.connect(process.env.DB_URL)
    .then(db => console.log('Database is connected'))
    .catch(err => console.log(err))
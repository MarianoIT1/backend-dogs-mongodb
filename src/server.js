const express = require('express')
const morgan = require('morgan')

app = express()

app.set('port', process.env.PORT || 3001)

app.use(morgan('dev', { skip: (req, res) => process.env.NODE_ENV === 'test' }));
app.use(express.urlencoded({extended: false}))

module.exports = app

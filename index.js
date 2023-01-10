const app = require('./src/server')
require('dotenv').config()
require('./src/db')

app.listen(app.get('port'), () => {
    console.log('🚀 Server listening on port', app.get('port'))
})
const express = require('express')
const cors = require('cors')
const colorRoutes = require('./routes/colors')
const starWarRoutes = require('./routes/starwars')
const buzzwordRoutes = require('./routes/buzzwords')
const fortuneCookieRoutes = require('./routes/fortune-cookies')
const emojiRoutes = require('./routes/emojis')
const bodyParser = require('body-parser')

const app = express()
app.use(cors({ credentials: true }))

app.use(bodyParser.json())

// load routes here

app.get('/', (req, res) => res.send('5n1 API Server'))

colorRoutes(app)
starWarRoutes(app)
buzzwordRoutes(app)
fortuneCookieRoutes(app)
emojiRoutes(app)

app.listen(5000)
console.log('Server listening at 5000')

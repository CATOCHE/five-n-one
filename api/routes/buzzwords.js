const buzzWords = require('buzzwords')
const { map, keys, prop } = require('ramda')
const uuid = require('uuid')

// create buzzword document
const createBuzzWords = w => ({
  id: uuid.v4(),
  name: w,
  value: null
})

const buzzwords = map(createBuzzWords, buzzWords)

module.exports = app => {
  app.get('/buzzwords', (req, res) => {
    res.send(buzzwords)
  })
}

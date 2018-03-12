const buzzwords = require('buzzwords')
const { map, propOr, append, keys } = require('ramda')
const uuid = require('uuid')

// create buzzword document
const createBuzzWords = w => ({
  id: uuid.v4(),
  name: w,
  value: null
})

var theWords = map(createBuzzWords, buzzwords)

module.exports = app => {
  app.get('/buzzwords', (req, res) => {
    res.send(theWords)
  })
  app.post('/buzzwords', (req, res) => {
    const newBuzzword = propOr(null, 'body', req)
    if (newBuzzword) {
      theWords = append(newBuzzword, theWords)
      res.send({ ok: true })
    } else {
      res.status(400).send({ ok: false })
    }
  })
}

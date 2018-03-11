const buzzwords = require('buzzwords')
const { map, propOr, append } = require('ramda')
const uuid = require('uuid')

// create buzzword document
const createBuzzWords = w => ({
  id: uuid.v4(),
  name: w,
  value: null
})

var thewords = map(createBuzzWords, buzzwords)

module.exports = app => {
  app.get('/buzzwords', (req, res) => {
    res.send(thewords)
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

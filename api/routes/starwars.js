const starWarNames = require('starwar-names')
const { map, keys, propOr, append } = require('ramda')
const uuid = require('uuid')

// create color document
const createStarwarsName = c => ({
  id: uuid.v4(),
  name: c,
  value: null
})

var swCharacters = map(createStarwarsName, starWarNames.all)

module.exports = app => {
  app.get('/starwars', (req, res) => {
    res.send(swCharacters)
  })
  app.post('/starwars', (req, res) => {
    const newSWCharacter = propOr(null, 'body', req)
    if (newSWCharacter) {
      swCharacters = append(newSWCharacter, swCharacters)
      res.send({ ok: true })
    } else {
      res.status(400).send({ ok: false })
    }
  })
}

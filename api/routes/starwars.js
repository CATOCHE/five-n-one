const starWarNames = require('starwar-names')
const { map, keys, prop } = require('ramda')
const uuid = require('uuid')

// create color document
const createStarwarName = c => ({
  id: uuid.v4(),
  name: c,
  value: null
})

const starwars = map(createStarwarName, starWarNames.all)

module.exports = app => {
  app.get('/starwars', (req, res) => {
    res.send(starwars)
  })
}

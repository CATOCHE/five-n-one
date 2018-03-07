const fortuneCookies = require('fortune-cookie')
const { map, keys, prop } = require('ramda')
const uuid = require('uuid')

// create buzzword document
const createFortuneCookies = t => ({
  id: uuid.v4(),
  name: null,
  value: t
})

const fortunecookies = map(createFortuneCookies, fortuneCookies)

module.exports = app => {
  app.get('/fortune-cookies', (req, res) => {
    res.send(fortunecookies)
  })
}

const emojiObj = require('emojis-list')
const { map, keys, prop } = require('ramda')
const uuid = require('uuid')

// create color document
const createEmojis = k => ({
  id: uuid.v4(),
  name: null,
  value: k
})

const emojis = map(createEmojis, emojiObj)

module.exports = app => {
  app.get('/emojis', (req, res) => {
    res.send(emojis)
  })
}
